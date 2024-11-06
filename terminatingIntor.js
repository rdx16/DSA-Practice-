function fun(n){ 
    console.log("RDX")
    if(n>0)fun(n-1)
    else false
}
 
fun(4)

// It gets hang 
function fun2(n){
    if(n==0)  return

    console.log("Pappu")

    fun2(n - 1)
}

fun2(4)

// function fun2(n) {
//     if (n === 0) {
//         console.log('RDX'); // Log 'RDX' when n reaches 0
//         return; // Exit the function
//     }
//     fun2(n - 1); // Recursively call fun2 with n-1
// }

// fun2(4); // This will print 'RDX' when n reaches 0
