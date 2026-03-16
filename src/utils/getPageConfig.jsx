export const getPageConfig = (pathname) => {
    const config = {
        "/": {
            title: "Dashboard",
            actionLabel: "Add Project",
        },
        "/tasks": {
            title: "Tasks",
            actionLabel: "Add Task",
        },
        "/teams": {
            title: "Teams",
            actionLabel: "Add Team",
        },
        "/projects": {
            title: "Projects",
            actionLabel: "Add Project",
        },
        "/calendar": {
            title: "Calendar",
            actionLabel: "Add Event",
        },
        "/documents": {
            title: "Documents",
            actionLabel: "Add Document",
        },
        "/reports": {
            title: "Reports",
            actionLabel: null,
        },
    };

    return config[pathname] || { title: "Page", actionLabel: null };
};
