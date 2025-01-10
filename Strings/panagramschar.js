function missingPangram(s) {
    let notArr = []
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; // String of all letters
    s = s.toLowerCase(); // Convert the input string to lowercase
    for (let char of alphabet) {
        if (!s.includes(char)) {
            // console.log(char)
            notArr.push(char)
            console.log(notArr)
            // return false; // If any letter is missing, it's not a pangram
        }
    }
     return true; // If all letters are present, it's a pangram
}

console.log(missingPangram("The quick brown fox jumps over the lazy dog"));
// Output: "Pangram (No missing characters)"

console.log(missingPangram("The quick brown fox jumps over the lazy"));
// Output: ['d', 'g']

console.log(missingPangram("Hello world"));
// Output: ['a', 'b', 'c', 'f', 'g', 'i', 'j', 'k', 'm', 'n', 'p', 'q', 's', 't', 'u', 'v', 'x', 'y', 'z']

console.log(missingPangram("Pack my box with five dozen liquor jugs"));
// Output: "Pangram (No missing characters)"
