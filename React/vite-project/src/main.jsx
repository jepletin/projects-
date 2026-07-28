import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'




function MyComponent(){
  return null;
}


function MyComponent2(){
  return(
    <div>
      <h1>React is a framework for building UI</h1>
    </div>
  );
}
function MyComponent3(){
  return(
    <>
    <div>
      <h2>Props</h2>
      <p>props are used to pass parent element to child elment</p>
    </div>
    <div>
      <h3>React Components Rules</h3>
      <p>component in react must start with a capital letters</p>
      <p>react component must return valid jsx or null</p>
      <p>if it return  vlaid jsx .it can only return react fragemnet ot single html elemnt </p>

    </div>
    </>
  );
}
function RenderFragement(){
  return(
    <>
    <div>
      <h4>Render Fragement</h4>
    </div>
    </>
  )
}

function ParentComponent(){
  return(
    <div>
      <h1>My first React App </h1>
      <MyComponent>
      </MyComponent>
      <MyComponent2>
      </MyComponent2>
      <MyComponent3/>
      <RenderFragement></RenderFragement>

    </div>
  );
}





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>My first React App </h1>
    <MyComponent></MyComponent>
    <MyComponent2></MyComponent2>
    <MyComponent3></MyComponent3>
    <RenderFragement/>
    <ParentComponent></ParentComponent>
   

  </StrictMode>,
);
