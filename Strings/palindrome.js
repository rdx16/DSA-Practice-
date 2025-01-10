function stringPalindrome(string) {
    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - i - 1]) {
            return false; // If characters don't match, return false
        }
    }
    return true; // If all characters match, return true
}

console.log(stringPalindrome("madam")); // true
console.log(stringPalindrome("hello")); // false
console.log(stringPalindrome("abccba")); // true