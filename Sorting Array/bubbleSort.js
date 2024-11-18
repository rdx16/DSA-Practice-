function bubbleSort(arr){
    let swapped = false
    for (let i=0; i<=arr.length; i++){
        swapped = false
        console.log(i, arr[i])
        for (let j=0; j<=arr.length - i-1; j++){
            console.log(j, j+1, arr[j])
            console.log(j, j+1, arr[j+1])
            console.log(arr)

            if( arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                swapped = true;
            }
        }
        if( swapped === false) break;
    }
    return arr;
}

let a = [2,3.4, 1, 1.4, 3.4];
a = bubbleSort(a, 4);
console.log(a);