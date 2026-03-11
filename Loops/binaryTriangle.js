function binaryTriangle(n){
    for(let i=0;i<n;i++){
        let row = " "
        let bit = 1
        for(let j=0;j<i+1;j++){
            row += bit
            if(bit ==1) bit = 0
            else bit = 1
        }
     console.log(row)
    }
}


binaryTriangle(6)
