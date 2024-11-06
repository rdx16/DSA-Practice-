function lowestCommonMultiple(a, b){

    let largest = Math.max(a, b)
    for (let i = largest; i<= a*b ; i++){
        if (i%a === 0 && i%b ===0){
            return i
        }
    }

}

console.log(lowestCommonMultiple(3,2))
console.log(lowestCommonMultiple(31,22))
console.log(lowestCommonMultiple(5,4))
console.log(lowestCommonMultiple(3,12))
console.log(lowestCommonMultiple(13,25))