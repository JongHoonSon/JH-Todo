export const vaildateEmail = (email: string): boolean => {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
};

export const validatePassword = (password: string): boolean => {
  if (password.length >= 8) {
    return true;
  }
  return false;
};
