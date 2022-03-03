// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)


const findMin = (...num)=> Math.min(...num);
const findMin2 = (...num)=> Math.min(...num);


const findMax = (...num)=> Math.max(...num);
const findMax2 = (...num)=> Math.max(...num);

console.log(`Min num is = ${findMin(3,5)}`);
console.log(`Max num is = ${findMin2(3,5,9,1)}`);


console.log(`Max num is = ${findMax(3,5)}`);
console.log(`Max num is = ${findMax2(3,5,9,1)}`);
