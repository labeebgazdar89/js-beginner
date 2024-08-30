// for loop

for (let i = 0; i < 10 ; i++) {
    const element = i+1;
    console.log(element)
}

let myArr = ["labeeb", "shayan", "obaid", "owais"];

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
    
}


// break & continue

for (let index = 1; index <= 20; index++) {
    const element = index;
    if(element === 5){
        console.log(`5 detected`)
        break;  
    }
    console.log(`Element : ${index}`)
    
    
}

for (let index = 1; index <= 20; index++) {
    const element = index;
    if(element == 5){
        console.log(`5 detected`)
        continue;  
        console.log(`5 detected`)
    }
    console.log(`Element : ${index}`) 
}