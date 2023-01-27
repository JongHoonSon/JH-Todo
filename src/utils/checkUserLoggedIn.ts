export const checkUserLoggedIn = (): boolean =>
  Boolean(localStorage.getItem("jwt"));
