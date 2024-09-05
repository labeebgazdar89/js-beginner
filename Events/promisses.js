const requestUrl = "https://api.github.com/users/hiteshchoudhary";
//object to create XML request send & receive
const XML = new XMLHttpRequest();
XML.open("GET", requestUrl);

XML.onreadystatechange = function () {
  console.log(XML.readyState);
  if (XML.readyState === 4) {
    //Data string main aya
    //phir humne JSON main convert kia
    const data = JSON.parse(this.responseText);
    console.log(data);
    console.log("Followers : ", data.followers);
  }
};
XML.send();

//creating promise
//ye callback function leta hai with two arguments
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task completed");
    //agr resolve() nahi likhehnge to .then() connect nahi hoga
    //resolve directly connected hota hai then se
    resolve()
  }, 1000);
});

promiseOne.then(function () {
  //task resolve hone k bd hi .then chalega
  console.log("Promise Consumed");
});

new Promise(function(resolve, reject){
  setTimeout(function(){
      console.log("Async Task 2")
      resolve()
  },1000)
}).then(function(){
  console.log("Promise 2 resolved")
})

//Promise with data passing
const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
      resolve({username:"labeebgazdar", email:"lgazdar@gmail.com"})
  },1000)
})
promiseThree.then(function(user){
  console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = false
      if(!error){
          resolve({username: "labeeb", email:"lgazdar@gmail.com"})
      }
      else{
          reject('ERROR: Something went wrong')
      }
  },1000)
})
promiseFour.then((user)=>{
  console.log(user)
  return user.username
}).catch((error)=>{
  console.log(error)
}).finally(()=>{
  console.log('promise resolved or rejected')
})

//Promise consumption by Async Await
const promiseFive = new Promise(function(resolve, reject){
  setTimeout(function(){
      let error = true
      if(!error){
          resolve({language: "Javascript", code: "JS"})
      }
      else{
          reject('ERROR: Something went wrong')
      }
  },1000)
})

async function promiseFiveConsumption() {
  try {
      const response = await promiseFive
      console.log(response)
  } catch (error) {
      console.log(error)
  }
  
}
promiseFiveConsumption()


async function getAllUsers() {
  try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      console.log(data)
  } catch (error) {
      console.log("E: ", error)
  }
  
}
getAllUsers()

// Same function by .then
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
}).then((data)=>{
  console.log(data)
}).catch((e)=>{
  console.log(e)
})
