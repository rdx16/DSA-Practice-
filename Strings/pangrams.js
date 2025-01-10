function vowelsin(s) {

    const alpalet = "abcdefghijklmnopqrstuvwxyz"; // Only need lowercase vowels
    s = s.toLowerCase(); // Convert the string to lowercase
    for (let i = 0; i < s.length; i++) {
        if (alpalet.includes(s[i])) { // Check if character is a vowel
            return 1
        }
    }
    return 0;
}

function isPangram(s) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // String of all letters
    s = s.toLowerCase(); // Convert the input string to lowercase
    for (let char of alphabet) {
        if (!s.includes(char)) {
            return false; // If any letter is missing, it's not a pangram
        }
    }
    return true; // If all letters are present, it's a pangram
}
