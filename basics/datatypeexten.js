/*
Here lets first decide where we use the stack memory and where we use a heap memory
Primitive Datatypes(Number,bigint,string,boolean,null,undefined,symbol)
Non primitive datatypes(Objects,Arrays,Functions)

Stack(Primitive Datatypes)
Heap(Non primitive Datatypes)
In stack a copy is created
whereas in case of heap a reference is created so the original value is changed when stored in heap
*/

let channel="learn coding"
let newchannel=channel 
newchannel="new youtube channel"
console.log(channel)//here the original channel value will be printed
console.log(newchannel) //here the output will be new youtube channel as it is stored in stack and the copy of channel is used here

//now lets use for non primitive datatypes(so here it is object non primitive so here reference is stored in memory)
let userOne={
    email:"tina@gmail.com",
    upi:"tn@bl"
}
userTwo=userOne 
userTwo.email="abc@gmail.com"
console.log(userOne.email) //here the original one also gets updated and the value is abc@gmail.com
console.log(userTwo.email)