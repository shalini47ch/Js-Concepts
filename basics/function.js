/*while declaring the elements you pass are called parameters 
and while calling the function these are called as arguments

*/

function addTwoNumber(number1,number2){
    //later we will update to check we are only providing the numbers here
    // console.log(number1+number2)
    return (number1+number2)

}
const result=addTwoNumber(12,12) //we can call the function and store it in the result
console.log("Result",result)
//if you dont assign it in a variable then nothing will be printed

function loginUserMessage(username){
    return `${username} is successfully LoggedIn`
}

const res=loginUserMessage("amina")
console.log(res)
