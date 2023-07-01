import Login from './Login';
import React from "react";
import { useNavigate } from 'react-router-dom';
function OptionPage(){

    const navigate = useNavigate();
    const handleClick = () => navigate('Login');
    const handleClick2 = () => navigate('Faculty');


return(
<>
<center>
    <h1> Time Table Scheduler</h1>
    <br></br>
    <label>
        Are you a faculty or a student ?
    </label>
    <br></br><br></br>
    {/* <button style={{margin:"10pt", padding:"5pt"}} onClick={()=>handleClick()}>Student</button>
    <button style={{margin:"10pt", padding:"5pt"}} onClick={()=>handleClick2()} >Faculty</button> */}
</center>

</>
)
}

export default OptionPage;