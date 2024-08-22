//Primitive (Call by value)
//7 types String, Number, Boolean, Null, undefined, symbol, BinInt

const score = 100; //Number
const score1 = 10.1 //Number not decimal or float

const isLoggedIn = true; //Boolean
const outsideTemp = null;

console.log(typeof outsideTemp) //object

let email; //undefined

const id = Symbol("123") // provides different value
const id2 = Symbol("123") // provides different value
console.log(id === id2)  //false dono ids ki values different hain

const bigNumber = 3256987268564544657987987987n
console.log(typeof bigNumber)
//JS is dynamically typed language


//Reference (Non-Primitive)
// Arrays, objects, function

const array = ["Labeeb", "SHayan"];
const object = {
    name : "Labeeb",
    email : "lgazdar@gmail.com"
}
const myFunction = function(){
    console.log("Hello World")
}

//non primitive ki type object hi hoti hai
console.log(typeof myFunction) //Function object
console.log(typeof array) //object
console.log(typeof object) //object


/*
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */ 



       // ************************* //

       // Stack (Primitive) and Heap(Non-Primitive)

       //stack main value ki copy milti hai or original value change nahi hoti or heap main reference milta hai is leay original value change hojati hai

       let str1 = "Labeeb";
       let str2 = str1 ;

       console.log(str2); //Labeeb

       str2 = "Gazdar";
       console.log(str1); //Labeeb
       console.log(str2); //Gazdar

       let obj1 = {
        name : "labeeb",
        email : "labeeb@gmail.com"
       }
       let obj2 = obj1;
       obj2.email = "lgazdar@gmail.com";

       console.log(obj1.email) //lgazdar@gmail.com
       console.log(obj2.email) //lgazdar@gmail.com