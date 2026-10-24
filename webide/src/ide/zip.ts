/* Minimal ZIP writer (stored, no compression), used to download a whole project. */

const crcTable = (() => {
    const table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
        let c = n;
        for (let k = 0; k < 8; k++) {
            c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
        }
        table[n] = c >>> 0;
    }
    return table;
})();

function crc32(data: Uint8Array): number {
    let crc = 0xffffffff;
    for (const byte of data) {
        crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
}

function dosDateTime(date: Date): { time: number; date: number } {
    return {
        time: (date.getHours() << 11) | (date.getMinutes() << 5) | (date.getSeconds() >> 1),
        date: ((Math.max(date.getFullYear(), 1980) - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate(),
    };
}

export interface ZipEntry {
    /** '/'-separated; directories end with '/'. */
    path: string;
    content?: string;
    mtime: number;
}

export function createZip(entries: ZipEntry[]): Blob {
    const encoder = new TextEncoder();
    const chunks: Uint8Array[] = [];
    const centralDirectory: Uint8Array[] = [];
    let offset = 0;

    for (const entry of entries) {
        const name = encoder.encode(entry.path);
        const data = encoder.encode(entry.content ?? "");
        const crc = crc32(data);
        const { time, date } = dosDateTime(new Date(entry.mtime));

        const local = new DataView(new ArrayBuffer(30));
        local.setUint32(0, 0x04034b50, true);
        local.setUint16(4, 20, true); // version needed
        local.setUint16(6, 0x0800, true); // UTF-8 names
        local.setUint16(8, 0, true); // stored
        local.setUint16(10, time, true);
        local.setUint16(12, date, true);
        local.setUint32(14, crc, true);
        local.setUint32(18, data.length, true);
        local.setUint32(22, data.length, true);
        local.setUint16(26, name.length, true);
        local.setUint16(28, 0, true);
        chunks.push(new Uint8Array(local.buffer), name, data);

        const central = new DataView(new ArrayBuffer(46));
        central.setUint32(0, 0x02014b50, true);
        central.setUint16(4, 20, true); // version made by
        central.setUint16(6, 20, true);
        central.setUint16(8, 0x0800, true);
        central.setUint16(10, 0, true);
        central.setUint16(12, time, true);
        central.setUint16(14, date, true);
        central.setUint32(16, crc, true);
        central.setUint32(20, data.length, true);
        central.setUint32(24, data.length, true);
        central.setUint16(28, name.length, true);
        central.setUint32(38, entry.path.endsWith("/") ? 0x10 : 0, true); // external attributes: directory flag
        central.setUint32(42, offset, true);
        centralDirectory.push(new Uint8Array(central.buffer), name);

        offset += 30 + name.length + data.length;
    }

    const centralSize = centralDirectory.reduce((size, chunk) => size + chunk.length, 0);
    const end = new DataView(new ArrayBuffer(22));
    end.setUint32(0, 0x06054b50, true);
    end.setUint16(8, entries.length, true);
    end.setUint16(10, entries.length, true);
    end.setUint32(12, centralSize, true);
    end.setUint32(16, offset, true);

    return new Blob([...chunks, ...centralDirectory, new Uint8Array(end.buffer)] as BlobPart[], { type: "application/zip" });
}

export function downloadBlob(blob: Blob, fileName: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 10_000);
}
