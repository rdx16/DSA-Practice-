function bSearch(arr, x, low, high){
 if(low>high)
    return -1
let mid = Math.floor((low+high)/2)
if(arr[mid]===x){
    return mid
}else if(arr[mid]> x){
   return bSearch(arr, x, low, mid-1 )
}else{
    return bSearch(arr, x, mid+1, high)
} 
}

let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(bSearch(arr10, 5, 0, arr1.length - 1));  // Output: 4 (index of 5)

// Test Case 2: Element present at the beginning of the array
let arr20 = [10, 20, 30, 40, 50, 60];
console.log(bSearch(arr20, 10, 0, arr2.length - 1)); // Output: 0 (index of 10)

// Test Case 3: Element present at the end of the array
let arr30 = [15, 25, 35, 45, 55, 65, 75];
console.log(bSearch(arr30, 75, 0, arr3.length - 1)); // Output: 6 (index of 75)

// Test Case 4: Element not present in the array
let arr40 = [100, 200, 300, 400, 500];
console.log(bSearch(arr40, 250, 0, arr4.length - 1)); // Output: -1 (250 is not in the array)

// Test Case 5: Empty array
let arr50 = [];
console.log(bSearch(arr50, 10, 0, arr5.length - 1)); // Output: -1 (array is empty)

// Test Case 6: Element present in a large array
let arr60 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
console.log(bSearch(arr60, 13, 0, arr6.length - 1)); // Output: 6 (index of 13)

// Test Case 7: Element is the only item in a single-element array
let arr70 = [42];
console.log(bSearch(arr70, 42, 0, arr7.length - 1)); // Output: 0 (index of 42)

// Test Case 8: Element not present in a single-element array
let arr80 = [42];
console.log(bSearch(arr80, 7, 0, arr8.length - 1)); // Output: -1 (7 is not in the array)