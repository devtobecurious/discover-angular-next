/// <reference lib="webworker" />

self.addEventListener('message', (evt: MessageEvent) => {
  
  console.log('listener', evt.data, 0);
  const result = fibonacci(evt.data);
  console.log('listener 2', evt.data, 0);
  postMessage(result);
});

function fibonacci(num: number) {
  if (num == 1 || num == 2) {
    return 1;
    
  }
  console.log('fibo', num);
  return fibonacci(num - 1) + fibonacci(num - 2);
}