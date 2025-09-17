// example of forEach function
let arr=[1,2,3]                    
arr.forEach((singleitems)=>{
    console.log(singleitems*2>3)
})
// represent in table form the definition of forEach vs map
// | Feature       | forEach                          | map                               |
// |---------------|----------------------------------|-----------------------------------|
// | Return Value  | undefined                        | New array                         |
// | Purpose       | Side effects                     | Transforming data                 |
// | Chainable     | No                               | Yes                               |
// | Performance   | Slower for large arrays          | Faster for large arrays           |    
// | Use Case      | Logging, updating external state  | Creating new arrays from existing |
// | Mutability    | Can modify the original array    | Does not modify the original array|
// | Callback Args | (element, index, array)          | (element, index, array)           |

// Explanation:
// forEach does not return a new array, it returns undefined
// map returns a new array with the results of calling a provided function on every element in the calling array
// forEach is used for performing side effects like logging or updating external variables
// map is used for transforming data and creating new arrays
// forEach can modify the original array, while map does not modify the original array  
// map is chainable, forEach is not
// map is used when you want to transform the array and get a new array
// forEach is used when you want to perform side effects like logging or updating external variables
// map is generally faster than forEach for large arrays because it creates a new array in a single pass