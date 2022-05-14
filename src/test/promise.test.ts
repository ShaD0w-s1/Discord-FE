/*
 * @Author: zhangyuxuan
 * @Date: 2022-05-11 22:46:34
 * @LastEditTime: 2022-05-12 01:27:15
 * @LastEditors: zhangyuxuan
 * @FilePath: \my-app\src\test\promise.test.ts
 */

import promise from "./promise";

test('fetch',async () => {
  const data = await promise(true);
  expect(data).toBeTruthy();
})


