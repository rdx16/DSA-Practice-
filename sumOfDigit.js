function sum(digit, total=0){
if(digit>0){
 total += digit%10
return sum(Math.floor(digit/10), total)}
else return console.log(total)
}
sum(456)