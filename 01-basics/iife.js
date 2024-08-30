//Immediately Invoked Function Expression
//global variables k pollution se bachne k lye iife use karte hain
//foran function run karne k lye iife use karte hain


function method1(){
    console.log(`DB Connected`)
}
method1();

//Named IIFE
( function method2(){
    console.log(`DB connected 2`)
}) (); //agr xyada functions hain to end main semi colon lagana hai

//Unknown IIFE with argument 
( (name) => {
    console.log(`DB connected ${name}`)
})("Labeeb");



//Javascript Three phases
// 1. Global Execution Phase
// 2. Memory Creation Phase -> varibales or methods just define hote hain
// 3. Execution Phase -> variables or functions ko values assign hoti hain
// har function execution main ek alag se memory phase banta hai or wo execution k bd delete hpjata hai