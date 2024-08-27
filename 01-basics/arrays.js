const array1 = [4,6,3,6,7]
const array2 = ["Labeeb", "Shayan", "Ubaid"]

console.log(array2[1]);

//Array Methods

array2.push("Adil") //inserts value at the end
console.log(array2)

array2.pop("Labeeb");
console.log(array2)

array1.unshift(10); //inserts value in start
console.log(array1) 
array1.shift(); //deletes value from start
console.log(array1) 

console.log(array1.indexOf(3));
console.log(array1.includes(6)) //true

newArray = array1.join();  //converts array in to string
console.log (array1);
console.log (newArray);
console.log(typeof newArray)

//slice & splice
//slice original array ko disturb nahi karta jb k splice karta hai
const array3 = [4,6,3,8,5,9];
console.log("A ", array3);
const sliceArray = array3.slice(0,4); //last value include nahi hoti
console.log(sliceArray)
console.log("B ", array3); //B  [ 4, 6, 3, 8, 5, 9 ] -> slice se original array change nahi hua
const spliceArray = array3.splice(0,4);
console.log(spliceArray);
console.log("C ", array3);  //C  [ 5, 9 ] -> splice se original array b change hogaya

const array5 = ["Labeeb", "Shayan", "Obaid"]
const array6 = ["Adil", "Owais"];

// array5.push(array6);  //[ 'Labeeb', 'Shayan', 'Obaid', [ 'Adil', 'Owais' ] ] => 
//     //it inserts array into an array not join them 
// console.log(array5)
// array5.concat(array6) 
// console.log(array5) //[ 'Labeeb', 'Shayan', 'Obaid', [ 'Adil', 'Owais' ] ] 
// const array7 = array5.concat(array6);  //concat returns new array
// console.log(array7)

const array8 = [...array1, ...array2]; //spread operator sahi se arrays merge karta hai
console.log(array8);

const array9 = [4,6,7,[4,6,4],9,[2,4,1],8];
console.log(array9.flat(Infinity))  //jb array k andar arrays hon tb hum flat use karte hain
/*[
    4, 6, 7, 4, 6,
    4, 9, 2, 4, 1,
    8
  ]*/

console.log(Array.isArray("Labeeb Gazdar")) //false
console.log(Array.from("Labeeb Gazdar")) //converts into array
/* [
  'L', 'a', 'b', 'e',
  'e', 'b', ' ', 'G',
  'a', 'z', 'd', 'a',
  'r'
]*/
console.log(Array.from({name : "Labeeb"})) //[] -> returns empty array in case of objects

const score1 = 100;
const score2 = 200;
const score = 300;

console.log(Array.of(score1, score2, score))  //it provides an array