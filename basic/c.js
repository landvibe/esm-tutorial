import { sayHello } from './b.js';
console.log('module_c');
export const sayHello2 = () => {
  sayHello();
  sayHello();
};
