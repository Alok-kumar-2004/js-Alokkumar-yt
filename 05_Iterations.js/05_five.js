const coding =["js","ruby","Java","Python","cpp"]
//1st way
coding.forEach( function (item) {
    //console.log(item);
} )
// 2nd way :- by using arrow function
coding.forEach(  (item) =>{
    //console.log(item);
} )
//3rd way
function printMe(item){
//    console.log(item); 
}
coding.forEach(printMe)

coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
})

const myCoding=[
    {
        language : "javaScript",
        languageFilename:"js"
    },
    {
        language : "java",
        languageFilename:"java"
    },
    {
        language : "python",
        languageFilename:"py"
    },
]

myCoding.forEach( (item,val)=>{
    console.log(item.languageFilename);
    console.log(item,",",val);
})