/*
 * Author: zhangyuxuan
 * Date: 2022-06-03 22:01:14
 * LastEditTime: 2022-06-23 00:26:10
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\components\ServerContainer\ServerContainer.tsx
 */
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Styles from "./ServerContainer.module.scss";

interface Props extends React.HTMLAttributes<HTMLElement> {
  haveNotice: boolean;
}

export default function ServerContainer({ children, haveNotice }: Props) {
  return (
    <div className={Styles.warper}>
      {haveNotice ? (
        <div
          className="notice"
          style={{
            width: "100%",
            height: "40px",
            backgroundColor: "blue",
          }}
        />
      ) : null}

      <div
        className="content"
        style={{
          display: "flex",
          backgroundColor: "red",
          flex: "auto",
        }}
      >
        <div className="sidebar" style={{display:"flex", flexDirection:"column"}}>
          {children}
          <div className="user" style={{height:"52px", backgroundColor:"yellow"}}></div>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}
