
//Bubble sort is technique helps us to sort an array by comparing two consecutive elements 

let arr = [2,5,4,8,10,9,7,6]

function bubbleSort(arr){
    let n = arr.length

    for(let i=0;i<n-1;i++){
        let isSwapped = false  //this helps us reduce no of iterations if array is already swapped 
        for(let j=0;j<n-i-1;j++){
            if(arr[j] >arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                isSwapped = true
            }
        }
        if(isSwapped == false) break
    }
    return arr
}

console.log(bubbleSort(arr))


//Time complexity O(n²)