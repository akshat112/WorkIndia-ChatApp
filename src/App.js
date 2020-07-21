import React from "react";
import { Container } from "reactstrap";

import "./App.css";
import Chat from "./chat/chat";

function App() {
  return (
    <div className="App">
      <Container className="chatContainer">
        <Chat></Chat>
      </Container>
    </div>
  );
}

export default App;
