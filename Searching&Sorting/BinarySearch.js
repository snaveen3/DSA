
//if the element is found returns the index at which element is found else return -1

let arr = [5,1,0,4,3,10,7,9,15]

function binarySearch(arr,target){
    let start = 0;
    let end = arr.length-1
    while(start<=end){
        let mid = Math.floor((start + end)/2)
        
        if(target == arr[mid]){
            return mid
        }
        else if(arr[mid]>target){
            end = mid-1
        }
        else{
            start = mid+1
        }
    }
    return -1
 
}

let result = binarySearch(arr,15)

console.log(result)


//Time complexity O(log n)