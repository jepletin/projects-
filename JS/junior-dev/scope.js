//procedures
/*
declare variable name  in the global scope;
2 create function call sayMyName
console.log(name and the line  number)
-remember to call the function 
3 declare variable  name  inside  the function at the start
assig it a differene name print out the name and the line 
4  create if statement  inside the function pass a truthy condition of your choice 
inside the block console name and the line  number 
5 inside the first if statement at the start  declare varible name and give it a different  new name 
console log the name and the line number 
6 inside the function after the if statment  block console,log name and the line 
7 tyr declaring the same varible name in the same scope 

*/

let name="Lydia";// global scope
function sayMyName(){
    let name="Bett";
    console.log(`name ${name} line is ${21}`);
    if(true){
        let name="Maureen";
        console.log(`name ${name} line is ${24}`);

    }
    console.log(`name ${name } line is ${27}`)

}
sayMyName();