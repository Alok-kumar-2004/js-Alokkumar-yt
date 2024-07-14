const promiseOne=new Promise(function(resolve,reject){
    // Do an async task
    // DB calls,cryptography
    setTimeout(function(){
        console.log("Async Task is complete.");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed");
})


new Promise ((resolve,reject)=>{
    setTimeout(function(){
        console.log("Async 2 Task ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("Hello world");
        resolve({username:'chai',email:'abc@gmail.com'})
     },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour =new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"Alokkumar",password:"1234"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user);
    // console.log(user.username);
    return user.username     // can't return it directly so we use chaining it will return to next then statment 
  }).then((username)=>{      // that will help us to get desired o/p
    console.log(username);
  }).catch(function(err){
    console.log(err);
  }).finally(function(){
    console.log("finally is either resolved or rejected.");
  })       
  
  const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"ALOKKUMAR",password:"1234"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
  })

  async function consumedPromiseFive (){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }
  consumedPromiseFive()
  

//   async function getAllusers (){
//     try {
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:",error);
//     }
//   }
//   getAllusers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})