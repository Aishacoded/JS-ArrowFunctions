// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const greet = (naame) => `Hello, ${naame}!`;
console.log(greet("aisha"));


// Write a simple arrow function that takes two parameters and returns their sum.

const sumtwop = (a,b) => a + b;

console.log(sumtwop(3,5));


// Write a simple arrow function that squares a number.

const sqnum = (number) => number ** 2;

console.log(sqnum(3));


// [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.


const arr = [1,2,3];
const arrsq = arr.map((num) => num ** 2);

console.log(arrsq);






