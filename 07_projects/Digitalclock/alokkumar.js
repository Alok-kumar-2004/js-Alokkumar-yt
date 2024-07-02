const clock = document.getElementById('clock')
//const clock =  document.querySelector('#clock')

//its an event ,that call's the function after certain interval of time. 
// here its after 1000ms i.e. 1 sec
setInterval(function (){
    let date = new Date()
    // console.log(date.toLocaleString());
    clock.innerHTML=date.toLocaleString();
},1000) ;
