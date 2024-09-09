const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descriptor)

const myObj = Object.create(null) //is tarah b object create karte hain
const myObj1 = {
    name: "labeeb",
    price: 200,
    isAvailable: true,
    myFunction(){
        console.log('Hello')
    }
}
console.log(Object.getOwnPropertyDescriptor(myObj1, "name"))
Object.defineProperty(myObj1, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(myObj1, "name"))

// for (let [key, value] of myObj1) {  // myObj1 is not iterable
//     console.log(`${key} : ${value}`)
// }

for (let [key, value] of Object.entries(myObj1)) {
    if(typeof value !== 'function') 
    console.log(`${key} : ${value}`)
}