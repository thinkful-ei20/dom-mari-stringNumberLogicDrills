'use strict';
const rockPaperScissors = num => {
  const comp = Math.floor(Math.random() *3) +1;
  
  if (comp === num) {return 'You\'re tied!';} 
  if (comp === 1 && num === 2) {return 'You won! Try again?';}
  if (comp === 1 && num === 3) {return 'Computer won! Try again?';}
  if (comp === 2 && num === 1) {return 'Computer won! Try again?';}
  if (comp === 2 && num === 3) {return 'You won! Try again?';}
  if (comp === 3 && num === 1) {return 'Computer won! Try again?';}
  if (comp === 3 && num === 2) {return 'You won! Try again?';} 

  try {rockPaperScissors(num);}
  catch(e) {e = new Error('Please use a number between 1 and 3.');
    console.log(e);
  }
  
};

console.log(rockPaperScissors(1));
console.log(rockPaperScissors(2));
console.log(rockPaperScissors(3));
console.log(rockPaperScissors(7));
