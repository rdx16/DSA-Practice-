function sqrtBinary(x){
    if (x<2) return x

    let low=1
    let high =x 
    
    while(low < high){
        let mid = Math.floor((low+high)/2)
        if(mid * mid=== x){
            return mid
        }else if(mid*mid<x){
            low = mid +1
            result = mid
        }else{
            high = mid -1
        }
    }
    return result
}