const score = 100;
console.log(score); //100
const number1 = new Number(400);  //specifically number
console.log(number1)

const number2 = 5000000;
console.log(number2.toFixed(2))  //provides decimal values
console.log(number2.toPrecision(2)) //number value exponent main deta hai
console.log(number2.toLocaleString()) //provides value in comma seperated way
console.log(number2.toLocaleString("en-PK")); //gives value in pakistani way

//*********Math *********/
let mathNymber = -34.5;
let mathNymber1 = 45.2
let mathNymber2 = 45.2

console.log(Math.abs(mathNymber)); //-ve value ko +ve karta hai
console.log(Math.round(mathNymber1)) 

console.log(Math.random()) //gives random value between 0 and 1;
console.log(Math.random() * 10 + 1); //gives value between 1 and 10
//+1 is leay karte hain ta k 0 value na aye
console.log(Math.round(Math.random() * 10 + 1))

min = 20;
max = 40;

//ksi range main random value nikalni hoto to ye formula hai
console.log(Math.floor(Math.random() * (max-min+1) + min ));


