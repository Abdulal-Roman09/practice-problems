function duplicate(arr){
    let res=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            res.push(arr[i])
        }
    }
    return res
}
console.log(duplicate([1,2,3,3,4,4,5,6,7,7]));