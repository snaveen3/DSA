//Reverse a String of array 
    function rev(str){
        let temp
        let n = str.length
        for(let i=0;i<n/2;i++){
            temp = str[i]
            str[i] = str[n-i-1];
            str[n-i-1] = temp;
        }
        return str
    }

    console.log(rev(["N","a","v","f","e","n"])) //["n","e","f","v","a","N"]

