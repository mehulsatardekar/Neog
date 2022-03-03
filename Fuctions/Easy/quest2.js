// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const areaOfHexagon = (num)=> (3*Math.sqrt(3)*num*num /2).toFixed(2);


console.log(`are of hexagon = ${areaOfHexagon(10)}`)