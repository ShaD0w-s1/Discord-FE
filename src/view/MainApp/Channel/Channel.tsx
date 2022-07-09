/*
 * Author: zhangyuxuan
 * Date: 2022-06-17 20:19:22
 * LastEditTime: 2022-06-23 17:15:33
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\view\MainApp\Channel\Channel.tsx
 */

import { Outlet, useParams } from "react-router-dom";

import Style from "./Channel.module.scss";

export default function Channel() {
  const { channelid } = useParams();

  return (
    <div className={Style.warper}>
      <div
        className="title"
        style={{ height: "48px", backgroundColor: "palegreen" }}
      >
        { channelid } 
      </div>
      <div className="channel" style={{ flex: "auto", display: "flex" }}>
        <div
          className="chat"
          style={{ flex: "auto", backgroundColor: "violet" }}
        ></div>
        <div className="userList" style={{ width: "240px" }}></div>
      </div>
    </div>
  );
}
