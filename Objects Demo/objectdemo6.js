users = [
    {
        jerseyNo: 18,
        name: "Virat Kohli",
        team: "RCB"
    },
    {
        jerseyNo: 7,
        name: "MS Dhoni",
        team: "CSK"
    },
    {
        jerseyNo: 45,
        name: "Rohit Sharma",
        team: "MI"
    }
]

// console.log(users[1].name);

const tinderUser = {
    id: 10101,
    name: "swatik_barik_18",
    isLoggedin: false
}

const keyss = Object.keys(tinderUser) // array of keys
const vals = Object.values(tinderUser) // array of values 
const entrys = Object.entries(tinderUser) // array of entries

// console.table([keyss, vals, entrys]);
// console.log(typeof keyss);

console.log(tinderUser.hasOwnProperty('isLoggedin'));

