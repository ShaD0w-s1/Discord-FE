/*
 * Author: zhangyuxuan
 * Date: 2022-05-07 21:13:26
 * LastEditTime: 2022-05-14 23:12:22
 * LastEditors: zhangyuxuan
 * FilePath: \my-app\src\index.tsx
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
