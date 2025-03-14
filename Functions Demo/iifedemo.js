// Immediately Invoked Function Expressions
// Semicolon is important to stop the execution of IIFE
(function chai(){
    console.log("DB CONNECTED...");
})();

( (name) => {
    console.log(`Welcome! ${name}`);
})("John");