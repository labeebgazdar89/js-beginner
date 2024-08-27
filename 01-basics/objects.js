//Singleton
//Object.create

//Object Literals

const mySymbol = "key1";

const user = {
    name : "Labeeb",
    "fullName" : "Labeeb Gazdar",
    [mySymbol] : "mykey1",
    email : "lgazdar@gmail.com",
    location : "Karachi",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Tuesday"]
}
console.log(user.name); // Labeeb
console.log(user["name"]) // Labeeb
console.log(user["fullName"]) // Labeeb Gazdar

console.log(user[mySymbol]) //object main symbol ko is tarah use karte hain
console.log(typeof user[mySymbol]) //string
user.email = "labeeb@gmail.com" //to change value in object
console.log(user.email)

// Object.freeze(user) 
//object ko freeze karte hain 

user.greeting = function(){
    console.log("Hello User")
}
console.log(user.greeting) //undefined [Function (anonymous)]
console.log(user.greeting()) //Hello User

user.greeting2 = function(){
    console.log(`Hello ${this.fullName}`)
}
console.log(user.greeting2())


//Singleton Object

const obj1 = new Object();


// console.log(obj1)

obj1.name = "Labeeb";
obj1.email = "lgazdar@gmail.com"
console.log(obj1)

const obj2 = {
    email : "info@demo.com",
    fullName : {
        username : {
            firstName : "Labeeb",
            lastName : "Gazdar"
        }
    }
}
console.log(obj2.fullName.username.firstName)
console.log(obj2.fullName.username.lastName)

//to combine two objects
// const obj3 = Object.assign(obj1,obj2)
// const obj3 = Object.assign({},obj1,obj2)
 //returns modified target object
// console.log(obj3)


const obj3 = {...obj1, ...obj2}
console.log(obj3)

const users = [
    {
        id:1,
        name : "User1"
    },
    {
        id:2,
        name : "User2"
    },
    {
        id:3,
        name : "User3"
    }
]

console.log(users[1].name)

console.log(Object.keys(obj1)) //it gives all keys -> [ 'name', 'email' ]
console.log(Object.values(obj1))  // -> [ 'Labeeb', 'lgazdar@gmail.com' ]
console.log(Object.entries(obj1)) // -> [ [ 'name', 'Labeeb' ], [ 'email', 'lgazdar@gmail.com' ] ]

console.log(obj1.hasOwnProperty('name')) //true -> ye batata h k ye property hai ya nahi

//Object de-structure

const course = {
    name : "Javascript",
    price : 999,
    courseInstructor : "Labeeb"
}
console.log(course.courseInstructor)
const {courseInstructor} = course
 //object destructuring
console.log(courseInstructor)
const {courseInstructor : instructor} = course
console.log(instructor)


// JSON API main array is tarah hota hao
// https://randomuser.me/

{
    "course" : "Javascript",
    "price" : "99",
    "instructor" : "Labeeb"
}
[
    {}, {}
]