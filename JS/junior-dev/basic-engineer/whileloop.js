let n=0;
let condition=true;
while(condition){
    console.log("n is", n); //0,1,2,3// statement 1
    n=n+1;//tatement 1
    if (n>1000){
        condition=false;
    }
}
// create a function <any name >
//the function should take a parameter @param is a number greater than 0;
//have a loop inside that counts down from this number use while loop it should print n 
function countDown(N){
    while(N>0){
        console.log(N);
    N--;
    }

}
countDown(5);

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


// function mathTable(){
//     let number1;
//     let number2;
//     while(true){
//         number1=Number(prompt("Enter the  first number"))
//         if(!isNaN(number1)&& number1>1){
//             break;
//         }
//         console.log("invalid ,please enter a number bigger  than 1")
//     }
//     while(true){
//         number2=Number(prompt("Enter the  second  number"));
//         if(!isNaN(number2) && number2>1){
//             break;
//         }
//         console.log("invalid ,please enter a number bigger than 1")


//     }
//     numbers(number1,number2);
// }

// function numbers(number1,number2){
//     while (number1<=40) {
//         console.log(`${number1}*${number2} =${number1*number2}`)
//         number1++
        
//     }
// }
// mathTable();

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
     MathTable(num1,num2);
}
function mathTable(num1,num2){
    if(!num1||num1<0 ||!num2||num2<0){
        console.error("Ensure number1 or number2 are numbers greater than 0");
        return;
    }
    let outerLoop=num1;
    while (outerLoop>0) {
        let innerLoop=num2;
        while (innerLoop>0) {
            console.log(`outerloop=${outerLoop} innerloop=${innerLoop}`)
            console.log(`${outerLoop}*${innerLoop}=${outerLoop}*${innerLoop
            }`)
            innerLoop=outerLoop-1
            
        }
        outerLoop=innerLoop-1
        
    }

}