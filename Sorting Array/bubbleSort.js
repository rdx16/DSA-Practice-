function bubbleSort(arr){
    let swapped = false
    for (let i=0; i<=arr.length; i++){
        swapped = false
        for (let j=0; j<=arr.length - i-1; j++){
            console.log('Value of i and arri', i, arr[i])
            console.log('Value of j and arrj', j, arr[j])
            console.log('Value of j and arrj+1', j+1, arr[j+1])
            console.log('current value of array', arr)

            if( arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if( swapped === false) break;
    }
    return arr;
}

let a = [2,3.4, 8, 1.4, 3.4, 1];
a = bubbleSort(a, 4);
console.log(a);