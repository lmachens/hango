import React from "react";
import { UserContext } from "../contexts/user";

function AccountButtons() {
  const { login, logout } = React.useContext(UserContext);

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default AccountButtons;
