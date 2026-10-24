import { reactive } from "vue";

export const OVERPY_CHANNEL = "OverPy";
export const LANGUAGE_SERVER_CHANNEL = "OverPy Language Server";

const MAX_LINES = 5000;

export const output = reactive({
    channels: {
        [OVERPY_CHANNEL]: [] as string[],
        [LANGUAGE_SERVER_CHANNEL]: [] as string[],
    } as Record<string, string[]>,
    activeChannel: OVERPY_CHANNEL,
});

export function appendOutput(channel: string, text: string): void {
    const lines = (output.channels[channel] ??= []);
    const time = new Date().toLocaleTimeString();
    for (const line of text.split(/\r?\n/)) {
        lines.push(`[${time}] ${line}`);
    }
    if (lines.length > MAX_LINES) {
        lines.splice(0, lines.length - MAX_LINES);
    }
}

export function clearOutput(channel: string): void {
    output.channels[channel] = [];
}
