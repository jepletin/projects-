
/*function allows you to write reusable bits of code  
instead of writing code againa and again you write it once and call it whenever you want to 
To use dry (do not repeat your self ) by using code block

/{/code block/}
syntax:
function this tell javascript you are creating a function {
function name (variables name convection) (parameter -empty box)
(inside the parameter we have an argument  arguments are item you put on the box )
/code block/
}

//big rule import rule
a function executes only when called
calling a function is telling the function to do its work 
*/




/*create a simple function that when  you call it alerts you on the current time */


function timeAlert(){
    const date=new Date();
    alert(
        `time stamp:${date.toLocaleDateString("en-KE",{
        timeZone:"Africa/Nairobi",}

    )}`);

}
/*call a function use the function name then () brackets*/
timeAlert();//calling a function


/*area of a triangle
0.5*base*height*/
function areaOfTriangle(base,height){
    console.log(`base,height  is  ${base}  its type ${typeof base }`);
    console.log(`height  is  ${height}  its type ${typeof height}`);
    const area=0.5*base*height
    console.log(
        `for triangle with base ${base} and height ${height} area is ${area}`,
    );
    
}



let base1=50;
let height1=60;
    
let base2="hello";
let  height2=true;

// senario 1 
/*call the areaoftriangle function  dont pass any argument .<>*/
areaOfTriangle();
//senario2
/*call the function pass base of 20 and no width  areaoftriangle (20) */ //output
areaOfTriangle(20);
//senario3
/*  call the function pass base of 20 and height of 30  areaoftriangle(20,30)*/
areaOfTriangle(20,30);
//senario 4
/* create a variable base =50 and variable height =60 areaoftriangle (base1,height1) */
areaOfTriangle(base1,height1);
//senario5
/* create a variable base2="hello" and variable height2=true areaoftriangle (base1,height1) */
areaOfTriangle(base2,height2);
