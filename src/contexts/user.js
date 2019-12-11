import React from "react";

export const UserContext = React.createContext(null);

export function useUser() {
  const { user } = React.useContext(UserContext);
  return user;
}

export function useAccountMethods() {
  const { login, logout } = React.useContext(UserContext);
  return { login, logout };
}

export function UserProvider({ children }) {
  const [user, setUser] = React.useState(null);

  function logout() {
    setUser(null);
  }

  function login() {
    setUser({
      name: "Call me Ape",
      avatarImgSrc:
        "http://www.freakingnews.com/pictures/78500/Monkey-Business--78549.jpg"
    });
  }

  const value = {
    user,
    logout,
    login
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
