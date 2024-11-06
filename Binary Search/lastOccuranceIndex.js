function lastOccurance(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            if (mid === arr.length - 1 || arr[mid + 1] !== x) {
                return mid;
            } else {
                low = mid + 1;
            }
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

// Test Case 1: Element appears once in the array
let arr9 = [1, 2, 3, 4, 5, 6];
console.log("Test Case 1: " + (lastOccurance(arr9, 4) === 3 ? "Passed" : "Failed"));

// Test Case 2: Element appears multiple times in the array
let arr10 = [1, 2, 2, 2, 3, 4];
console.log("Test Case 2: " + (lastOccurance(arr10, 2) === 3 ? "Passed" : "Failed"));

// Test Case 3: Element is at the beginning of the array
let arr11 = [2, 2, 3, 4, 5];
console.log("Test Case 3: " + (lastOccurance(arr11, 2) === 1 ? "Passed" : "Failed"));

// Test Case 4: Element is at the end of the array
let arr12 = [1, 2, 3, 4, 5, 5];
console.log("Test Case 4: " + (lastOccurance(arr12, 5) === 5 ? "Passed" : "Failed"));

// Test Case 5: Element is not in the array
let arr13 = [1, 2, 3, 4, 5];
console.log("Test Case 5: " + (lastOccurance(arr13, 6) === -1 ? "Passed" : "Failed"));

// Test Case 6: Array contains only one element
let arr14 = [7];
console.log("Test Case 6: " + (lastOccurance(arr14, 7) === 0 ? "Passed" : "Failed"));

// Test Case 7: Empty array
let arr15 = [];
console.log("Test Case 7: " + (lastOccurance(arr15, 1) === -1 ? "Passed" : "Failed"));

// Test Case 8: All elements in the array are the same
let arr16 = [3, 3, 3, 3, 3];
console.log("Test Case 8: " + (lastOccurance(arr16, 3) === 4 ? "Passed" : "Failed"));