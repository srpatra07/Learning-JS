const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

//merge using spread operator
const mergedObj = {...obj1, ...obj2}
// console.log(mergedObj);
console.log(obj1);

//merge using assign
const mergeObjj = Object.assign(obj1, obj2) //here obj1 acts as target object so it is altered
const mergeObjjj = Object.assign({}, obj1, obj2) //same as above but recommended to use
console.log(mergeObjj);
console.log(obj1);




