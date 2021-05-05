import { useEffect, useState } from "react";
import {useHistory} from "react-router-dom";

function UserEdit(props){
    let [user,setSingleUserData] = useState([]);
    let history = useHistory();
    let [firstName,setfname] = useState("");
    let [LastName,setlname] = useState("");
    let [email,setemail] = useState("");
    let [password,setpass] = useState("");    
    useEffect(async ()=>{
        let output = await fetch(`https://607432b1066e7e0017e794b3.mockapi.io/product/${props.match.params.id}`)
        let userData = await output.json();  
        setSingleUserData(userData);   
        setfname(user.firstName);   
        setlname(user.LastName);   
        setemail(user.email);   
        setpass(user.password);   
    })    
    
    let usereditSubmit = async (e)=>{
        e.preventDefault();  
        console.log({firstName,LastName,email,password})
        await fetch(`https://607432b1066e7e0017e794b3.mockapi.io/product/${props.match.params.id}`,{
           method:"PUT",
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
    <h1>User Edit</h1>
        <form onSubmit={usereditSubmit}>
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
            <button type="submit" className="btn btn-primary m-2">Submit</button>
            <button type="submit" className="btn btn-primary">Delete</button>
        </form>
    </>;
}

export default UserEdit;