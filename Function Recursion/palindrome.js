function isPalindromeRecursive(n, a = 0) {
    a = a * 10 + n % 10;
    
    if (Math.floor(n / 10) > 0) {
        return isPalindromeRecursive(Math.floor(n / 10), a);
    } else {
        if (n === a) {
            console.log('It is a palindrome');
        } else {
            console.log('It is not a palindrome');
        }
    }
}
