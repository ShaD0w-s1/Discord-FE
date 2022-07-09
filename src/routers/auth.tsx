/*
 * Author: zhangyuxuan
 * Date: 2022-06-24 01:26:57
 * LastEditTime: 2022-06-30 23:26:09
 * LastEditors: zhangyuxuan
 * FilePath: \Discord-FE\src\routers\auth.tsx
 */
import refreshTokenRequest from "@/api/refreshToken";
import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

function useAuthProtect() {
  
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = sessionStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  console.log("useAuthProtect", accessToken, refreshToken);

  useEffect(() => {
    const a = async () => {
      if (!accessToken) {
        if (refreshToken) {
          const res = await mockrefreshTokenRequest(refreshToken);
          if (!!res) {
            sessionStorage.setItem("accessToken", res);
          } else {
            navigate(`/login?redirect=${location.pathname}`);
          } 
        }
        navigate(`/login?redirect=${location.pathname}`);
      }
    };
    a();
  }, []);
  return accessToken;
}

export default function WithAuthProtect() {
  const islogin = useAuthProtect();
  return islogin ? <Outlet /> : <div>loading...</div>;
}

function mockrefreshTokenRequest<T>(a: T): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a);
    }, 1000);
  });
}
