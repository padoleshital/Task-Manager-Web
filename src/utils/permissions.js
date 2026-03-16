export const hasPermission = (userPermissions, permission) => {
    return userPermissions.includes(permission);
};