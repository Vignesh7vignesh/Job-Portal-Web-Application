export const loginUser = (email, role) => {
  localStorage.setItem(
    "user",
    JSON.stringify({ email, role, isLoggedIn: true })
  );
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};
