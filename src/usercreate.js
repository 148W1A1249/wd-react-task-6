import { useContext,useState } from "react";
import UserContext from "./usercontext";
import {useHistory} from "react-router-dom";

function UserCreate(){

    let userData = useContext(UserContext);
    let history = useHistory();

    let [firstName,setfname] = useState("");
    let [LastName,setlname] = useState("");
    let [email,setemail] = useState("");
    let [password,setpass] = useState("");

    let userSubmit = async (e)=>{
       e.preventDefault();      
       userData.setUserList([...userData.userList,{
           firstName,
           LastName,
           email,
           password
       }])
      await fetch("https://607432b1066e7e0017e794b3.mockapi.io/product",{
           method:"POST",
           body: JSON.stringify({
            firstName,
            LastName,
            email,
            password
           }),
           headers:{
               "Content-type" : "application/json",
           }
       })
       history.push("/users");
    }
    return<>
        <div className="container">
            <h1>User Form</h1>
            <form onSubmit={userSubmit}>
                <div className="form-group">
                    <label for="fname">First Name</label>
                    <input type="text" className="form-control" id="fname" value={firstName} onChange={(e)=>setfname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="lname">Last Name</label>
                    <input type="text" className="form-control" id="lname" value={LastName} onChange={(e)=>setlname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="email">Email address</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="pass">Password</label>
                    <input type="password" className="form-control" id="pass" value={password} onChange={(e)=>setpass(e.target.value)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    </>;
}

export default UserCreate;