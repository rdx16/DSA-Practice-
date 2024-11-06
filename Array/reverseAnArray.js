function reverseArray(arr){
    let newArr = []
    for(let i = arr.length - 1; i >= 0; i--){
            newArr.push(arr[i])       
    }
    return newArr
}
console.log(reverseArray([1,2,6,7,3,4,5,9,3,4,55,6,66,7,77,88]))