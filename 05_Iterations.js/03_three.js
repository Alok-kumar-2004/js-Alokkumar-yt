// for of
//["","",""]
//[{},{},{}]
const arr =[1,2,3,4,5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Hello world !"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

//Map
// key value pair and only unique value...
const map = new Map()
map.set('IN','India')
map.set('USA','Unoted States of America')
map.set('FR','France')
map.set('IN','India')


// console.log(map);

for (const [key] of map) {
    // console.log(key);
}
for (const [key,value] of map) {
    // console.log(key, "=>" ,value);
}

//for of loop is not iterable on object.
// const myObject = {
//     'game1':'NFS',
//     'game2':'spiderman'
// }
// we can use for in loop.
