function numberofDigits(n){
    let count =0;
    while(n>0){
        n = Math.floor(n/10)
        count ++
    }
    return count
}

console.log(numberofDigits(2584594))



function evenDigits(n){
    let evenCount = 0
    while(n>0){
        let rem = n%10
        if(rem%2 == 0){
            evenCount++
        }
        n = Math.floor(n/10)
    }
    return evenCount
}


console.log(evenDigits(5896))