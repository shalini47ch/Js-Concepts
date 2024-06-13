const accountId = 123456;
let accountEmail = "abc@gmail.com";
var accountPassword = "1234";
accountCity = "Hyderabad";

accountEmail = "dfe@gmail.com";
accountPassword = "456";
accountCity = "Bengaluru"; //this is not a good way to declare
let accountState; //now here if you declare a variable but you dont assign a value then you get undefined as the output

// accountId=123
//here reassigning to const is not allowed

/*
Prefer not to use var in your code instead of let due to block and functional scope issue

let can be reassigned but cant be declared again(block scope)
const can't be reassigned and cant be declared again(block scope)
var can be reassigned and can be declared again(global scope)

*/

console.log(accountId);
//console.table helps to to print our elements in the form of a table
console.table([accountEmail, accountPassword, accountCity, accountState]);
