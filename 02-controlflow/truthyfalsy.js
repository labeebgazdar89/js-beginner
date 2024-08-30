// const userEmail = "labeeb@gmail.com"; //truthy

// const userEmail = "";  // falsy

// const userEmail = {}; //truthy

const userEmail = []; //truthy

if(userEmail){
    console.log("Truthy Value")
}
else{
    console.log("Falsy Value")
}


// Truthy Values
 // "0", "false", " ", [], {}, function(){}

// Falsy Values
// 0, -0, false, "", null, undefined, NaN, BigInt 0n

const arr1 = [];
if(arr1.length===0){
    console.log("Empty Array")
}

const someObj = {}
const someObj1 = {
    user: "labeeb",
    email : "info@gmail.com"
}
console.log(Object.keys(someObj)) //Object.key() return an array of keys
console.log(Object.keys(someObj1))
if(Object.keys(someObj).length===0){  
    console.log("Empty Object")
}


// Nullish Coalescing Operator ?? : null undefined
// ye check karta hai k value null ya undefined to nahi 
// agr null undefined hoti hai to nullish k bd vala code chal jata hai
// ye operator null or undefined k lye hai

let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 15 // 15
val1 = 5 ?? undefined // 5


console.log(val1) 


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice >=80 ? console.log("Greater than 80") : console.log("Less Than 80")