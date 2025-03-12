// const score = 400
// console.log(score);


// const balance = new Number(400)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //gives precision


//Generate random numbers ranging from 10 to 20
//Math.random() gives 0 to 1

const min = 10
const max = 20

for(var i=0;i<5;i++)
{
    randomNo = Math.floor((Math.random() * (max - min)+1) + min)
    console.log(randomNo);
}


