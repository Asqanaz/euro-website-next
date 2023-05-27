export const roleIdToName = (roleId) => {
  if (roleId === 3) {
    return "partner";
  }
  if (roleId === 2) {
    return "moderator";
  }

  return "admin";
};
