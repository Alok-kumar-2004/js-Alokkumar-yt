function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2 
console.log(multiplyBy5(5))
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username,score){
    this.username=username
    this.score=score
}
createUser.prototype.increment =function(){
    this.score++ // jis ney bhi iss func ko bulaya usska value incr kardo 
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai= new createUser('ALok',25) // 
const tea = createUser('Kumar',56)

// console.log(chai);
chai.printMe()