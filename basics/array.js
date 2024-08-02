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

