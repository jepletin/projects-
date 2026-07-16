// 1. Create a button.

// 2. Attach a click event which shows an alert.

// 3. Attach a mouseover event which logs the current date to the console.
//    Log the current date:
//    console.log(new Date())

// 4. For each of the events, print the event:
//    console.log(event)

function clickMe(e){
    alert("the button was clicked ")
        console.log (e)


}
document.querySelector("#btn").addEventListener("click",clickMe)
 function mouseoverAlert(e){
    console.log(e)
    console.log("mouse over",new Date())
 }
 document.querySelector("#btn").addEventListener("mouseover", mouseoverAlert);

 /*
We can attach an event to the window <active tab>
for onmousemove and print out the coordinates of the mouse.

Have x and y coordinates being displayed on the screen
when someone moves the mouse.
*/
//  window.addEventListener("mousemove",(e)=>{
//     console.log("x direction",e.clientX)
//     console.log("y direction",e.clientY)

//  });

 window.addEventListener("mouseover",(e)=>{
   document.getElementById("x-b").innerText=e.clientX;
   document.getElementById("y-b").innerText=e.clienty;
 }
);