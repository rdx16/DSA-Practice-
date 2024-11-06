function mInverse(a, m){
    let remainder 
    for(i=0;i>1; i++){
        remainder = (a*i)%m
    }
    if(remainder=1) return 1
    else return -1
}