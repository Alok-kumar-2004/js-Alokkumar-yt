// when thw user is asking the value from Db or somewhere else we give 
//its value whatever we want. Like user is asking for message we can encrypt or decrypt
//it according to our comfort. and for it we can use getters and setters.
class User{
    constructor(email,password){
        this.email=email
        this.password=password
    }
    get email(){
        return`the email is ${this._email.toUpperCase()}`
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `the password is ${this._password}alokkumar`
    }
    set password(value){
        this._password=value
    }
}

const A = new User('Alokkumar@gmail.com','abcdef')
console.log(A.email);
console.log(A.password);