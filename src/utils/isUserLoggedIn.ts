export const isUserLoggedIn = (): boolean =>
  Boolean(window.localStorage.getItem("jwt"));
