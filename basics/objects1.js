
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

//agar do tin objects hai to unko aapas mei combine karne ke liye Object.assign use karsakte hai

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)