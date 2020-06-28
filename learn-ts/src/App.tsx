import React from "react";
import Title from "./components/Title";
import Wrapper from "./HOC/Wrapper";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Wrapper>
          <Title first_title="Primero" second_title="Segundo" />
        </Wrapper>
      </header>
    </div>
  );
}

export default App;
