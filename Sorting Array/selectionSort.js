function selectionSortUsingValue (arr){
    for(let i=0; i< arr.length; i++){
     let smallest = arr[i]
     for(let j=i+1; j< arr.length; j++){
        if(arr[i]> arr[j]){
            smallest = arr[j]
        }
     }
     if (smallest !== arr[i]) {
        const indexOfSmallest = arr.indexOf(smallest, i); // Find index of the smallest value
        [arr[i], arr[indexOfSmallest]] = [arr[indexOfSmallest], arr[i]]; // Swap using destructuring
    }
    }
    return arr
}

function selectionSortUsingIndex(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i; // Assume the current element is the smallest
        for (let j = i + 1; j < arr.length; j++) {
            // Find the index of the smallest element in the unsorted part
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j; // Update smallestIndex if a smaller element is found
            }
        }
        // Swap the smallest element with the first element of the unsorted part
        if (smallestIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[smallestIndex];
            arr[smallestIndex] = temp;
        }
    }
    return arr; // Return the sorted array
}
