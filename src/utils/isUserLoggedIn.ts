export const isUserLoggedIn = (): boolean =>
  Boolean(localStorage.getItem("jwt"));
