
// finds the minimum element from the unsorted part and puts it at the beginning.

let arr = [6, 1, 5, -2, 10, 3, 2, 4]

function selectionSort(arr) {   
    let n = arr.length
    for (let i = 0; i < n - 1; i++) { //we iterate n-1 times because last element is already sorted after n-1 th itertation
        let min = i
        for (let j = i + 1; j < n; j++) { 
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        let temp = arr[i]
        arr[i] = arr[min]
        arr[min] = temp
    }
    return arr
}

console.log(selectionSort(arr))

//Time complexity  -> O(n²)