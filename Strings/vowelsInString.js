function vowelsin(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        // Explicitly check if the character matches any vowel
        if (
            s.charAt(i) === 'a' || 
            s.charAt(i) === 'e' || 
            s.charAt(i) === 'i' || 
            s.charAt(i) === 'o' || 
            s.charAt(i) === 'u' || 
            s.charAt(i) === 'A' || 
            s.charAt(i) === 'E' || 
            s.charAt(i) === 'I' || 
            s.charAt(i) === 'O' || 
            s.charAt(i) === 'U'
        ) {
            count++;
        }
    }
    return count; // Return count after finishing the loop
}
