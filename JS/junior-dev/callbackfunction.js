//create afunction  that prints an alert for the current time 
//does not take any parameters
//prints alertconsole >current time stamp
//test the function by calling it 
function  printCurrentTime(){
    const currentTime=new Date();
   console.log(`The current time is ${currentTime}`)

}
printCurrentTime();
setInterval(printCurrentTime,3000)

/*
name function
anonymous function remove the function name
pass all function by reference <statement>
arrow fuction 
if you use use expression you wrong
pass  */
setInterval(function() {
     const currentTime=new Date();
   console.log(`The current time is ${currentTime}`);

}, 5000);