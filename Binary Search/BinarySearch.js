function binarySearch(arr, x){
    let low= 0
    let high = arr.length

    while(low<= high){
        let mid = Math.floor((low + high)/2)
        if(arr[mid]===x){
            return mid
        }else if (arr[mid]>x){
           high = mid-1
        }else {
           low = mid + 1
        }
    }
    return -1
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(binarySearch(arr1, 5));  // Output: 4 (index of 5)

// Test Case 2: Element present at the beginning of the array
let arr2 = [10, 20, 30, 40, 50, 60];
console.log(binarySearch(arr2, 10)); // Output: 0 (index of 10)

// Test Case 3: Element present at the end of the array
let arr3 = [15, 25, 35, 45, 55, 65, 75];
console.log(binarySearch(arr3, 75)); // Output: 6 (index of 75)

// Test Case 4: Element not present in the array
let arr4 = [100, 200, 300, 400, 500];
console.log(binarySearch(arr4, 250)); // Output: -1 (250 is not in the array)

// Test Case 5: Empty array
let arr5 = [];
console.log(binarySearch(arr5, 10)); // Output: -1 (array is empty)

// Test Case 6: Element present in a large array
let arr6 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25];
console.log(binarySearch(arr6, 13)); // Output: 6 (index of 13)