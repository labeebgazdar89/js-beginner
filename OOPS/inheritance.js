class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username : ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //super keyword se User ki properties access kar sakte hain
        this.email = email
        this.password = password
       
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const teacher1 = new Teacher("labeeb", "info@demolink.com", "123")
teacher1.addCourse()

const user1 = new User("gazdar")
user1.logMe();

console.log(user1 === teacher1) // false

console.log(teacher1 instanceof Teacher) //true
console.log(user1 instanceof Teacher) //false
console.log(user1 instanceof User) //true
console.log(teacher1 instanceof User) // true