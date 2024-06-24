const user={
    username : "Alokkumar",
    price : 999,
    
    welcomeMessage :function(){
        console.log(`${this.username}, Welcome to the website`);// this refers to the current context 
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

//console.log(this);  // there is no global object declared so the output is empty object

// function chai(){
//     // console.log(this);
//     let username="ALokkumar"
//     console.log(this.username);// it will work mostly for object not for function
// }
// chai()
const chai1 = function (){
    let username="ALokkumar"
    console.log(this.username);
}
const chaiwithArrow =  ()=>{
    let username="ALokkumar"
    console.log(this);
    console.log(this.username);
    // here this will return empty object
}


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,4))

// Another Way:-
// const addTwo=(num1,num2)=> num1+num2
// if we use curly braces then we use return keyword else return keyword not required
// const addTwo=(num1,num2)=> (num1+num2)//implicit return 


const addTwo=(num1,num2)=> ({username:"Alokkumar"})//In order to return object
console.log(addTwo(3,4))

//for exxample:-
// const myArray=[3,4,5,6,7,8]
// myArray.forEach(()=>{})