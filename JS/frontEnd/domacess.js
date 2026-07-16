
/*
DOM Access using

1. querySelector
2. documentGet<...>

1. getElementById:
   - create a variable assign to the DOM element with id <div1>
   - console.log this element, view in your browser
   - in browser console you should be able hover over the element

2. getElementByClass
   - create a variable assign to the DOM element with class <list-item>
   - console.log this element, view in your browser
   - in browser console you should be able hover over the element

3. querySelector
   1. for the id: hint use # for id
      - create a variable assign to the DOM element with id <div1>
      - console.log this element, view in your browser
      - in browser console you should be able hover over the element

   2. use querySelector for the class: hint use <.>
      - create a variable assign to the DOM element with class <list-item>
      - console.log this element, view in your browser
      - in browser console you should be able hover over the element
      - Note you only get the first list item.

   3. use querySelectorAll for the class: hint use <.>
      - create a variable assign to the DOM element with class <list-item>
      - console.log this element, view in your browser
      - in browser console you should be able hover over the element
      - Note you get the array.
      - use for loop or while to go through the array elements
        and print each element.
*/


/*
Update dom elements.
-innerHtml <replaces the html>
-innerText <replaces the innerText>

1.buttons.
    1.original Content
    2.updating Content
    3.update the innerText
*/

const otherFruits = ["Kiwi", "Pinapple", "Dragon Fruit"];
const originalDiv = document.querySelector("#div1").innerHTML;

// console.log(originalDiv);

function original() {
    console.log("original clicked");
    //reset the div to its original value
    document.querySelector("#div1").innerHTML = originalDiv;
    //replace the original content
}

function replace() {
    // console.log("replace clicked");
    const newHtml = `
        <h3>List Chores</h3>
        <ul>
            <li class="list-item">Clean Bathroom</li>
            <li class="list-item">Clean Kitchen</li>
            <li class="list-item">Fetch Water</li>
        </ul>
    `;
    document.querySelector("#div1").innerHTML = newHtml;
    //some html
}

function updateFruits() {
    console.log("update fruites clicked");

    //innerText, for loop or while loop.
    //querySelectorAll. Only replace the fruits using innerText
    //innnerText and loop<fruits>
const fruits = document.querySelectorAll("#div1 .list-item");

    for (let i = 0; i < fruits.length; i++) {
        fruits[i].innerText = otherFruits[i];
    }
}
