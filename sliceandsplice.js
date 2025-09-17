// exmaple of slice and splice

let arr = [1, 2, 3, 4, 5];

// Using slice to create a new array from index 1 to 3 (not including 3)
let slicedArr = arr.slice(1, 3);
//  Array<number>.slice(start?: number | undefined, end?: number | undefined): 
console.log('Sliced Array:', slicedArr); // Output: [2, 3]
//  Array<number>.slice(start?: number | undefined, end?: number | undefined): 
let spliceArr = arr.splice(1, 2, 6, 7); // Removes 2 elements from index 1 and adds 6, 7
console.log('Spliced Array (removed elements):', spliceArr);