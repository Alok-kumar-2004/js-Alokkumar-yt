const user = {
    username: "Alokkumar",
    logInCount:8,
    signedIn:true,

    getUserDetail : function(){
        console.log(`Username : ${this.username}`);
       // console.log(this.user);
       // console.log(this);
    }  
}
// console.log(user);

// console.log(user.username);
// console.log(user.getUserDetail());

function User (username,logInCount,isLoggedIn){
    this.username=username
    this.logInCount=logInCount
    this.isLoggedIn=isLoggedIn
    // if you dont write this keyword still it works
    return this // this will return the entire thing  
    //as this is an (empty)object it will add the given variable in it. 
}

const userOne = User("Alokkumar",9,true)
const userTwo = User('Alok',10,false)
console.log(userOne);// it overwrites the value of userTwo so thatswhy we use new key word.
// const userTwo = new User('Alok',10,false) #correct way#
// it create the new object. 
// due to new keyword a constructor is called 
// whatever args you have passed is injected in the this.variablename 
// at last you got the output.


