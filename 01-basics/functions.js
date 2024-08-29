 function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
    // let num3 = num1 + num2;
    return num2 + num1;
    console.log("Hello") //ye line print nahi hogi q k return k bd kuch print nahi hota
}
addTwoNumbers(3,5) //8
addTwoNumbers(3, "5") //35

const result = addTwoNumbers(8,7);
console.log("Result : ", result) //Result :  undefined q k koi value return nahi horahi

function userLoginMessage(username){

    if(username===undefined){

        console.log('please enter a username')
        return
    }
    return `${username} just logged in`
}
userLoginMessage("Labeeb") //nothing will happen
console.log(userLoginMessage("Labeeb"));
console.log(userLoginMessage()); //undefined just logged in without argument


//rest operator in functions '...'

function calculateCartPrice(val1, val2, ...number1){
    return number1
}
console.log(calculateCartPrice(200,300,400)) //[ 200, 300, 400 ]
console.log(calculateCartPrice(200,300,400,650,470,980)) //[ 400, 650, 470, 980 ]

//functions with objects

const product = {
    name : "Product1",
    price : 199
}
function handleObject(anyObject){
    console.log(`Product Name : ${anyObject.name} Price : ${anyObject.price}`)
}
// handleObject(product)

//direct object passing
handleObject({
    name : "Product 2",
    price : 299
})

//array passing in functions
const myArray = [200,400,300,455,900];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myArray))