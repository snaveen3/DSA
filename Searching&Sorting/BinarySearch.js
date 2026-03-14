
//Binary search is the basic searching algorithm

let arr = [5,4,3,10,15,2,1]
function binarySearch(arr,target){
    let n = arr.length
    for(let i=0;i<n;i++){
        if(arr[i]==target){
            return i
        }
    }
    return -1
}

let result = binarySearch(arr,15)
console.log(result)


//Time complexity O(n)