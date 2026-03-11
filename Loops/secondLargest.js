function secondLargestNumber(arr){
    let firstLargest = -Infinity
    let secondLargest = -Infinity

    for(let i=0;i<arr.length;i++){
        if(arr[i]>firstLargest){
            secondLargest = firstLargest
            firstLargest = arr[i]
        }
        else if(arr[i]>secondLargest && arr[i] != firstLargest){ // arr[i] != firstLargest used if we have any duplicates
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

function secondSmallestNumber(arr){
    let smallest = Infinity
    let secondSmallest = Infinity

    for(let  i =0;i<arr.length;i++){
        if(arr[i]<smallest){
            secondSmallest = smallest
            smallest = arr[i]
        }
        else if(arr[i]<secondSmallest){
            secondSmallest = arr[i]
        }
    }
    return secondSmallest
}

console.log(secondLargestNumber([4,18,2,9,18,10,16]))

console.log(secondSmallestNumber([4,18,2,9,18,10,16]))