/*....>console log the purpose of it is for debugging  by print out information  in the screen 
consol.log ensure you write your consoles in such a way that they help you figure out the issues   
...> simpe exercise from gross salary 
let calculate the next salary */

const salaryGross =100000;
console.log( "Gross salary is ", salaryGross);
const paye =salaryGross*0.16;
console.log( "For Gross salary of ","sallarGross","paye is",paye);
const nhif=2500;
console.log("Nhif deduction", nhif);
const sha = 2500;
console.log("SHA is ", sha);
const totalDeduction=paye+nhif+sha;
console.log( "Total deduction are ", totalDeduction);
const netsallary= salaryGross-totalDeduction;
console.log( "Your net salary",netsallary);
