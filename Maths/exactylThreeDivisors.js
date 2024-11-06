function threeDivisors(N){
    let sum = 0
for(i=2; i<(Math.sqrt(N)); i++){
    for (let j=2; j<=Math.floor(i/2); j++){
        if (i%j===0){
            return false
        }else{
            if(i*i<N){
                sum++
            }
        }
    }
}
return sum
}