// 1] Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.


const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
//[1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

const evenToOdd= arr.map(e=> (e%2==0)? e+1 : e);

console.log(evenToOdd);




// 2] . Get the names in an array for only those who have a cycle.

const family = [
    {
      name    : 'Tanay',
      haveCycle : true
    },
    {
      name     : 'Akanksha',
      haveCycle : false
    },
    {
      name     : 'Tanvi',
      haveCycle : true
    },
      {
      name     : 'Kanak',
      haveCycle : false
    }
  ];
  
  
//   Your output should be: ['Tanay', 'Tanvi']

const hasCycles = family.filter(e=> (e.haveCycle)? e.name :'').map(e=> e.name);

console.log(hasCycles);




// 3] Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be: [2, 6, 8, 4]


const lessThanEightAndEven = arr.filter(e=> (e%2==0 && e<=8)? e : '' );

console.log(lessThanEightAndEven);




// 4] 1. Given an array. ****Write a function that takes in the given array and prints only the words which are more than 5 characters in length.

// const arr = ['eat', 'sleep', 'repeat', 'code'];

// Your output should be: ['repeat']


const wordMoreThanFive = arr.filter(e=> (e.length>5)?e:'');

console.log(wordMoreThanFive);




// 5]Given an array. Write a function to get the sum of all elements which are greater than 50.

 const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

//Your output should be: 190

const sumMoreThanFifty = arr.reduce((acc,cur)=> (cur>50)?acc=acc+cur:acc,0);

console.log(sumMoreThanFifty);






// 6] Given an array. Write a function to find the product of all elements which are even.

const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

const evenNumsProduct = arr.reduce((acc,cur)=> (cur%2==0)? acc=acc*cur:acc,1);


console.log(evenNumsProduct);





// 7]Given an array of objects. Write a function to find the sum of ages of each person.


const arr = [
	{
		name: "Jay",
		age: 60
	},
	{
		name: "Gloria",
		age: 36
	},
	{
		name: "Manny",
		age: 16
	},
	{
		name: "Joe",
		age: 9
	}
]

// Your output should be: 121 /*** 60+36+16+9 ***/

const  sumOfAge = arr.reduce((acc,cur)=> acc+=cur.age,0);

console.log(sumOfAge);




// 8] Given an array. Convert it in to an object with key as the index of each element and value as the element itself.


const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}


const nameObj = Object.assign({},arr)

//alternative approach 

const nameObj2 = arr.reduce((acc,curr,index)=> ({...acc, [index]: curr}),{})

console.log(nameObj);



// 9] Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’. 

const arr = [
	{
		name: "Apple"
	},
	{
		name: "Mango"
	},
	{
		name: "Potato"
	},
	{
		name: "Guava"
	},
	{
		name: "Capsicum"
	}
]


// Your Output should be:
// [
// 	{
// 		name: "Apple",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Mango",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Potato"
// 		type: "vegetable"
// 	},
// 	{
// 		name: "Guava",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Capsicum",
// 		type: "vegetable"
// 	}
// ]


const addFoodType = arr.map(e=>(e.name.length>5)?{
            name:e.name,
            type:'vegetable'
    }:{
            name:e.name,
        type:'fruit'
    }
);


console.log(addFoodType);




// 10] Given an array of objects.

const inventory = [
    {name: 'fans', quantity: 3},
    {name: 'chimneys', quantity: 0},
    {name: 'bulbs', quantity: 5},
    {name: 'stove', quantity: 1}    
  ];


// Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.


const qtyLessThanTwo = inventory.filter(e=> (e.quantity<2)? e:'' );

console.log(qtyLessThanTwo);


let qty=0;
const totalQty = inventory.map(e=>{
    qty+= e.quantity;
})

console.log(qty);

const totalQty = inventory.reduce((acc,curr)=>  acc+= curr.quantity ,0)

console.log(totalQty);


const itemLessThanZero = inventory.filter(e=> (e.quantity===0)?e:'');

console.log(itemLessThanZero);






// 11] Given an array. Write a function to join all elements of the array with a hyphen in between them.


const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"]


// Your output should be: 
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

console.log(arr.join('-'));







// 12] Write a function that accepts a number as input and inserts hyphens between every two even numbers.


// If your input is: 24345687

// Your output should be: 2-23456-87


const isEven = (num)=> num%2===0;

const dashInEvenNum =(num)=>{
    let numsToString = num.toString(); 
    let output='';
    let nextval,currval;
    for(let i=0;i<numsToString.length; i++){
     
      currval = numsToString[i];
      nextval = numsToString[i+1];
      (isEven(currval) && isEven(nextval))?   output += currval +'-': output += currval;
    }
    return output;
}

console.log(dashInEvenNum(1252543));







// 13] Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())


// If your input is: "neogrammer"
// Your output should be: "NEOGRAMMER"

// If your input is: "neoG"
// Your output should be: "NEOG"



const namesToCaps = (name)=> name.toUpperCase();

console.log(namesToCaps('neogrammer'));







// 14] Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.


// If your input is: "neoG"
// Your output should be: "nEOg"


const vowelToUpper = (name)=> Array.from(name).map(e=> (e=='a' || e== 'e' || e=='i' || e=='o'|| e=='u')? e.toUpperCase(): e.toLowerCase());

console.log(vowelToUpper('neoG').join(''));







// 15]Flatten an array without using flat().

const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];


// Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']



const arr=[];

for(let a=0;a<input.length;a++){
    for(let b=0; b<input.length; b++){
        arr.push(input[a][b]);
    }
}

const flattenArr = arr.join(',');
console.log(flattenArr.split(','));




const arr = input.reduce((acc,curr)=> acc+= curr.join(','),[])
const modarr = arr.split('');
const flattenarr = Array.from(modarr).filter(e=> (e!==',')?e :'')
console.log( flattenarr);


const flattenArr = input.reduce((acc,curr)=> ([...acc, ...curr]))

console.log(flattenArr);




//16] Count the occurrences of distinct elements in the given array.
const input = [
    ['a', 'b', 'c'],
    ['c', 'd', 'e'],
    ['e', 'd', 'f'],
  ];


// Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
let newobj={};
const newarr = input.reduce((acc,curr)=> ([...acc, ...curr]),[])

const newarr2 = newarr.reduce((acc,curr)=> {
    if(newobj[curr]=== undefined){
        newobj[curr]=0;
    }
        newobj[curr]+=1;
    
    return {...acc, [curr]:newobj[curr]}
},{})
console.log(newarr2);


