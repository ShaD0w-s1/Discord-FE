export default function promise(parm: boolean) {
  return new Promise((reslove, reject) => {
    parm ? reslove(parm) : reject();
  });
}
