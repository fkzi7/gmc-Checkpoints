import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./name";
import Price from "./price";
import Description from "./description";
import Image from "./image";

const firstName = "Farouk"; // Replace with your name or leave it empty

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <Card style={{ width: "18rem", margin: "auto" }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
      <div style={{ marginTop: "20px" }}>
        <p>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</p>
        {firstName && (
          <img
            src="/my-product-app/public/headphones.webp" 
            alt="User"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        )}
      </div>
    </div>
  );
}

export default App;