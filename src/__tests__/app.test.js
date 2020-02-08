import React from "react";
import ReactDOM from "react-dom";
import App from "../containers/App";

test("Render Without Crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});
