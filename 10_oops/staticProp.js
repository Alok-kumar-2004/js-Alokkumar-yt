class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}
const Alokkumar = new User("Alokkumar")
// console.log(Alokkumar.createId())

class Teacher extends User{
    constructor (username,email){
        super(username)
        this.email=email
    }
}

const iphone = new Teacher('iphone',"iphone@gmail.com")
iphone.logMe()
// console.log(iphone.createId());