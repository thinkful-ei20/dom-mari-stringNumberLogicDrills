'use strict';
const decode = str => str.split(' ').map(word => {
  switch (word[0]) {
  case 'a':
    return word[1];
  case 'b':
    return word[2];
  case 'c':
    return word[3];
  case 'd':
    return word[4];
  default:
    return ' ';  
  }
}).join('');

console.log(decode('craft block argon meter bells brown croon droop'));