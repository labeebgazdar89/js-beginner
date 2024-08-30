// For Of

let arr = [2,4,2,7,8,4]
for (const element of arr) {
    console.log(`Element : ${element}`)
}

let string = "Hello World";
for (const element of string) {
    if(element == ' ') continue;
    console.log(`String : ${element}`)
}


// Maps -> Object which holds key value pair
// value b unique hoti hai

const map = new Map();
map.set ("PK" , "Pakistan");
map.set ("IN" , "India");
map.set ("BNG" , "Bangladesh");
map.set ("NP" , "Nepal");
map.set ("SR" , "Sri Lanka");
map.set ("PK" , "Pakistan");  //duplicate value insert nahi hogi

console.log(map)

for (const key of map) {
    console.log(key)
}
for(const [key, value] of map){
    console.log(key, value)
}

let obj1 = {
    game1 : "Mario",
    game2 : "Cricket",
    game3 : "Football"
}

// for of objects pr kam nahi karta
// for (const [key,element] of obj1) {
//     console.log(key,element)
// }  // TypeError: obj1 is not iterable

const myobj2 = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    sw : "Swift"
}

for (const key in myobj2) {   
        const element = myobj2[key];
        console.log(`key : ${key} Value : ${element}`)
        
}

let programming = ["js", "ruby", "python", "ruby"]
for (const key in programming) {
    console.log(key) // it provides keys
    console.log(programming[key])
}