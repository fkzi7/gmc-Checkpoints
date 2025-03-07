import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PlayersList from "./PlayersList";

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Football Players</h1>
      <PlayersList />
    </div>
  );
}

export default App; // Ensure this is the default export