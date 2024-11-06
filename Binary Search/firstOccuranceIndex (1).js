function firstOccurance(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === x) {
            if (mid === 0 || arr[mid - 1] !== x) {
                return mid;
            } else {
                high = mid - 1;
            }
        } else if (arr[mid] < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

 // Test Case 1
 let arr1 = [1, 2, 3, 4, 5, 6];
 console.log("Test Case 1: " + (firstOccurance(arr1, 4) === 3 ? "Passed" : "Failed"));

 // Test Case 2
 let arr2 = [1, 2, 2, 2, 3, 4];
 console.log("Test Case 2: " + (firstOccurance(arr2, 2) === 1 ? "Passed" : "Failed"));

 // Test Case 3
 let arr3 = [2, 2, 3, 4, 5];
 console.log("Test Case 3: " + (firstOccurance(arr3, 2) === 0 ? "Passed" : "Failed"));

 // Test Case 4
 let arr4 = [1, 2, 3, 4, 5, 5];
 console.log("Test Case 4: " + (firstOccurance(arr4, 5) === 4 ? "Passed" : "Failed"));

 // Test Case 5
 let arr5 = [1, 2, 3, 4, 5];
 console.log("Test Case 5: " + (firstOccurance(arr5, 6) === -1 ? "Passed" : "Failed"));

 // Test Case 6
 let arr6 = [7];
 console.log("Test Case 6: " + (firstOccurance(arr6, 7) === 0 ? "Passed" : "Failed"));

 // Test Case 7
 let arr7 = [];
 console.log("Test Case 7: " + (firstOccurance(arr7, 1) === -1 ? "Passed" : "Failed"));

 // Test Case 8
 let arr8 = [3, 3, 3, 3, 3];
 console.log("Test Case 8: " + (firstOccurance(arr8, 3) === 0 ? "Passed" : "Failed"));