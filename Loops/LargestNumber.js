function largestNumber(arr) {
    let largest = arr[0]; //we can use -Infinity instead of arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNumber([10,4,8,3,4,5]))