'use strict';
const beyond = num => (num === Infinity || num === -Infinity) ? 'And beyond' :
  (num > 0) ? 'To infinity' : (num < 0) ? 'To negative infinity' : 'Staying home';
console.log(beyond(100));
console.log(beyond(0));
console.log(beyond(-Infinity));
console.log(beyond(Infinity));
console.log(beyond(-100));