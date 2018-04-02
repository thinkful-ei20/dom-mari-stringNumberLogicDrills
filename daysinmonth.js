'use strict';

const daysInMonth = (month, leapYear) => {
  switch(month){
  case 'January':
  case 'March':
  case 'May':
  case 'July':
  case 'August':
  case 'October':
  case 'December':
    return `${month} has 31 days.`;
  case 'April':
  case 'June':
  case 'September':
  case 'November':
    return `${month} has 30 days.`
  case 'February':
    if (leapYear) {return `${month} has 29 days`;}
    return `${month} has 28 days.`;
  default :
    throw 'Must provide a valid month';
  }
};

console.log(daysInMonth('January'));
console.log(daysInMonth('February'));
console.log(daysInMonth('February',true));
console.log(daysInMonth('Rando'));