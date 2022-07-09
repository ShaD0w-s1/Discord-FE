/*
 * @Author: zhangyuxuan
 * @Date: 2022-05-08 18:38:45
 * @LastEditTime: 2022-06-25 00:18:58
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\api\login.ts
 */

import withoutAuthRequest from "@/utils/net/withoutAuth";
import { AxiosResponse, AxiosPromise } from "axios";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse extends AxiosResponse {
  body: {
    idToken: string;
    accessToken: string;
    refreshToken: string;
  };
}

export default function loginRequest(data: LoginData): AxiosPromise<LoginResponse> {
  return withoutAuthRequest({
    method: "POST",
    url: "/api/v1/login",
    data,
  });
}
