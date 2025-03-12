// Adding a symbol inside object
const mySym = Symbol("My Symbol Key")

const user = {
    id: 101,
    name: "John",
    age: 23,
    [mySym]: "My Symbol Key"
}

// console.log(typeof user.mySym); // gives string
// console.log(typeof user[mySym]); // gives string also

