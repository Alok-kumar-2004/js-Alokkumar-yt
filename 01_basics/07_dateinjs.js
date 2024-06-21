let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());


// let myCreatedDate=new Date(2024,6,6)
// let myCreatedDate=new Date(2024,6,6,6,15,33)
// let myCreatedDate=new Date("2024-01-06")
// let myCreatedDate=new Date("01-06-2024")
// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp = Date.now()
// console.log(myTimeStamp);// value comes in the millisecond
// console.log(myCreatedDate.getTime());  
// console.log(Math.floor(Date.now()/1000));// converts the value into seconds

let newDate=new Date()
console.log(newDate.getDate());
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// ......Example.....
newDate.toLocaleString('default',{
    weekday:"long",
    dateStyle:"medium",
    // formatMatcher:AbortSignal() 
})

