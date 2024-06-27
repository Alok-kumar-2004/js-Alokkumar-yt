const myNums=[1,2,3,4,5,6,7,8,9,10]

// using map function
// const newNums= myNums.map( (num) => {return num+10} )
// console.log(newNums);


// using for each loop
// myNums.forEach( (nums)=> {
//     newNums = nums+10
//     console.log(newNums);
// })

//chaining
const newNums = myNums
.map((num)=>num*10)
.map((num1)=>num1+1)
.filter((num)=>num>=40)// return truthy and falsy value.

console.log(newNums);



