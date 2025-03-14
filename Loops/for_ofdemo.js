const arr = [10, 20, 30, 40, 50]

// for(const i of arr)
// {
//     console.log(i);
// }

//Not applicable for object because object is not iterable
// const user = {
//     userName: "John",
//     userAge: 23,
//     userEmail: "wick@outlook.com"
// }

// for(const i of user){
//     console.log(i)
// }

const myName = "SWARUP"

// for(const ltr of myName)
// {
//     console.log(ltr);
// }

const mp = new Map()
mp.set("IN", "INDIA");
mp.set("USA", "UNITED STATES OF AMERICA")
mp.set("GB", "GREAT BRITAIN")

for(const [key, val] of mp)
{
    console.log(`${key} : ${val}`);
}
