export const checkUserLoggedIn = (): boolean =>
  Boolean(window.localStorage.getItem("jwt"));
