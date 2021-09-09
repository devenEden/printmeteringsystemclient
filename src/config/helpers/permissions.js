export const generatePermissions = (permissions) => {
  const permissionObject = {};
  permissions.forEach((permission) => {
    permissionObject[permission.permission] = permission.permission;
  });
  return permissionObject;
};
