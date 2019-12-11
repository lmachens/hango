import React from "react";

export const UserContext = React.createContext(null);

export const useUser = function() {
  const { user } = React.useContext(UserContext);
  return user;
};
