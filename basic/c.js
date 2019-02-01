import { sayHello } from './b.js';

console.log('module_c');
export function sayHello2() {
  sayHello();
  sayHello();
}
