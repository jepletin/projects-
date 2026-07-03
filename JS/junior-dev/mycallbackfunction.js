/*
1 our own callback functions 
doing shapes 
....>shapes
circle
triangle 
rectangle
for each of the shape create functions<arrowor anonymous,name>
to calculate the area 
ensure the function takes the required parameters 
test the function 

2  2. we are create a super function called shape.
   its going to take the following params
   @param1=>function <correct shape> required
   @param2=>shape name<string>
   @param3=>s1 <required>
   @param4=>s2<optional>
   @param5=>s3<optional>

   1.inside your function shape.
   console each of the parameters and theier types.

   2.for each of your function ie for areaCircle,
   areRectangle, and areaTriangle
   call the shape function and pass the required params.
   example for areaCircle
   -shape(areaCircle,"Circle",10) -> for areCircle. test make observation
   -shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation

   3.inside your shape function.create a result variable
   equate it to the funciton call of @param1 and pass @param3,@param4,@param5
   example
   result=@param1(param3,param4,param5)

   4.Console.log the shop name and the result
   console.log(for shape ${@param2} area is ${result})
   for each shape call it like step 2 and see the result.
   -shape(areaCircle,"Circle",10) -> for areCircle. test make observation
   -shape(areaRectangle,"Rectangle",10,5) -> for areCircle. test make observation
*/
// circle
function areCircle(r){
return 3.14*r*r;
}
 console.log (areCircle(12));
 //triangle
function areTriangle(base, height){
return 0.5*base*height;
}
console.log(areTriangle(10,26));


//area of a rectangle
function areRectangle(length, width){
return length*width;
}
console.log(areRectangle(8,5));

function shape( shapeFunction,shapeName,side1,side2,side3){
    console.log(`shapefunction${shapeFunction} its type ${typeof shapeFunction}`);
    console.log(`shapename${shapeName} its type ${typeof shapeName}`);
    console.log(`side1${side1} its type ${typeof side1}`);
    console.log(`side2${side2} its type ${typeof side2}`);
    console.log(`side3${side3} its type ${typeof side3}`);
    const results=shapeFunction(side1,side2,side3)
    console.log(` for shape${shapeName} area is ${results}` );
    return results;   
}
shape(areCircle,"circle", 12)


   








/*
const areaRectangle = function(length, width) {
  return length * width;
};

console.log(areaRectangle(8, 5));
*/

/*
const areaRectangle = (length, width) => length* width 
const areaTriangle=(base,height)=>0.5*base*height
const areaCircle( radius)=>3.14 *radius*radius */