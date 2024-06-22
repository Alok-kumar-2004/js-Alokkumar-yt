//const tinderUser = new Object()
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="Alokkumar"
tinderUser.isLoggedIn=false

const regularUser={
    email:"anc@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Alokkumar",
            lastName:"Singh"
        }
    }
}
// console.log(regularUser.fullName?.userFullName.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

//const obj3={obj1,obj2};
//const obj4=Object.assign({},obj1,obj2,obj3)//{}(Empty object)=>Target were all the source object will stored ex:obj(1,2,3) otherwise it will stored in obj1.
const obj4= {...obj1, ...obj2, ...obj3}// it will be used 80% time

// console.log(obj4);

const users =[
    {
        id:1,
        email:"a@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]
// console.log(users[1].email )

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName:"Js in Hindi",
    price:999,
    courseInstructor:"Alokkumar"
}

// const {courseInstructor} = course
const {courseInstructor:Instructor} = course// object destructuring it uses=> {}
// console.log(courseInstructor);
console.log(Instructor);


