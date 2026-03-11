
//Remove duplicates from an array and re-arranging such a way that all the k number of unique elements in first k positions
//return number of unique elements
function removeDuplicates(arr){

    let x = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x++
            arr[x] = arr[i]
        }
    }
    console.log(arr)
    return x+1
}


let res = removeDuplicates([0,1,1,1,2,2,3,3,4])

console.log(res)