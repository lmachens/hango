import React from "react";
import { useAccountMethods } from "../contexts/user";

function AccountButtons() {
  const { login, logout } = useAccountMethods();

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default AccountButtons;
