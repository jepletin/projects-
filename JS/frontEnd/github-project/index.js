let m = "some string";

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "GET",
  redirect: "follow"
})
  .then((response) => response.json())
  .then((result) => {
    displayPosts(result);
    m = "post worked";
  })
  .catch((error) => console.error(error));
//js is not waitng  for the f 
//     }catch(e){
//         console.log("error handling")
//         console.log(e)

//     }// allow you to handle errors by yourselfs
//     finally{
//         //doesnt care if an error happens or not 
//         console.log("finally this -->")
//     }
//   }

function sum(a,b){
    if(typeof a !== "number"){
        throw`for the sum function it must be a @param1 number ${typeof a} `
    }//the suppose of throw is that the user who is going to user you work must provide a number or must use it correctly to get the results 
    if(typeof b !== "number"){
        throw`for the sum function it must be a @param2 number ${typeof b} `

    }
    let ans=a+b;
    return ans
}

  async function fetchpost(){
    try{
    let results= await fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "GET",
        redirect:"follow", 
    });
    const posts=await results.json();
    console.log(posts)
    displayPosts(posts)

    }catch(e){
        console.log("error handling")
        console.log(e)

    }
}
console.log (fetchpost());



// @param1 => an array
function displayPosts(posts) {
  let htmlPosts = "";

  for (let i = 0; i < posts.length; i++) {
    const singlePost = posts[i];
    console.log(singlePost);

    htmlPosts =
      htmlPosts +
      `
      <li>
        <h1>${singlePost.title}</h1>
        <p>
          ${singlePost.body}
        </p>
      </li>
      `;
  }

  displayHtmlPosts(htmlPosts);
}

// @param1 => string of our HTML elements
function displayHtmlPosts(htmlPosts) {
  const postsContainer = document.querySelector("#posts");
  postsContainer.innerHTML = htmlPosts;
}

    /*
code without a promise.
1. create a variable <any name> global variable
2. console.log the value of the variable.
3. create and call a function that modifies this variable
4. console.log() the value of the variable
*/

// let flow = "This flow";
// console.log("36:", flow);

// function testfunc() {
//     flow = "updated flow";
// }

// testfunc();

// console.log("41:", flow);