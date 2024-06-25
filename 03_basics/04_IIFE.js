// Immediately Invoked Function Expression(IIFE):-
// it is used to immediately invoke the function and also resolve the problem of global scope pollution    
(function chai(){
    //named IIFE
    console.log(`DB Connected`);
})();  // use semicolon
//chai()
((name)=>{ 
 // arrow function and also providing parameter/args.
 // unnamed IIFE
    console.log(`DB Connected Two, ${name} `);
})('Alokkumar');
