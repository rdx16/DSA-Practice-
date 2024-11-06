function highestCommonDinominator(a, b){
let smaller = Math.min(a, b)
for(let i=smaller; i >=1; i--){
if(a%i===0 && b%i===0){
    return i
}
}
return 1
}

// console.log(highestCommonDinominator(4,6))
// console.log(highestCommonDinominator(7,13))
// console.log(highestCommonDinominator(14,16))
// console.log(highestCommonDinominator(81,9))


// Eucleadian Algorithm for solving

console.log(GCDusingEuclid(4,6))

function GCDusingEuclid(a,b){
    if(b===0){
        console.log(a) 
        return a
    }
  return GCDusingEuclid(b,a%b)  
}

console.log(GCDusingEuclid(7,13))
console.log(GCDusingEuclid(14,16))
console.log(GCDusingEuclid(81,9))