// function anagrams(str, strana){
// if(str.length !== strana.length){
//     return false
// }
// let s1 = str.split('').sort().join('')
// let s2 = strana.split('').sort().join('')
// return (s1===s2)
// }


function areAnagrams(str1, str2) {
    // If the lengths of the strings are different, they cannot be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Create a frequency count object for the characters
    let charCount = {};

    // Iterate through both strings in a single pass
    for (let i = 0; i < str1.length; i++) {
        // Increment the count for characters in str1
        charCount[str1[i]] = (charCount[str1[i]] || 0) + 1;
        console.log(charCount)
        // Decrement the count for characters in str2
        charCount[str2[i]] = (charCount[str2[i]] || 0) - 1;
       
    }

    // Check if all counts are zero, which means both strings are anagrams
    for (let key in charCount) {
        if (charCount[key] !== 0) {
            return false;
        }
    }

    return true;
}

console.log(areAnagrams("listen", "silent"));  // true
console.log(areAnagrams("hello", "world"));    // false
console.log(areAnagrams("evil", "vile"));      // true
