/* Equality
Strict Inequality !== */
let num1="23"
let numb2=23
//string===number => it will return a false boolean
//numb1==num2 ->type conversion
let strictEqual= num1===numb2
console.log(`numb1=${num1}===nub2=$=${numb2} Ans &{strictEqual} is type is ${typeof strictEqual}`)
let nonStrictEquality=num1==numb2
console.log(`num1=${num1}==numb2=${numb2} Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}`)

let val1="hello"
let val2="How are you"
//different types should be equal to return a true boolean
//string is not defined as an equal number -> true
let strictInequality=val1!==val2
console.log(`val1=${val1}!==val2=${val2}
    Ans ${strictInequality} its type is ${typeof strictInequality}`)
//"30" not equal to 30 -> false
let inequality=val1!=val2
console.log(`val1=${val1}!=val2=${val2}
    Ans ${inequality} its type is ${typeof inequality}`)


/* > gteater than a>b
<Less than a<b
greater than or equal to
<= Less than or equal to */
let numb3=20;
let numb4=10

let str1="a"
let str2="b"

console.log(`numb3=${numb3}and numb4=${numb4}`)
console.log(`str1={str1}amd str2=${str2}`)
console.log(`numb3>numb4 ${numb3>numb4}`)
console.log(`str2>str1 ${str1>str2}`)
console.log(`numb3>=numb4 ${numb3>=numb4}`)
console.log(`str2>=str1 ${str1>=str2}` )
console.log(`numb3<numb4 ${numb4>numb3}`)
console.log(`str2<str1 ${str1<str2}`)
console.log(`numb3<=numb4 ${numb3<=numb4}`)
console.log(`str2<=str1 ${str1=str2}`)