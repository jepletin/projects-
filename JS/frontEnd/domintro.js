// const div1 = document.getElementById("div1");
// console.log(div1);

// // p

// const listItems = document.getElementsByClassName("list-item");

// // listItems: Array

// console.log(listItems);


/*
4. querySelectorAll: You get the whole array of elements
5. use a for loop to go through the array of elements.
*/

const MyDiv = document.getElementById("div1");
const div = document.querySelector("#div1");

console.log(MyDiv);
console.log(div);

const listOfItems = document.getElementsByClassName("fruits");
const queryListOfItems = document.querySelector(".fruits");
const queryListOfAllItems = document.querySelectorAll(".fruits");

console.log(listOfItems);
console.log(queryListOfItems);
console.log(queryListOfAllItems);

for (let i = 0; i < queryListOfAllItems.length; i++) {
    console.log(queryListOfAllItems[i]);
}
