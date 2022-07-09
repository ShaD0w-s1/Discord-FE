/*
 * Author: zhangyuxuan
 * Date: 2022-06-17 21:58:19
 * LastEditTime: 2022-06-20 16:24:49
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\ServersList\ServersPill\ServersPill.tsx
 */

import { useState } from "react";

import Style from "./ServersPill.module.scss";

export default function ServersPill() {
  const [height, setHeight] = useState("8px");

  return (
    <div className={Style["servers-pill"]}>
      <span style={{ height: height }}></span>
    </div>
  );
}
