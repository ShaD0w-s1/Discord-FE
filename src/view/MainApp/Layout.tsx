/*
 * Author: zhangyuxuan
 * Date: 2022-06-05 18:31:38
 * LastEditTime: 2022-06-23 22:38:21
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\view\MainApp\Layout.tsx
 */

import React from "react";
import { Outlet } from "react-router-dom";
import ServersList from "@/components/ServersList/ServersList";
import type { ServersInfo } from "components/ServersList/Serverlist";
import Style from "./Layout.module.scss";

const mockChannels: ServersInfo[] = [
  { ServersId: "1", name: "第一服务器" },
  { ServersId: "2", name: "第二服务器" },
  { ServersId: "3", name: "第三服务器" },
  { ServersId: "4", name: "第四服务器" },
  { ServersId: "5", name: "第五服务器" },
  { ServersId: "6", name: "第六服务器" },
  { ServersId: "7", name: "第七服务器" },
  { ServersId: "8", name: "第八服务器" },
  { ServersId: "9", name: "第九服务器" },
  { ServersId: "10", name: "第十服务器" },
  { ServersId: "11", name: "第十一服务器" },
  { ServersId: "12", name: "第十二服务器" },
  { ServersId: "13", name: "第十三服务器" },
  { ServersId: "14", name: "第十四服务器" },
  { ServersId: "15", name: "第十五服务器" },
  { ServersId: "16", name: "第十六服务器" },
  { ServersId: "17", name: "第十七服务器" },
];

export default function MainApp() {
  return (
    <div className={Style.warper}>
      <ServersList servers={mockChannels} />
      <Outlet></Outlet>
    </div>
  );
}
