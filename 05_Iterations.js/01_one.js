//for
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i==5) {
      //  console.log("5 is the best Number.");
    }
    //console.log(element," ");
}

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value : ${i}`);
    for (let j = 1; j <= 10; j++) {
    //    console.log(`Inner Loop value : ${j} and Inner loop : ${i}`);  
    //   console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray=["flash","Superman","batman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);  
}

// for (let index = 1; index <=20; index++) {
//     if (index==5) {
//         console.log("5 is detected.");
//         break
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 1; index <=20; index++) {
    if (index==5) {
        console.log("5 is detected.");
        continue
    }
    console.log(`value of i is ${index}`);
}
