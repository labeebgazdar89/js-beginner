const date = new Date(); //creates date object
console.log(date) //2024-08-25T09:40:28.112Z
console.log(date.toLocaleString()); //8/25/2024, 9:41:31 AM
console.log(date.toLocaleDateString()) //8/25/2024
console.log(date.toLocaleTimeString()) //9:42:31 AM

const date1 = new Date("2024-01-24");
const date2 = new Date("02-26-2024");
console.log(date1)
console.log(date1.toDateString()); //Wed Jan 24 2024
console.log(date2.toLocaleDateString()) //2/26/2024

const myTimeStamp = Date.now();
console.log(myTimeStamp); //1724579566107 current time in miliseconds
console.log(Math.floor(myTimeStamp/1000)); //current time in seconds

