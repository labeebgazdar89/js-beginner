let score = 33;
let zero = null;
let score1 = "34as"
console.log(typeof score)
console.log(typeof score1)

let number = Number(score1);
console.log(typeof number); //this gives Nan, ye tb hota hai jb number k sth koi string ho
console.log(number)
console.log(typeof zero)
console.log(zero)

//33 => 33
//"33" => 33
//"33abc" => Nan
//true => 1

let isLoggedIn = 0;
let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue)

//1 => true
//0 => false
//"" => false
//"labeeb" => true

let number1 = 33;
let stringNumber = String(number1);
console.log(typeof stringNumber)