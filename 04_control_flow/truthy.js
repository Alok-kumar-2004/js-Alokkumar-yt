// const userEmail= "alok@gamil.com"
const userEmail= NaN
if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Dont have user Email");
}
// fasly value :
// false,0,"",-0,BigInt=> (0n),null,undefined,NaN
//truthy value :
// "0",'false'," ",[],{},function(){}=>empty function
// these are some truthy value and all other value which are not falsy are truthy..
// to check wheather the array is empty 
 if (userEmail.length===0) {
    console.log("Array is empty...");
 }
// to check wheather the object is empty 
const emptyObject ={}
if(Object.keys(emptyObject).length===0){
    console.log("The object is empty");
}

// console.log(false==0)
// console.log(false=='')
// console.log(''==0)

// Nullish coalescing Operator (??) : null undefined

let val1 ;
// val1 =5??10
// val1 =null??10
// val1 = undefined?? 15
val1 = null?? 10??20

console.log(val1);


// terniary operator.
const iceTeaPrice =100

// (condition) ? true: false
iceTeaPrice <=80 ? console.log("less than 80") : console.log("More than 80");