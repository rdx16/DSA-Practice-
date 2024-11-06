function largestElement(arr) {
    let largest = arr[0]
for (i=1;i<= arr.length; i++){
if(arr[i]>largest){
largest= arr[i]
}
}
return largest
}
console.log(largestElement([1,2,6,7,3,4,5,9,3,4,55,6,66,7,77,88]))