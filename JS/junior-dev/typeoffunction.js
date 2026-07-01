/*
1 name function:
2 Anonymous fuction <function without a name 
a function can be assigned to variable
a varibale can reference a function
 */
function areCircle(r) {
    return 3.14*r*r;//area of a circle
//named function
}
let age=23;
let samAge=age;//age=23
let ac =areCircle;
/*
what is the value of ac and what is it
hint <use typeoffff> */
console.log(ac);
// Procedure of creating Anonymous function
/*
create  a function  oof your choice use name function and test it
2 assign that function a variable and test it 
3 directly create equal your variavle to the test function defination and  test it 
4 remove the original  function and test
5 try calling the variable and try  calling the original function and make the observation 
6remove the fumction  name since it is useless
7 anonymous function < without a name>
 */





//step one
function calculateVAT(amount) {
  return amount * 0.16;
}

console.log(calculateVAT(1000));



/* step two
let vat = calculateVAT;
console.log(vat(1000));*/

/*step 3
let vat = function calculateVAT(amount) {
  return amount * 0.16;
};

console.log(vat(1000));*/


// step 4
/*
let vat = function calculateVAT(amount) {
  return amount * 0.16;
};

console.log(vat(1000))*/

 //step 6
 let vat = function(amount) { //annonymous fuction 
  return amount * 0.16;
};

console.log(vat(1000));











