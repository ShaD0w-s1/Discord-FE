/*
 * Author: zhangyuxuan
 * Date: 2022-05-07 21:13:26
 * LastEditTime: 2022-06-25 22:09:10
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
