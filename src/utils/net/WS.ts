/*
 * @Author: zhangyuxuan
 * @Date: 2022-05-08 18:39:52
 * @LastEditTime: 2022-05-08 23:54:26
 * @LastEditors: zhangyuxuan
 * @FilePath: \my-app\src\utils\WS.ts
 */

function WS() {
  let wss = new WebSocket("ws://127.0.0.1:3400");
  wss.onopen = function () {
    console.log("ws connected");
    this.send("hello");
  };
  wss.onmessage = function (event) {
    console.log("ws onmessage");
    console.log(event.data);
  };

  return wss
}

   


export default WS;
