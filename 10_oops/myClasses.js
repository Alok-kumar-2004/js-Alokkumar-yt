// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.password=password
//         this.email=email
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }

// const chai = new User('alok','alokkumar@gmail.com',1234)
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// same thing using function

function User (username,email,password){
    this.username=username
    this.password=password
    this.email=email

}
User.prototype.encryptPassword =function() {
    return `${this.password}abc`
}
User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}

const user = new User('Alok','Alokkk@gmail.com',1234)
console.log(user.changeUsername())
console.log(user.encryptPassword());