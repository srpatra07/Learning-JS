//Extract values greater than 50
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

//using for each loop
const newNums = []
nums.forEach(function giveAns(num){
    if(num > 50)
        newNums.push(num);
})
console.log(newNums);

//Using filter()

const values = nums.filter( (num) => num > 50 )
console.log(values)