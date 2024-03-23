import * as React from "react";
import { render } from "react-dom";
import "./popup.css";

const App: React.FC<{}> = () => {
  return (
    <div>
      <h1> whats app bitches</h1>
    </div>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
render(<App />, root);
