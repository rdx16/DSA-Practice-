function factorial (n){
    let fact = 1
    for (let i=1; i<=n ; i++){
        fact = fact * i
    }
    return fact
}


// Do it using the recursive fuction for better idea.

const result = factorial(5)
const result1 = factorial(6)
const result2 = factorial(7)
const result3 = factorial(8)

console.log(result)
console.log(result1)
console.log(result2)
console.log(result3)

