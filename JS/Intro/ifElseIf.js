/*     if and else if .>chain    
..>we exit if and else if when we reach the first  */
let age=prompt("Enter your age:")
console.log(`age is  ${age} type of ${typeof age}`)
alert(`you entered ${age}`)


if (age>10){
    alert(`you are a baby`);
}else if (age>13){
    alert(`you are a teen`);
}else if (age>18){
    alert(`you can legally drink and smoke `);
}else if (age>27){
    alert(`Best age for marriage`);
}
else if (age>45){
    alert(`Best age for retirement`);
}else if (age>50){

    alert(`you are an ansestor`);
}


if (age<10){
    alert(`you are a baby`);
}else if (age<13){
    alert(`you are a teen`);
}else if (age<18){
    alert(`you can legally drink and smoke `);
}else if (age>27){
    alert(`Best age for marriage`);
}
else if (age>45){
    alert(`Best age for retirement`);
}else if (age>50){

    alert(`you are an ansestor`);
}





if (age>10&& age<13){
    alert(`you are a baby`);
}

//45>13
if (age>13&&age<18){
    alert(`you are a teen`);
}
if (age>18&&age<27){
    alert(`you can legally drink and smoke `);
}
//45>17
if (age>27&&age<45){
    alert(`Best age for marriage`);
}


if (age>45&&age<50){
    alert(`Best age for retirement`)
}

if (age>50){
    alert(`you are an ansestor`)
}




