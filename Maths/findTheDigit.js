function findDigit(x){
  let y = 0;
  while(x > 0){
    x = Math.floor(x / 10);
    y++;
  }
  return y;
}

const digit = findDigit(21);
console.log(digit);
// Other test cases
console.log(findDigit(21));
console.log(findDigit(213854));
console.log(findDigit(2100));
console.log(findDigit(21));