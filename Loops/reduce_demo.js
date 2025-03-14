const nums = [1, 2, 3, 4, 5]

// const total = nums.reduce( function(acc, curr){
//     console.log(acc, " ", curr);
//     return acc+curr;
// }, 0)

//using arrow function
// const total = nums.reduce( (acc, curr) => (acc + curr), 0)

// console.log(total);

const courseKart = [
    {
        name: "Java and Springboot",
        price: 15000.00
    },
    {
        name: "Angular",
        price: 6000.00
    },
    {
        name: "AWS",
        price: 9000.00
    }
]

const totalPriceToPay = courseKart.reduce( (acc, curr) => (acc + curr.price), 0)
console.log(totalPriceToPay);

