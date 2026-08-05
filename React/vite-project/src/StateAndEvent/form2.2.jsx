import { useState } from "react";
function Form(){
    const [input,setInput]=useState({name:"",email:"",password:"",})
       
    const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("Name is",input.name)
    console.log("email is",input.email)
    console.log("password is ",input.password)
  };
    return(
       <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input onChange={(e)=>setInput({
            ...input,
            name:e.target.value
          })} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input onChange={(e)=>setInput({
            ...input,
            email:e.target.value
          })} />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            onChange={(e)=> setInput({
                ...input,
                password:e.target.value
            })}
          />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>
      <main>
        {/*displaying  data  */}
        <ul>
          <li>Name:{input.name}</li>
          <li>Email:{input.email}</li>
          <li>Password:{input.password}</li>
        </ul>
      </main>
    </div>
  );
    

}
export default Form;