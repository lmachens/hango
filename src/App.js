import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  const [user, setUser] = React.useState({
    avatarSrc:
      "http://www.freakingnews.com/pictures/78500/Monkey-Business--78549.jpg"
  });
  return (
    <div className="App">
      <header className="App-header">
        <Avatar imgSrc={user.avatarSrc} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
