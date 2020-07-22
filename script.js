// Function that returns the sum of all the multiples
// of 3 or 5 below the number passed in.
// Code wars kata link: https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript


function solution(number){
    let sum = 0;
    
    for ( i = 1; i < 10; i ++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      };
    };
     return sum;
  };