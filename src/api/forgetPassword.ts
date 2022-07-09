/*
 * @Author: zhangyuxuan
 * @Date: 2022-05-08 18:38:45
 * @LastEditTime: 2022-06-26 22:59:22
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\api\forgetPassword.ts
 */

import withoutAuthRequest from "@/utils/net/withoutAuth";
import { AxiosResponse, AxiosPromise } from "axios";

interface ForgetPasswordData {
  username: string;
}

interface ForgetPasswordResponse extends AxiosResponse {
  message: string;
}

export default function forgetPasswordRequest(data: ForgetPasswordData): AxiosPromise<ForgetPasswordResponse> {
  return withoutAuthRequest({
    method: "POST",
    url: "/api/v1/login",
    data,
  });
}
