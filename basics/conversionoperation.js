let score="33"

console.log(typeof(score))

//now lets convert it to a number
console.log(Number(score)) //here we are performing the type casting of our number

//lets try to convert the number to boolean
let isLoggedIn=1
//so here we are able to convert the number to boolean
let booleanIsLoggedIn=Boolean(isLoggedIn)

console.log(booleanIsLoggedIn)

/*
Here are some important notes we need to consider
score="33" =>converting to number=>33
"33abc"=>NaN (means not a number)
true=>1 false =>0
null=>0 
undefined also when we try to convert to a number we get =>NaN
Type of NaN is number
*/