function primeFactor(n){
    if(n <= 1) return;
  
    // let lastFactor;
  
    for(let i = 2; i * i <= n; i++) {
      while(n % i === 0) {
        console.log(i);
        // lastFactor = i;
        n = n / i;
      }
    }
  
    if(n > 1) {
      console.log(n);
    //   lastFactor = n;
    }
  
    // return lastFactor;
  }
  
  console.log(primeFactor(6));
  console.log(primeFactor(13));
  console.log(primeFactor(18));
  console.log(primeFactor(20));
  