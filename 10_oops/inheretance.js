class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`This course is added by ${this.username}`);
    }
}
const chai = new Teacher('Alokkumar','abc@gmail.com',123456)
// chai.addCourse();
const masalaChai=new User('Alokkumar Singh')
// masalaChai.addCourse()
// masalaChai.logMe()
// chai.logMe()
console.log(chai===masalaChai);
console.log(chai=== Teacher);

console.log(chai instanceof Teacher);
console.log(chai instanceof User);
console.log(masalaChai instanceof User);

