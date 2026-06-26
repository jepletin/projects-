/*promt("")  
checking if is a number 
1.is NaN
2 number..> 3.+<>*/

//the grosssallry 
let grossMonthlySalary=null;
while(true){
    let gross=prompt("Enter your gross sallary");
    if (!isNaN (gross)){
        gross=Number (gross);
        if(gross>0){
            grossMonthlySalary=gross;
            break;
        }

    }
    alert(`invalid amount entered .
        Ensure you enter a number  greater than 0`);
}
console.log(`
    Gross salary is ${grossMonthlySalary} its type ${typeof grossMonthlySalary},`);

//nssf
let nssf=0;
if(grossMonthlySalary<=9000){
    nssf=grossMonthlySalary*0.06;


}else if (grossMonthlySalary<=108000){
    let rem =grossMonthlySalary-9000;
    let tier1 =9000*0.06;
    let tier2= rem*0.06
    nssf=tier1+tier2
}else{
    nssf=6840;
}
console.log(`nssf=${nssf} it type  is a ${typeof nssf}`);
//NSSF isn't taxed, so it's subtracted before the tax bands are applied.

let taxableIncome = grossMonthlySalary - nssf;

//payee pay as you earn
let payee = 0;
if (taxableIncome <= 24000) {
    payee = taxableIncome * 0.10;
} else if (taxableIncome <= 32333) {
    payee = (24000 * 0.10) + (taxableIncome - 24000) * 0.25;
} else if (taxableIncome<= 500000) {
    payee = (24000 * 0.10) + (8333 * 0.25) + (taxableIncome - 32333) * 0.30;
} else if (taxableIncome<= 800000) {
    payee = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (taxableIncome - 500000) * 0.325;
} else {
    payee = (24000 * 0.10) + (8333 * 0.25) + (467667 * 0.30) + (300000 * 0.325) + (taxableIncome- 800000) * 0.35;
}
console.log(`payee is ${payee}`)
//shif (2.75% of gross)

let shif = grossMonthlySalary * 0.0275;
console.log(`SHIF = ${shif}`);
 
// Housing Levy (1.5% of gross)
let housingLevy = grossMonthlySalary * 0.015;
console.log(`Housing Levy = ${housingLevy}`);
 //personalrelief of 2400 we deducate with the payee to get the final payee
 const personalRelief=2400;
 let finalPayee=payee-personalRelief;
 if (finalPayee< 0)finalPayee= 0;
console.log(`Final PAYE (after relief): KES ${finalPayee}`);
//totaldeducation
let totalDeducation=finalPayee+nssf+shif+housingLevy
 console.log(`The total decucation ${totalDeducation}`)
 //netpay what remain after the goverments takes what is theirs 
let netPayee = grossMonthlySalary - nssf - shif-finalPayee;
console.log(`My netPayee is = ${netPayee}`);

