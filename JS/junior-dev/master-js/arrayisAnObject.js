
/*
Look at the differences
between an array and an object.

-> In an array, keys are sequential (numbers).
*/

/*
Create an object that behaves like an array.

1. Create an array (give it any name).
   Inside the array have two digits.

   0: <any digit>
   1: <any digit>

2. Create an object (any name).
   Inside the object have keys.

   0: <any digit>
   1: <any digit>

   For the object, create the length key.
   Have it as the size of the object (number of elements).

3. console.table() both.
   You should see they are the same.
*/



const arr=[20,50];
const arrObject={
    0:30,
    1:50,
    push:function(newItem){
        const key=this.length
        this[key]=newItem;
        this.length=arrObject.length +1


    },
    pop: function(){
        arrObject.length=arrObject.length -1
        delete arrObject[arrObject.length]
    },

    length:2
}
console.table(arr)
console.table(arrObject)