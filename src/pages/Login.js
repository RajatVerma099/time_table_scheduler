import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ChooseSlot from "./ChooseSlot";
{/* <h1>hi</h1> */}



function Login(){

    const navigation = useNavigate();
//   alert(navigation);
  console.log(navigation);
    const handleClick = () => {
        navigation('/ChooseSlot');
        // navigation(0);
    }
    const [idd,setIdd]=useState("");
    const [pass,setPass]=useState("");
    
    function validate()
    {
        if(idd===id && pass===password)    
        {
            console.log("yes");
            handleClick();
        }
    
    }   
        console.log(idd);
        console.log(pass);
    var id="2022178020";
    var password="12345678"
    return(
        <>
        <center>
            <h1>
                Login Page For Students
            </h1>
            <div style={{padding:"10px", margin:"20pt", border:"solid black 3px"}}>
                <label style={{margin:"10px"}} > enter your roll no.  :</label>
                <input id="rollno" onChange={(e)=>setIdd(e.target.value)}/>
                <br></br>
                <br></br>
                <label style={{margin:"10px"}} > enter your password.  :</label>
                <input id="password" onChange={(e)=>setPass(e.target.value)}></input>
                <br>
                </br>
                <br>
                </br>
                <button onClick={validate}> Submit</button>



            </div>
        </center>
        
        </>
        
        )
        
}



export default Login;