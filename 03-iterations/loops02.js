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
// value b unique hoti hai duplicate value print
// nahi karta

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


// For Each

// const myArr1 = ["language1","language2","language3","language4"]
// myArr1.forEach(function(item) {
//     console.log(item)
// })


const myArr1 = ["language1","language2","language3","language4"]
myArr1.forEach((item) => {
    console.log(item)
})

function printMe(item){
    console.log(item)
}
// myArr1.forEach(printMe()) // undefined is not a function
myArr1.forEach(printMe)

const myobj3 = [
    {
        name: "Labeeb",
        email : "info@gmail.com"
    },
    {
        name:"Yousuf",
        email:"yousuf@gmail.com"
    }
]

myobj3.forEach((item) => {
    console.log(item.name)
})

const value = myobj3.forEach((item) => {
    return item
})
// console.log(value) // undefined
//for each koi value return nahi karta 
//value return k lye filter use karte hain

const myNums = [3,6,4,7,9,2,9,3,5];
const newNums = myNums.filter( (num) => num > 5 );
const newNums1 = myNums.filter( (num) => {
    num > 3;
})
console.log(newNums)
console.log(newNums1) // [] -> return likhna zaruri hai

const newNums2 = [];
myNums.forEach( (item) => {
    if(item > 3){
        newNums2.push(item)  
    }
})
console.log(newNums2)  // [ 6, 4, 7, 9, 9, 5 ]


const books = [
    {
      "author": "Chinua Achebe",
      "country": "Nigeria",
      "imageLink": "images/things-fall-apart.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
      "pages": 209,
      "title": "Things Fall Apart",
      "year": 1958
    },
    {
      "author": "Hans Christian Andersen",
      "country": "Denmark",
      "imageLink": "images/fairy-tales.jpg",
      "language": "Danish",
      "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
      "pages": 784,
      "title": "Fairy tales",
      "year": 1836
    },
    {
      "author": "Dante Alighieri",
      "country": "Italy",
      "imageLink": "images/the-divine-comedy.jpg",
      "language": "Italian",
      "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
      "pages": 928,
      "title": "The Divine Comedy",
      "year": 1315
    },
    {
      "author": "Unknown",
      "country": "Sumer and Akkadian Empire",
      "imageLink": "images/the-epic-of-gilgamesh.jpg",
      "language": "Akkadian",
      "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
      "pages": 160,
      "title": "The Epic Of Gilgamesh",
      "year": -1700
    },
    {
      "author": "Unknown",
      "country": "Achaemenid Empire",
      "imageLink": "images/the-book-of-job.jpg",
      "language": "Hebrew",
      "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
      "pages": 176,
      "title": "The Book Of Job",
      "year": -600
    },
    {
      "author": "Unknown",
      "country": "India/Iran/Iraq/Egypt/Tajikistan",
      "imageLink": "images/one-thousand-and-one-nights.jpg",
      "language": "Arabic",
      "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
      "pages": 288,
      "title": "One Thousand and One Nights",
      "year": 1200
    },
    {
      "author": "Unknown",
      "country": "Iceland",
      "imageLink": "images/njals-saga.jpg",
      "language": "Old Norse",
      "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
      "pages": 384,
      "title": "Nj\u00e1l's Saga",
      "year": 1350
    },
    {
      "author": "Jane Austen",
      "country": "United Kingdom",
      "imageLink": "images/pride-and-prejudice.jpg",
      "language": "English",
      "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
      "pages": 226,
      "title": "Pride and Prejudice",
      "year": 1813
    },
    {
      "author": "Honor\u00e9 de Balzac",
      "country": "France",
      "imageLink": "images/le-pere-goriot.jpg",
      "language": "French",
      "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
      "pages": 443,
      "title": "Le P\u00e8re Goriot",
      "year": 1835
    },
    {
      "author": "Samuel Beckett",
      "country": "Republic of Ireland",
      "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
      "language": "French, English",
      "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
      "pages": 256,
      "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
      "year": 1952
    },
]

const userBooks = books.filter((book) => book.pages > 400)
const userBooks1 = books.filter( (book) => { return book.year > 1800 && book.pages > 350})
// console.log(userBooks)
console.log(userBooks1)

//Map method returns value
const myNums3 = [1,2,3,4,5,6,7,8,9];
const newNums3 = myNums.map( (number) => {return number*10})
console.log(newNums3)

const newNums4 = [];
myNums3.forEach ((number) => {
    if(number>1){
        newNums4.push(number*20)
    }
})
console.log(newNums4)


//ye chaining kehlati hai
const newNums5 = myNums.map((item)=>{
    return item*10;
}).map((item)=>{
   return item+1;
}).filter((item)=> item > 50 )
console.log(newNums5)


//Reduce Method
//by default init value first element hoti hai
const myNums6 = [10,3,4];
const initialValue = 0;
const total = myNums6.reduce(function(accumulator, currentValue){
    console.log(`Accumulator : ${accumulator} Current Value : ${currentValue}`)
    return accumulator + currentValue;
})
console.log(total)

const myNums7 = [1,2,3];
const initialValue1 = 0;
const total1 = myNums7.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue1)
console.log(total1)


const shoppingCart = [
    {
        cousre : "Course 1",
        price : 1000
    },
    {
        cousre : "Course 2",
        price : 2000
    },
    {
        cousre : "Course 3",
        price : 1500
    },
    {
        cousre : "Course 4",
        price : 5000
    }
]

const cartTotal = shoppingCart.reduce((accumulator, cousre) => {
    return accumulator + cousre.price
}, initialValue)
console.log(cartTotal)