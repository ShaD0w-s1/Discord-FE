/*
 * @Author: zhangyuxuan
 * @Date: 2022-06-24 17:32:56
 * @LastEditTime: 2022-06-30 23:21:09
 * @LastEditors: zhangyuxuan
 * @FilePath: \Discord-FE\src\api\refreshToken.ts
 */
import withoutAuthRequest from "@/utils/net/withoutAuth";

import type { AxiosPromise } from "axios";

interface RefreshTokenResponse {
  body: { accessToken: string };
}

export default function refreshTokenRequest(
  resfreshToken: string
): AxiosPromise<RefreshTokenResponse> {
  return withoutAuthRequest({
    method: "POST",
    url: "/api/v1/refreshToken",
    data: {
      resfreshToken,
    },
  });
}
