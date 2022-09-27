export function logInfo(mess: string, ...params: object[]) {
  console.info(mess, params);
}


export function executeLater(component: any, duration: number = 1000) {
  // setTimeout(() => {
  //   logInfo('executeLater');
  // }, duration);

  // setInterval(() => {
  //   component.item++;
  //   logInfo('executeLater');
  // }, duration)
}
