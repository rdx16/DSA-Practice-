function primeNumber(a){
    for (let i=2; i<=Math.floor(a/2); i++){
        if (a%i===0){
            return false
        }
    }
    return true
}

console.log( primeNumber(7))
console.log( primeNumber(13))
console.log( primeNumber(16))
console.log( primeNumber(14))
console.log( primeNumber(21))