'use strict';
const a = [ 0 ];
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: true,
    get() {
      console.log('get');
      return val;
    },
    set(newVal) {
      if (newVal === val) {
        return;
      }
      return val;
    },
  });
}
defineReactive(a, 0, 1);

console.log(a[0]);

a[0] = 1;

console.log(a[0]);

a[0] = 2;

a[0] = 3;
