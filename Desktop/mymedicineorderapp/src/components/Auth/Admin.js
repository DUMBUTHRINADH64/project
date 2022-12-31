import { useState } from "react";
import { useHistory} from "react-router-dom";
const Admin = () => {

    const navigator = useHistory();
const [User,setUser]=useState(false);
const [Password,setPassword]=useState(false);
const changehandler=(event)=>{
    if(event.target.value==="thrinadh@gmail.com")
    setUser(true);
}
const changehandler2=(event)=>{
    if(event.target.value==="Rajeswarit")
    setPassword(true);
}
const submithandler=()=>{
    console.log('hi',User,Password)
    if(User && Password)
    return navigator.push('/adminlogin')
    else
    alert('invalid credentials');
}
  return (
    <div>
      <h1 class="text-center">Admin page</h1>
      <div class="text-center">
      <label class="mt-5 text-center">Username:</label>
      <input  class="text-center" type="text" onChange={changehandler}></input><br/>
      <label>Password:</label>&nbsp;
      <input type="password" onChange={changehandler2}></input><br/>&nbsp;&nbsp;&nbsp;
      <button onClick={submithandler} class="bg-success ">submit</button>
      </div>
    </div>
  );
};
export default Admin;
