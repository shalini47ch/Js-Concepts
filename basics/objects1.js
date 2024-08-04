
const regularUser={
    email:"user@gmail.com",
    fullname:{
        userfullname:{
            firstname:"romi",
            lastname:"tiwari"
        }
    }
}
//here we have created objects of objects
console.log(regularUser.fullname?.userfullname?.firstname)

//this is use to combine two three objects together

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3) this is used less 

//the most commomly used are the spread operators
const obj3={...obj1,...obj2}
console.log(obj3)

const newuser={
    name:"abc",
    age:12,
    gender:"F"
}

console.log(Object.keys(newuser)) //here the keys will be returned in the form of arrays
console.log(Object.values(newuser)) //here it will return the values of the user
//we can also use Object.entries here it will return an array of array
console.log(Object.entries(newuser))