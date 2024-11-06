function roots(a, b, c){
let root1 = ((-b)+Math.sqrt(b*b-4*a*c))/(2*a)
let root2 = ((-b)-Math.sqrt(b*b-4*a*c))/(2*a)

return root1, root2
}

console.log(roots(1,-2,1))