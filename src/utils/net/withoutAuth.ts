/*
 * @Author: zhangyuxuan
 * @Date: 2022-05-08 18:39:38
 * @LastEditTime: 2022-06-30 23:25:59
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\utils\net\withoutAuth.ts
 */
import { withoutAuthRequest, baseResponseErrorInterceptors } from "./request";

import type { AxiosResponse, AxiosPromise, AxiosRequestConfig, AxiosError } from "axios";

import type { Method, URL } from "@/utils/net/request";

withoutAuthRequest.interceptors.request.use(
  (config) => {
    // 对请求配置做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    throw error as AxiosError;
  }
);

withoutAuthRequest.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      const axiosError  = error as AxiosError
      baseResponseErrorInterceptors(axiosError);
      throw axiosError;
    }
    throw error
  }
);

export interface WithoutAuthRequestConfig<T extends Method>
  extends AxiosRequestConfig {
  method: T;
  url: URL;
  data?: unknown;
  params?: unknown;
}

// XXX body any ???
export interface WithoutAuthResponse extends AxiosResponse {
  code: string;
  message: string;
  body: any;
}

export default function request<M extends Method>(
  withoutAuthRequestOptions: WithoutAuthRequestConfig<M>
): AxiosPromise<WithoutAuthResponse> {
  return withoutAuthRequest(withoutAuthRequestOptions);
}
