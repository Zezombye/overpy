import { reactive } from "vue";

export type MenuItem =
    | {
          label: string;
          run: () => unknown;
          keybinding?: string;
          disabled?: boolean;
          checked?: boolean;
      }
    | { separator: true };

export const contextMenu = reactive({
    visible: false,
    x: 0,
    y: 0,
    items: [] as MenuItem[],
});

export function showContextMenu(position: { x: number; y: number }, items: MenuItem[]): void {
    // Drop leading, trailing and duplicate separators (items are often built conditionally).
    const cleaned = items.filter((item, index, all) => !("separator" in item) || (index > 0 && index < all.length - 1 && !("separator" in all[index - 1])));
    Object.assign(contextMenu, { visible: true, x: position.x, y: position.y, items: cleaned });
}

export function hideContextMenu(): void {
    contextMenu.visible = false;
}
