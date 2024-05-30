/* Immediately invoked Function Expresssion  IIFE     */


//iife syntax-

(function meta(){
    // named iife as meta
    console.log('PC connected');
}) ();
 
// iife - any function immediately exicute.(not wrong)
// Remove the polution of global scope , variable  declaration we use 'iife' .

( () => {
    console.log('PC connected')
})()