function calculateCartPrice(val1,val2,...num1){
    return num1
}
//putting ...num1 is the rest operator mainly used for handling extra parameters
console.log(calculateCartPrice(200,400,600,800,900))

const user={
    userName:"amina",
    prices:900
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.prices}`)
}

handleObject(user)