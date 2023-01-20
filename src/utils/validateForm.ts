export const vaildateEmail = (email: string): string | boolean => {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return "이메일 형식이 아닙니다.";
};

export const validatePassword = (password: string): string | boolean => {
  if (password.length >= 8) {
    return true;
  }
  return "비밀번호의 길이는 8 이상이어야 합니다.";
};
