import { ref } from "vue";

export type Route = { name: "projects" } | { name: "login" } | { name: "ide"; projectId: string } | { name: "notFound" };

/** Id of the project used without account, which is stored in the browser (see src/ide/localProject.ts). */
export const LOCAL_PROJECT_ID = "local";

function parse(pathname: string): Route {
    if (pathname === "/" || pathname === "") {
        return { name: "projects" };
    }
    if (pathname === "/login") {
        return { name: "login" };
    }
    const ideMatch = new RegExp(`^/ide/([0-9a-f]+|${LOCAL_PROJECT_ID})/?$`).exec(pathname);
    if (ideMatch) {
        return { name: "ide", projectId: ideMatch[1] };
    }
    return { name: "notFound" };
}

export const route = ref<Route>(parse(location.pathname));

window.addEventListener("popstate", () => {
    route.value = parse(location.pathname);
});

/** Client-side navigation between the login and projects pages. */
export function navigate(path: string, options: { replace?: boolean } = {}): void {
    if (options.replace) {
        history.replaceState(null, "", path);
    } else {
        history.pushState(null, "", path);
    }
    route.value = parse(location.pathname);
}

export function ideUrl(projectId: string): string {
    return `/ide/${projectId}`;
}

/** The sign-in page, which comes back to the current page (to the projects page from the local project, which is not in the account). */
export function loginUrl(): string {
    const next = route.value.name === "ide" && route.value.projectId === LOCAL_PROJECT_ID ? "/" : location.pathname;
    return `/login?next=${encodeURIComponent(next)}`;
}
