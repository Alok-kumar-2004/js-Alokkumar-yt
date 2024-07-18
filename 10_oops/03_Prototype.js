// let mychannel = 'chai    '
// console.log(mychannel.truelength);

let myheros =['thor','spiderman']

let heroPower={
    spiderman:'sling',
    thor:"hammer",
    herossuperpower : function(){
        console.log(`The super power of spidy is ${this.spiderman} `);
    }
}
Object.prototype.Alokkumar= function(){
    console.log("alokkumar is present in all objects.");
}

Array.prototype.heyAlok=function(){
    console.log('Alokkuamr is present & says hello.');
}
// myheros.Alokkumar()
heroPower.Alokkumar()
myheros.heyAlok()
// heroPower.heyAlok()

//IHERETANCE//
const user={
    username:"Alokkumar",
    email:"Alok@gmail.com"
}
const Teacher={
    makeVedio:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"JS Assignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=user

// Mordern syntax 
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "ChaiAurCode   "
String.prototype.Truelength = function(){
    console.log(`${this}`);
    console.log(`Actuall length is ${this.trim().length}`);
}
anotherUserName.Truelength()
"  Alokkumar2004   ".Truelength()
"Icetea".Truelength()
