// for In loop
const myObject={
    js:'JavaScript',
    cpp:'c++',
    rb :'Ruby',
    swift:'Swift by apple'
}
for (const key in myObject) {
    // console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming=['js','cpp','py','java','rb']
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map()
map.set('IN','India')
map.set('USA','Unoted States of America')
map.set('FR','France')
map.set('IN','India')
// Map not iterable.
for (const key in map) {
    console.log(`${key} is shortform of ${map[key]}`);
}


