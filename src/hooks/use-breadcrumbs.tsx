import { useLocation } from "react-router-dom";

type NavItem = {
    title: string;
    url: string;
    items?: NavItem[];
};

export function useBreadcrumbs(navItems: NavItem[]) {
    const location = useLocation();
    const path = location.pathname;

    const findPath = (items: NavItem[], trail: NavItem[] = []): NavItem[] | null => {
        for (const item of items) {
            const newTrail = [...trail, item];
            if (item.url === path) return newTrail;
            if (item.items) {
                const childTrail = findPath(item.items, newTrail);
                if (childTrail) return childTrail;
            }
        }
        return null;
    };

    return findPath(navItems) ?? [];
}