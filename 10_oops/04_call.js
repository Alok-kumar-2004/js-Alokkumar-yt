function SetUserName(username){
    // complex DB calls
    this.username=username
    console.log('called');
}
function createUser(username,email,password){
    SetUserName.call(this,username)

    this.email=email
    this.password=password
}

const Alok = new createUser('Alokkumar','abc@gmail.com',12345)
console.log(Alok);