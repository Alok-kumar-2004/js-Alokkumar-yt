const marvelHeros=['Thor','Ironmoan','Spiderman']
const Dc_heros=['superman','flash','batman']

// marvelHeros.push(Dc_heros)

// console.log(marvelHeros);
// console.log(marvelHeros[3]);

// allHeros=marvelHeros.concat(Dc_heros)
// console.log(typeof(allHeros));

const allNewHeros=[...marvelHeros,...Dc_heros]//spread Operators.each element is an indiviual value
// console.log(allNewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const usableAnotherArray=anotherArray.flat(Infinity)// infinity will automatically understands the depth of array here it is (3)sub Array
console.log(usableAnotherArray);


console.log(Array.isArray("Alokkumar"))//=>It will give answer if the given element is an Array
console.log(Array.from("Alokkumar"))//=>It will convert the given element into Array.
console.log(Array.from({name:"Alokkumar"}))// it will return null array as it cant convert key value pair into array


let score1=200
let score2=300
let score3=400
console.log(Array.of(score1,score2,score3));
