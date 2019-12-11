import React from "react";
import "./App.css";
import { UserProvider } from "./contexts/user";
import UserAvatar from "./components/UserAvatar";
import AccountButtons from "./components/AccountButtons";
import useFetch from "./hooks/useFetch";

function App() {
  const [url, setUrl] = React.useState(
    "https://pokeapi.codasds/api/v2/pokemon"
  );
  const [{ data, loading, error }, retry] = useFetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <UserAvatar />
          <p>
            <button onClick={() => setUrl("https://pokeapi.co/api/v2/pokemon")}>
              Change Fetch
            </button>
          </p>
          <p>
            {data && <span>Pokemons {data.count}</span>}
            {loading && <span>Loading...</span>}
            {error && <span>!!!ERROR!!!</span>}
          </p>
          {error && <button onClick={() => retry()}>Retry</button>}
          <AccountButtons />
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
