const sayHello = () => {
  console.log("Hello, World!");
};

const sayHi = () => {
  console.log("Hi there!! This is a different function.");
};
const runCallbackFunction = (callbackFn) => {
  callbackFn();
};

runCallbackFunction(sayHello);
runCallbackFunction(sayHi);
