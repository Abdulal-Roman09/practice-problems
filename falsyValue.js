// function falsyValue(value){
//     return value.filter(Boolean,NaN,null,undefined,String);
// }
// console.log(falsyValue([58, '', 'abcd', true, null, false, 0, NaN, undefined]));

function falsyValue(arr){
return arr.filter((item)=> typeof item==="number" && !isNaN(item))
}
console.log(falsyValue([58, '', 'abcd', true, null, false, 0, NaN, undefined]));