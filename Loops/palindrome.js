function palindrome(n){
    let reverse =0
    let rem 
    let nCopy = n
    while(n>0){
        rem = n%10
        reverse = rem + (10*reverse)
        n = Math.floor(n/10)
    }
    if(reverse == nCopy){
        return true
    }
    else{
        return false
    }
}

console.log(palindrome(12155))