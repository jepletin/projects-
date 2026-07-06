 

// //  A recursive function is a function thst cslls itself
// // since this creates an endless loop you need  to find a way  to terminate .That is using return statement  and
// //  if <condition>
// // remove the alert 
// // intial promot should be enter your gross salary 
// // any promot after that should be  invalid gross salary  entered .eneter a number  for gross salary .try again 


 function salaryGrossPromptProcess(){
    let gross=prompt("Enter your gross salary");
    if (isNaN (gross) ===false){
        console.log (`You entered this amount  ${gross} exiting`);
        return;
    }
    // alert(`Invalid gross salary entered .enter a number for gross salary. try again,`);
    salaryGrossPromptProcess();
 }
 salaryGrossPromptProcess();


function salaryGrossPromptProcess(){
    let gross=prompt("Enter your gross salary");
    if (!isNaN (gross) && gross !== ""){
        console.log (`You entered this amount  ${gross} exiting`);
        return;
    }
    console.log("Invalid gross salary entered. Enter a number for gross salary. Try again.");

    salaryGrossPromptProcess();

    

    }
     salaryGrossPromptProcess();




 function factorial(n){
    if(n===1){
        return 1;
    }
    return n*factorial (n-1);

 }
 console.log(factorial(5))
    
 function sum (number){
    if(number===0){
        return 1
    }
    return number+sum(number-1)
        
 }
 console.log(sum(4))


 function recursion (x){
    if (x>0){
        console.log(x)
        recursion(x-1)
    }
 }
 recursion(10)

  function factorial (n){
    if (n===0){
        return 1;

    }
       return n* factorial(n-1)
    
 }
 factorial(5)