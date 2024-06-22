//here we will first try to concatenate two values and also add extra values to it

const name="Shalini"
const repoCount=40
// console.log(name+  repoCount+" enjoy coding") not recommended a better way is to use backticks

console.log(`My name is ${name} and my repo count is ${repoCount}`)

//there is another way to declare string like we do in objects
const newname=new String("tin-ac-hj")
//__proto__ will contain the functions that can be used directly with the variables
console.log(newname.length)
//since all of these are functions present in proto we need to call it
console.log(newname.toUpperCase())

console.log(newname.charAt(2))
//if you want to know the character at that index then you can use the charAt
console.log(newname.indexOf("c"))

const newele=newname.substring(0,5)
console.log(newele)

//slice is a method which also allows us to use negative values while defining a range
const anotherstring=newname.slice(-4,6)
console.log(anotherstring)

const string2="        revisingjs        "
console.log(string2)

console.log(string2.trim()) //this helps in removing extra spaces from our given string without modifying the original string ,if you want to trim only from one end use the trimStart() or trimEnd()

const url="https://development.com/development%20fullstack"

console.log(url.replace("%20","-")) 

//another method which we can use is includes
console.log(url.includes("development")) //here it returns a boolean value 

console.log(url.includes("hello"))

//to convert a given string to an array use the split method 

console.log(newname.split("-"))

