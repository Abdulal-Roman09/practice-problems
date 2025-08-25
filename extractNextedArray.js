// function extract(arr){
//     const flatArr=arr.flat(Infinity)
//     return flatArr;
// }
// console.log(extract([1,2,[3,4,[5,6]]]));


function flatten(arr) {
    let result = [];
    for (let i of arr) {
        if (Array.isArray(i)) {
            result = result.concat(flatten(i)); // recursion
        } else {
            result.push(i);
        }
    }
    return result;
}

const arr = [1, [2, [3, 4]], 5];
console.log(flatten(arr)); // [1, 2, 3, 4, 5]
