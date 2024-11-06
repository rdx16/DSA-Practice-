function palindrome(n){
   let rev = 0
   let temp = n
    while(temp !== 0){
// rev = 0
let digits = temp % 10
rev = rev*10 + digits
temp = Math.floor(temp/10)
    }
    return rev === n
}


// Do it using string method for better result


console.log(palindrome(373))


// function palindrome(n) {
//     let rev = 0;
//     let temp = n;
//     while (temp !== 0) {
//         let digits = temp % 10;
//         rev = rev * 10 + digits;
//         temp = Math.floor(temp / 10);
//     }
//     return rev === n;
// }

// console.log(palindrome(373)); 