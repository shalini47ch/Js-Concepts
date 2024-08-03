//here we will learn in depth about objects
//when declaring using constructor then singleton whereas when declaring using literals then no singleton is formed

//object literals
const JsUser={
    name:"hann",
    age:24,
    email:"hann@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//there are two ways to access the objects one is by using the dot and the other is by using the brackets
console.log(JsUser.name) //way1
console.log(JsUser["email"]) //way2
