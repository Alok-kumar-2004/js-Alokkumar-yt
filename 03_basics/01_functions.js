function sayMyName(){
    console.log("alokkkumar");
}
sayMyName//=>Reference
// sayMyName()//function call 

// function addTwoNum(num1,num2){// paramateres
//    console.log( num1+num2)
// }
// console.log("Result :", result);// undefined comes as an output

function addTwoNum(num1,num2){// paramateres
    return num1+num2
}

const result = addTwoNum(3,3);// arguments
// console.log("Result :", result); //actuall output :-6

function loginUSerMessage(username){// user="sam" then it will not enter if condition
    // if(!username){  //username === undefined
    //     console.log("Please enter a username");
    //     return
    // }
    return `${username} just logged in`
}

// console.log(loginUSerMessage("alokkumar"));
// console.log(loginUSerMessage(""));
// console.log(loginUSerMessage());

function calculateCartPrice(val1,val2,...num1){// rest operator 
    return num1
}
// here val1 and val2 will take 200 and 400
// console.log(calculateCartPrice(200,400,500,2000,5000));

const user={
    username:'Alokkumar',
    price:200// what if user had provide prices instead of price then O/p will come out as undefined. 
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({   //direct pass object as argument
    username:'Alooo',
    price:299
})

const newArray=[200,400,100,600]
function returnSecondValue(getarray){
    return getarray[1]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([100,200,300,400]));
