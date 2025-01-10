// function leftMostOccurance(str){
// for(let i= 0; i<= str.length; i++){
//     if(str[i]===str[i+1]){
//         return i
//     }
// }
// }


// Code written by Me without correction 

// function leftMostOccurance(str){
//     for(let i=0; i<=str.length-1; i++){
//         for(let j=i+1; j<=str.length-1; j++){
//             if(str[i]===str[j]){
//                 return str[i]
//             }
//         }
//         return -1
//     }
    
// }

// code after the correction made return is moved outside the for condition

function leftMostOccurrence(str) {
    for (let i = 0; i < str.length - 1; i++) { // Outer loop for each character
        for (let j = i + 1; j < str.length; j++) { // Inner loop to find duplicates
            if (str[i] === str[j]) {
                return str[i]; // Return the character if found
            }
        }
    }
    return -1; // Return -1 if no duplicate characters found
}

// chatGPT Efficient solution
function leftMostOccurrence(str) {
    const seen = new Set();
    for (let char of str) {
        if (seen.has(char)) {
            return char; // Return the first duplicate
        }
        seen.add(char);
    }
    return -1; // No duplicate found
}


// New function used by the GFG 

function leftmst(s) {
    let count = new Array(256).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i)]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (count[s.charCodeAt(i)] > 1) { // Removed the extra semicolon
            return i;
        }
    }
    return -1; // No repeating characters
}
