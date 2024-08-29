const user = {
    name : "Labeeb",
    email : "lgazdar@gmail.com",
    welcomeMessage : function(){
        console.log(`Welcome ${this.name}, your email is ${this.email}`)
        console.log(this)
    }
    
}
user.welcomeMessage();
user.name = "Gazdar",
user.welcomeMessage();

console.log(this) // {}

function myFunction(){
    let username = "Labeeb"
    console.log(this.username) //undefined -> functions main this use nahi karsakta objects main kar sakta hun
    // console.log(this)
}
myFunction();


//Arrow functions

// () => {}   -> basic syntax of arrow function

// const addNumbers = (num1, num2) => {
//     return num1+num2
// }
//{} main return likhna parta hai

const addNumbers = (num1, num2) => (num1 + num2) 
const returnObject = () => ({username : "Labeeb"})
console.log(addNumbers(5,6))
console.log(returnObject())