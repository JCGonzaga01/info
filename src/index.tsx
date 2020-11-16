import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "components/App";
import "./index.scss";

const app = (
  <Suspense fallback={"Loading..."}>
    <App />
  </Suspense>
);

ReactDOM.render(app, document.getElementById("root"));
