function rightAnglePattern1(n){
    for(let i=0;i<=n;i++){
        let str = " "
        for(let j = 0;j<=i;j++){
            str += (j+1)
        }
        console.log(str)
    }
}

rightAnglePattern1(4) 

// //1
// 12
// 123
// 1234

console.log(" ------------------")
function rightAnglePattern2(n){
    for(let i=0;i<=n;i++){        
        let str = " "      
        for(let j=0;j<=n-i;j++){
            str += (j+1)
        }
        console.log(str)
    }
}

rightAnglePattern2(4)