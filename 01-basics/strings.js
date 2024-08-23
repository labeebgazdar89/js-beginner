const name = "Labeeb";
const age = 35;

console.log("Name : "+name+ " Age : "+age)

console.log(`Hello my name is ${name} and my age is ${age}`);

const string1 = new String("Labeeb Gazdar");

console.log(typeof string1) //object
console.log(string1[1]) //a
console.log(string1.length) //provides length of string

console.log(string1.__proto__);
console.log(string1.charAt(3))  //tells character on that position
console.log(string1.indexOf("e"))  //displays postion of character

const newString = "Yousuf Gazdar";
const newString1 = newString.substring(0, 6)  //gives new string
const newString2 = newString.slice(-8)  //provides string in reverse
const newString3 = "    Labeeb     ";
console.log(newString1)
console.log(newString2)
console.log(newString3)
console.log(newString3.trim())  //remove spaces from start and end

const newString4 = "Labeeb Gazdar";
console.log(newString4.replace("ee", "i")); //replaces ee by i
console.log(newString4.includes("ee")) //true or false
console.log(newString4.split(","))

const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(-24, -5));