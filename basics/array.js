//here in the array we can store elements of different types that is all of them need not be numbers they can be strings,boolean or any other values as well.

//All javascript copy operations promote shallow copy ,shallow copy means properties share the same reference whereas deep copy means the properties share different references

const arr=[10,15,20,25]
//other ways to declare the array
const champions=["avengers","marvel"]
const newArray=new Array(5,6,7,8,9)
console.log(arr[0])
console.log(newArray)

//some methods to perform operations on the array
//concat > meant to add two arrays here a new array is created

const arr1=[12,16,18,19,20]
const arr2=[25,28,29,31,22]
const arr3=arr1.concat(arr2)
console.log(arr3)
//another way is to use the spread operator
const arr4=[...arr1,...arr2] //example to remember is to dropping a glass of water from top and then the entire glass breaks 

console.log("*****",arr4)

//similarly use the push method to add the elements to an array
//pop removes the element from the last
newArray.push(12)
newArray.push(14)
newArray.push(16)
newArray.pop()
//unshift is a method that helps to add an element to the beginning of the array
newArray.unshift(6)
//shift is a method that helps to remove an element from the beginning of the array
newArray.shift() 
console.log(newArray)
//these methods need to give yes no statements
console.log(newArray.includes(9))

console.log(newArray.indexOf(14))
//here the type changes to that of string
console.log(typeof(newArray.join()))

//slice doesnt manipulate the original array whereas splice manipulates the original array
//in slice the last index is not included whereas in splice it is included
newarr1=newArray.slice(1,3)
console.log("A",newarr1)
//in splice the last index is also included
newarr2=console.log("B",newArray.splice(1,3))
console.log(newArray) //here in case of splice the original array also gets modified 

//if we have an array with other arrays inside it we can use the .flat() it flattens the entire array of arrays to a single array
const newarr5=[2,3,5,[6,7,8],[9,10,11],[1,5,8,9]]
console.log(newarr5.flat(Infinity))

//first check whether the given parameter passed is an array or not
console.log(Array.isArray("ronita"))

//next is to convert to array
console.log(Array.from("ronnn")) //so here it is converted to array

//we can convert some variables to a single array using .of()
const name1="hanna"
const name2="riya"
const name3="tina"

console.log(Array.of(name1,name2,name3))



