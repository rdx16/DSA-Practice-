// Naive Solution

function power(a,b){
let comp = 1
for(let i = 0; i< b ; i++){
    comp = comp * a
}
return comp
}

console.log(power(2, 3))
console.log(power(2, 6))
console.log(power(3, 8))
console.log(power(5, 9))
console.log(power(5, 0))


// Efficient Solution

function myPower( a, b){
    if(b === 0) return 1
    temp = myPower(a, Math.floor(b/2))
    temp = temp*temp
    if(b%2 === 0) return temp
    else return temp*a
}
console.log(power(2, 3))
console.log(power(2, 6))
console.log(power(3, 8))
console.log(power(5, 9))
console.log(power(5, 0))
console.log(typeof(4+"4"))

