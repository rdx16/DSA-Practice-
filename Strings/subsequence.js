function subsequence(str, sub) {
    let j = 0;

    // Loop over the main string `str`
    for (let i = 0; i < str.length; i++) {
        // If characters match, move to the next character in `sub`
        if (str[i] === sub[j]) {
            j++;
        }
        // If we've matched all characters in `sub`, we can stop
        if (j === sub.length) {
            return true;
        }
    }
    
    // If we've traversed the whole string and didn't match all of `sub`
    return j === sub.length;
}

console.log(subsequence("abcde", "ace"));  // true
console.log(subsequence("abcde", "aec"));  // false