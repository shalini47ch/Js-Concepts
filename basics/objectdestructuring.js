const courseDetails={
    name1:"Learning JS",
    price:999,
    courseInstructor:"abcd"
}

//here in order to extract the name,price ,courseInstructor separately we can use object destructuring

const {name1,price}=courseDetails

console.log(name1)
console.log(price)