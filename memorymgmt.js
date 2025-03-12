// Stack and Heap Memory
let myName = "John"
let anotherName = myName
anotherName = "Wick"

// console.log(myName);
// console.log(anotherName);
/*
    primitive types are stored in stack memory
    Nonprimitive types are stored in heap memory
*/

let userOne = {
    email: "john@gmail.com",
    upi: "john@ibl"
}

let userTwo = userOne
userTwo.email = "wick@outlook.com"

console.log(userOne.email);
console.log(userTwo.email);



