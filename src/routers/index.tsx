/*
 * @Author: zhangyuxuan
 * @Date: 2022-06-05 21:48:54
 * LastEditTime: 2022-06-26 01:38:06
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\routers\index.tsx
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";

import WithAuthProtect from "./auth";

import Homepage from "view/HomePage/HomePage";
import Auth from "view/Auth/Auth";
import MainApp from "view/MainApp/Layout";
import Server from "view/MainApp/Server/Server";
import Channel from "view/MainApp/Channel/Channel";
import Me from "view/MainApp/Channel/@me";
import GuildDiscovery from "view/MainApp/GuildDiscovery/GuildDiscovery";

import Login from "view/Auth/Login/Login";
import Register from "view/Auth/Register/Register";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {/* 主页 */}
          <Route index element={<Homepage />} />

          {/* 权鉴保护 */}
          <Route path="/" element={<WithAuthProtect />}>
            <Route path="/" element={<MainApp />}>
              <Route path="channel">
                <Route path="@me" element={<Me />} />
                <Route path=":serverid" element={<Server />}>
                  <Route path=":channelid" element={<Channel />} />
                </Route>
              </Route>
              <Route path="guild-discovery" element={<GuildDiscovery />} />
            </Route>
          </Route>
        </Route>

        {/* 权鉴页面 */}
        <Route path="/" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
