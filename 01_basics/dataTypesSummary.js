//Primitive Datatypes
    //    Number => number
    //    String  => string
    //    Boolean  => boolean
    //    null  => object
    //    undefined  => undefined
    //    Symbol  =>  symbol
    //    BigInt  =>  bigint

// Non-primitive Datatypes
    //    Arrays  =>  object
    //    Function  =>  function
    //    Object  =>  object

    const score=100
    const scoreValue=100.3
    const loggedIn=false
    const Temp =null
    let userEmail;
    const heros = ["shaktiman", "naagraj", "doga"];
    console.log(typeof(heros));
    console.log(heros);


    // const id =Symbol('123')
    // const anotherId=Symbol('123')

    // console.log(id==anotherId);
    // console.log(id);
    // console.log(anotherId);


    // const bigNumber=655352728355117n
    // console.log(bigNumber);

    // console.log(typeof bigNumber);
    // console.log(typeof Temp);

    // myObj={
    //     name:"Alokkumar",
    //     age:19,
    //     city:"Mumbai"
    // }

    // const myFunction = function (){
    //     console.log("Hello World");
    // }

    // console.log(typeof myFunction);

  //  stack(Primitive) , Heap(Non-primitive)

  let myYoutubename="Alokkumardotcom"
  let anothername=myYoutubename
  anothername="chaiAurCode"

  console.log(myYoutubename);
  console.log(anothername);

  let userOne={
    name:"Alokkumar",
    age:19,
    city:"Mumbai"
  }

  console.log(userOne.age);
let userTwo=userOne

userTwo.age= 32
  console.log(userOne.age)
  console.log(userTwo.age)
