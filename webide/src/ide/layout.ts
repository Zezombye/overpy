import { reactive, watch } from "vue";

import { readLocal, writeLocal } from "./storage";

export type SideBarView = "explorer" | "search";
export type PanelView = "problems" | "output";

const STORAGE_KEY = "overpy-ide.layout";

export const layout = reactive({
    sideBarVisible: true,
    sideBarWidth: 260,
    activeView: "explorer" as SideBarView,
    panelVisible: false,
    panelHeight: 220,
    activePanel: "problems" as PanelView,
    panelMaximized: false,
});

Object.assign(layout, readLocal<Partial<typeof layout>>(STORAGE_KEY) ?? {}, { panelMaximized: false });

watch(layout, () => writeLocal(STORAGE_KEY, layout));

/** Shows the given side bar view, or hides the side bar if it is already showing it. */
export function toggleSideBarView(view: SideBarView): void {
    if (layout.sideBarVisible && layout.activeView === view) {
        layout.sideBarVisible = false;
    } else {
        layout.activeView = view;
        layout.sideBarVisible = true;
    }
}

export function showSideBarView(view: SideBarView): void {
    layout.activeView = view;
    layout.sideBarVisible = true;
}

export function togglePanelView(view: PanelView): void {
    if (layout.panelVisible && layout.activePanel === view) {
        layout.panelVisible = false;
    } else {
        layout.activePanel = view;
        layout.panelVisible = true;
    }
}

export function showPanelView(view: PanelView): void {
    layout.activePanel = view;
    layout.panelVisible = true;
}
