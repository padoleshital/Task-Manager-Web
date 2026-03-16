export const getPageTitle = (pathname) => {
    const titles = {
        "/": "Dashboard",
        "/tasks": "Tasks",
        "/teams": "Teams",
        "/projects": "Projects",
        "/calendar": "Calendar",
        "/documents": "Documents",
        "/reports": "Reports",
    };

    return titles[pathname] || "Page";

}