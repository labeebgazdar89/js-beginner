// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}`
//     }
//     capitalizeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const userOne = new User("labeeb", "lgazdar@gmail.com", "123")
// console.log(userOne.encryptPassword())
// console.log(userOne.capitalizeUsername())


// Behind the scene without constructor

function User1(username, email, password){
    this.username = username
    this.password = password
    this.email = email
}
User1.prototype.encryptPassword = function(){
    return `${this.password}`
}
User1.prototype.capitalizeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const userTwo = new User1("gazdar", "gazdar@gmail.com", "456")
console.log(userTwo.encryptPassword())
console.log(userTwo.capitalizeUsername())