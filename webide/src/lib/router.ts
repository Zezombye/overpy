import { ref } from "vue";

export type Route = { name: "projects" } | { name: "login" } | { name: "ide"; projectId: string } | { name: "notFound" };

function parse(pathname: string): Route {
    if (pathname === "/" || pathname === "") {
        return { name: "projects" };
    }
    if (pathname === "/login") {
        return { name: "login" };
    }
    const ideMatch = /^\/ide\/([0-9a-f]+)\/?$/.exec(pathname);
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

/** The sign-in page, which comes back to the current page. */
export function loginUrl(): string {
    return `/login?next=${encodeURIComponent(location.pathname)}`;
}
