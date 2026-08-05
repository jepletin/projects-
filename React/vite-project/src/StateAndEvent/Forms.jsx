/*
How to handle form input and events
*/
import { useState } from "react";
function Form() {
  // event when name changes





  const[name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password, setPassword]=useState("")
  const nameOnChange = (e) => {
    //console.log("NAME IS", e.target.value);
    setName(e.target.value)
  };

  //
  // const emailOnChange = (e) => {
  //   //console.log("Email IS", e.target.value);
  //   setEmail(e.target.value)
  // };

  // //
  // const passwordOnChange = (e) => {
  //   console.log("Password is", e.target.value);
  // };

  //
  const onSubmit = () => {
    console.log("Submit button clicked");
    console.log("Name is",name)
    console.log("email is",email)
    console.log("password is ",password)
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input value="Lydia jepleting "onChange={nameOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input onChange={(e)=>setEmail(e.target.value)} />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input
            type="password"
            onChange={(e)=> setPassword(e.target.value)}
          />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>
      <main>
        {/*displaying  data  */}
        <ul>
          <li>Name:{name}</li>
          <li>Email:{email}</li>
          <li>Password:{password}</li>
        </ul>
      </main>
    </div>
  );
}

export default Form;