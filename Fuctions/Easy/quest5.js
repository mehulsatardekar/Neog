// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle

const typeOfTriangle = (...numbers) =>{
   const [a,b,c]= numbers;
   return (a===b && b===c)?'its equilateral triangle':(a===b || b===c || c===a )?'its isosceles triangle':'its scalene traingle'
}

console.log(typeOfTriangle(1,1,30))
