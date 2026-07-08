//using while loop to generate for loop
let k=0
while (k<0) {
    console.log("k",k)
    k=k+1
    
}
for(letk=0;k<20;k=k+1){
    console.log("k",k)
}
//using  for loop 
// create a function @function1 <give it any name>.

// it does not take any parameters

// this function

// 1. prompts a user for the first number
//    check if number is a valid number greater than 1.

// 2. prompts a user for the second number
//    check if number is a valid number greater than 1.

// use recursion or a while loop to ensure
// user enters a correct number for number1 and number2.

// after the numbers are entered call @function2
// which takes the numbers as parameters.

// example ->
// @function2(number1, number2)


// create a function @function2 <give it any name>.

// this function takes in the following parameters:

// @param1 number greater than 1.
// @param2 number greater than 1.

// check if @param1 is a number greater than 1.
// check if @param2 is a number greater than 1.

// example:
// @function2(3,5)

// create a maths table for it up to
// i.e. console logs

// ------
// 3 * 5 =
// 3 * 4 =
// 3 * 3 =
// 3 * 2 =
// 3 * 1 =

// ------

// 2 * 5 =
// 2 * 4 =
// 2 * 3 =
// 2 * 2 =
// 2 * 1 =

// ------

// 1 * 5 =
// 1 * 4 =
// 1 * 3 =
// 1 * 2 =
// 1 * 1 =

function promptStudent(){
    let num1=null;
    let num2=null;
     while (true) {
        num1=prompt("Enter the first number");
        if(isNaN(num1)){
            continue;//restart the loop from beginning
        }
        num2=prompt("Enter the second number")
        if(isNaN(num2)){
            continue
        }
        num1=parseInt(num1);
        num2=parseInt(num2);
        if(num1<=0 ||num2<=0){
            continue;
        }
        break;
        
     }
     console.log("Got valid number", num1, num2);
     mathTable(num1,num2);
}
function mathTable(num1,num2){
    if(!num1||num1<0 ||!num2||num2<0){
        console.error("Ensure number1 or number2 are numbers greater than 0");
        return;
    }
    for (let i=num1;num1>=0;i++){
        for (j=num2;num2>=0;j--){
            console.log(`outerloop=${i}innerloop=${j}`);
            console.log(`${i}*${j}=${i*j}`);

        }
    }

}
