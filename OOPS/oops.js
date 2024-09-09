// Javascript & Classes

// OOP -> Object Oriented Programming

// Object => Collection of collection of properties and mehthods

// Parts of OOP

// 1.Constructor
// 2.Prototypes
// 3.Classes
// 4.Instances (new, this)


// 4 Pillars

// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

const user = {
    username : "labeeb",
    email : "lgazdar@gmail.com",
    loginCount : true,
    signedIn : true,
    getUserDetails : function(){
        console.log(this.email)
        console.log(`Username : ${user.username} Email : ${this.email}`)
        console.log(this)
    }
}
console.log(this) // {}
console.log(user.getUserDetails) // [Function: getUserDetails]
console.log(user.getUserDetails())

function User1(username, isLoggedIn, loginCount){
    this.username = username
    this.isLoggedIn = isLoggedIn
    this.loginCount = loginCount

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }
    // return this -> ye likhen na likhen barabar hai
}

const userOne = User1("labeeb", true, 23)
const userTwo = User1("gazdar", false, 10)
console.log(userOne) // agr new keyword use nahi karenge to values overwrite hojaengi
// is new keyword ko constructor kehte hain, new keyword se copy banadeta hai
const userThree = new User1("yousuf", true, 40)
console.log(userThree)

// new keyword se ek empty object create hota hai
// constructor function call hota hai new keyword se
// this keyword se sb kuch inject hota hai
//