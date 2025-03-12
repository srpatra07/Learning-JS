const user = {
    id: 101,
    name: "John wick",
    age: 24,
    email: "wick@yahoo.com"
}

//Update email 
user.email = "wick@gmail.com"
// console.log(user);

//Freeze the object
// Object.freeze(user)
//After freeze any changes are not reflected in the original object
user.email = "wick@microsoft.com"
// console.log(user);

user.greeting = function(){
    console.log("Hello! Good Evening...");
}

user.sayMyName = function(){
    console.log(`Hello! Myself ${this.name}`);
}

user.greeting()
user.sayMyName()




