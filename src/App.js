import React from "react";
import "./App.css";
import { UserContext } from "./contexts/user";
import UserAvatar from "./components/UserAvatar";
import AccountButtons from "./components/AccountButtons";

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider
      value={{
        user: user,
        logout: () => setUser(null),
        login: () =>
          setUser({
            name: "Call me Ape",
            avatarImgSrc:
              "http://www.freakingnews.com/pictures/78500/Monkey-Business--78549.jpg"
          })
      }}
    >
      <div className="App">
        <header className="App-header">
          <UserAvatar />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <AccountButtons />
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
