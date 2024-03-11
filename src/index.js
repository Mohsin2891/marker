import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./store";
import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
localStorage.setItem(
  "token",
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZTFmN2QxNzQzZmYzMjU5MmY2YmY1MzIyMmVmNGZjMyIsInN1YiI6IjY1ZTljMTgyM2Q3NDU0MDE3ZGI5Y2ZjNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3LEsynXtPlupRQPuOc7Gl8oG-jpzB4LwFk5S7ni5cs"
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
