const user = {
    userName: "John",
    age: 23,

    welcomeMsg: function(){
        // console.log(`Hello ${this.userName}, Welcome to Website`);
        console.log(this); //this will give current object
    }
}

// user.welcomeMsg()
// user.userName = "Wick"
// user.welcomeMsg()

console.log(this); // this will point an empty object
