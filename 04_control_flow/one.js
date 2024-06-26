// if
const username="Alokkumar"
const temprature=50
const isUSerLoggedIn=true
if(temprature>50){
    // console.log(`Hello ${username},Welcome to the website`);
}else{
// console.log(`Hello ${username},You're not Welcome to the website`);
}

// console.log("!00% executed ");

const score =200

if(score>100){
    // const power ="fly"=> Correct..
    //var power ="fly"
    // console.log(`User Power :${power}`);
}
// console.log(`User power :${power}`);



const balance =1000
// if(balance>500) console.log("test");// cannot write multiple lines or use "," .
// if(balance>500) console.log("test"),
// console.log("test 2"); // => unreadable dont use thse syntax.

// if(balance<500){
//     console.log("less than 500");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<950){
//     console.log("less than 950");
// }else{
//     console.log("less than 1200");
// }

const UserLoggedIn =true
const debitCard = true
const LoggedInFromGoogle=false
const LoggedInFromEmail=true
if (UserLoggedIn&& debitCard ) {
    console.log("Allow to buy course..");
}
if (LoggedInFromGoogle||LoggedInFromEmail) {
    console.log("User Logged In");
}


