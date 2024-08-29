var c = 10000;
let d = 120;

if(true){
    let a = 100;
    const b = 200;
    c = 300;

    let d = 250; //agr let nahi likhenge to inner or outer values same assign hojaengi
    d = 250; //without let original value change hojaegi
    console.log("Inner : ", d) //250
}

// console.log(a)
// console.log(b)
console.log(c)
console.log("Outer : ",d) //120


function one(){
    let username = "Labeeb"
    function two(){
        let email = "lgazdar@gmail.com"
        console.log(username)
    }
    // console.log(email)
    two();
}
one();

if(true){
    const username = "Labeeb"
    if(username==="Labeeb"){
        const email = "lgazdar@gmail.com"
        console.log("Name : ", username , " Email : ", email)    
    }
    // console.log(email)
}
// console.log(username)


//******Important******* */
console.log(addone(7))
function addone(num){
    return num + 1
}
console.log(addone(5));


// console.log(addTwo(5)) //Error 
const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5))