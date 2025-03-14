const coding = ["js", "py", "java", "cpp"]

// coding.forEach( function(i){
//     console.log(i);
// } )

// coding.forEach((i) => console.log(i))

// function printMe(item)
// {
//     console.log(item);
// }

// coding.forEach(printMe)

coding.forEach(function(item, index, arr){
    console.log(item, index, arr);
})