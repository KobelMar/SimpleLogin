import React from "react";
import ReactDOM from "react-dom";

import { AuthContextProvider } from "./store/auth_context";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>,
  document.getElementById("root")
);
