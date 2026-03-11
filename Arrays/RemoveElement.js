//removing a specific element from an array (there may be same spcific element in different positions) and return no of elements

function removeElements(arr,val){
    let x = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] != val){
            arr[x] = arr[i]
            x++
        }
    }
    console.log(arr)
    return x
}

let res = removeElements([0,1,2,2,3,0,4,2],2)

console.log(res)