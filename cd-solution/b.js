import { NAME } from './modules.js';

console.log('module_b');

export const sayHello = () => {
  console.log('hello~!', NAME);
};
