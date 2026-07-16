document.getElementById("form1").addEventListener("submit",submitForms)
function submitForms(e){
    e.preventDefault();//stop the forms from making an auto submissions
const inputList=document.querySelector("#form1").querySelectorAll("input");
const input1=inputList[0];
const input2=inputList[1];
console.log("input 1",input1.value);
console.log("input 2",input2.value);

console.log("f1 input" ,document.getElementById("inputform1").value);
console.log("f2 input" ,document.getElementById("inputform2").value);
console.log("f3 input" ,document.getElementById("inputform3").value);



}



