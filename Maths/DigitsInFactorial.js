function digitsInFactorial(N){
let fact =1
let sum =0
for(i=1; i<=N; i++){
    fact= fact * i
    return fact
}
while(fact > 0){
    fact = Math.floor(fact / 10);
    sum++;
  }
  return sum
}