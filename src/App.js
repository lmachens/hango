import React from "react";
import "./App.css";
import { UserProvider } from "./contexts/user";
import UserAvatar from "./components/UserAvatar";
import AccountButtons from "./components/AccountButtons";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <UserAvatar />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AccountButtons />
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
