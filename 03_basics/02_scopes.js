
var c =300
let a =300
if (true) {
    let a=10
    const b=20
    var c=30
    // console.log("INNER:",a);
}

//  console.log("OUTER",a);
// console.log(b);
// console.log(c);// problem with var keyword..

function one(){
    const username="alokkumar"

    function two(){
        const website="Youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}

// one()

if (true) {
    const username="Alokkumar"
    if (username === "Alokkumar") {
        const website=" youTube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(4))
function addOne(num){
    return num+1
}

console.log(addOne(4))


//basic concept of hoisting
// console.log(addTwo(4))=> it will throw error
const addTwo = function(num){//another way to declare function
    return num+2
}

console.log(addTwo(4))