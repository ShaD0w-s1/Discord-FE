/*
 * Author: zhangyuxuan
 * Date: 2022-06-17 20:21:10
 * LastEditTime: 2022-06-23 00:35:23
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\view\MainApp\Server\Server.tsx
 */

import { Outlet } from "react-router-dom";

import ServerContainer from "components/ServerContainer/ServerContainer";

export default function Server() {
  return (
    <ServerContainer haveNotice={true}>
      <div style={{ background: "green", flex: "auto", width: "240px" }}>
        sidebar
      </div>
    </ServerContainer>
  );
}
