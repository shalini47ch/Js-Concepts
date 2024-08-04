//here we will learn in depth about objects
//when declaring using constructor then singleton whereas when declaring using literals then no singleton is formed

//object literals
const newsym=Symbol("key1") //so for using sumbols in objects we will put the key in square brackets
const JsUser={
    name:"hann",
    [newsym]:"mykey1",
    age:24,
    email:"hann@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
//there are two ways to access the objects one is by using the dot and the other is by using the brackets
// console.log(JsUser.name) //way1
// console.log(JsUser["email"]) //way2
// console.log(JsUser[newsym])
JsUser.email="hanna@hotmail.com"
//now assume that we want to lock these values so we will use the object.freeze
// Object.freeze(JsUser)
//now again trying to update but here it wont update as we have used Object.freeze
JsUser.email="hann@microsoft.com"
// console.log(JsUser)

//now adding a greeting
JsUser.greeting=function(){
    console.log("Hello welcome to my new user app")
}
JsUser.greeting()

