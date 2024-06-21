const array=[1,2,3,4,5]
// console.log(array[3]);

// const myHeros=['Ironman','thor']
// const myArr=new myArr(2,3,4,5,6,7)
// console.log(array[0]);


// Array Methods

// array.push(6)
// array.push(7)
// array.pop()

// array.unshift(9)
// array.shift()
// console.log(array.includes(4));
// console.log(array.indexOf(7));

// const newArr=array.join()
// console.log(array);
// console.log(typeof(newArr));

//slice and splice

console.log("A ",array);

const myn1=array.slice(1,3)// array ka copy hota hai ussme change hota hai 1to2 include and 3 excludes
console.log(myn1);

console.log("B",array);

const myn2=array.splice(1,3)// original araay mey change hota hai & 1to3 are included 
console.log("C",array);
console.log(myn2);

console.log(array); 



