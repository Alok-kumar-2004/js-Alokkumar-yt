// singleton object => when you make from constructor it will be a single object of its type
Object.create
// object literals (non singleton)


const mySym = Symbol("Key1")//Que=> use these as a key.

const JsUSer={
    name:"Alokkumar",
    "fullName":"Alokkumar Singh",
   // mySym:"myKey1",=> wrong syntax
    [mySym]:"myKey1",
    age:19,
    location:"Mumbai",
    email:"singhalokkumar@gmail.com",
    isLoggedIn:false,
    lastLoggedInDays:["Monday","Saturday"]
}
// console.log(JsUSer.isLoggedIn);
// console.log(JsUSer["email"]);//=>better to use these in special cases
// console.log(JsUSer.fullName);// mostly dot operator are used.
// console.log(typeof(JsUSer.mySym));
// console.log(JsUSer[mySym]);

JsUSer.location="Delhi"
// console.log(JsUSer['location']);
// Object.freeze(JsUSer)
JsUSer.isLoggedIn=true
// console.log(JsUSer["isLoggedIn"]);
// console.log(JsUSer);


JsUSer.greeting=function(){
    console.log("Hello Js User");
}
JsUSer.greetingTwo=function(){
    console.log(`Hello Js user ,${this.fullName}`);
}

console.log(JsUSer.greeting());
console.log(JsUSer.greetingTwo());