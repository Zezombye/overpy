export class EventEmitter<T> {
    private readonly listeners = new Set<(value: T) => void>();

    on(listener: (value: T) => void): () => void {
        this.listeners.add(listener);
        return () => this.listeners.delete(listener);
    }

    fire(value: T): void {
        for (const listener of [...this.listeners]) {
            listener(value);
        }
    }
}
