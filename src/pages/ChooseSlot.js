import React, { useState } from "react";


function ChooseSlot(props)
{
   
    var i=0;
    const [team,setTeam]=useState("");  
    const [slots_left,set_Slots_Left]=useState([8,4,12,9]);
    const [start,setStart]=useState("");
    const [end,setEnd]=useState("");

    let arr= props.arr;

function clicked()
    {
        var slot_team= start+" to "+end+" || "+team; 
        arr.push(slot_team);
        console.log(arr);
    }


function setTeamFunction(e)
    {
        setTeam(e.target.value);
        console.log(team);
    }
    
    function optionSelected(e)
    {
        var str=e.target.value;
        if(str.charAt(0)=='M') 
        {
            var copy=[...slots_left];
                copy[0]=copy[0]-1;
                // console.log(copy[0]-1)
                set_Slots_Left(copy);
                console.log(slots_left);
                // teamtaken=team;
                setStart("10:00 am");
                setEnd("12:00 noon");
        }
        else if(str.charAt(0)=='W')  
        {
            var copy=[...slots_left];
                copy[1]=copy[1]-1;
                // console.log(copy[0]-1)
                set_Slots_Left(copy);
                console.log(slots_left);
                // start="4:00 pm";
                // end="5:00 pm";
                setStart("4:00 pm");
                setEnd("5:00 pm");
        }
        else if(str.charAt(0)=='T') 
        {
            var copy=[...slots_left];
                copy[2]=copy[2]-1;
                set_Slots_Left(copy);
                console.log(slots_left);
                setStart("8:30 am");
                setEnd("11:30 am");
        }
        else if(str.charAt(0)=='F')  
        {
            var copy=[...slots_left];
                copy[3]=copy[3]-1;
                // console.log(copy[0]-1)
                set_Slots_Left(copy);
                console.log(slots_left);
                setStart("5:00 pm");
                setEnd("7:00 pm");
        }
    }

    return(
        <>
    <center>
    <h1> Choose From The Given Slots </h1>
    <table style={{margin:"15px", border:"solid black 5px"}}>
        <tr >
            <th > Day </th>
            <th > Slot </th>
            <th > Time </th>
        </tr>
        <tbody >
            <tr>
                <td>Monday</td>
                <td>Slot 1</td>
                <td>10:00 am - 12:00 noon</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>Slot 2</td>
                <td>4:00 pm - 5:00 pm</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>Slot 3</td>
                <td>8:30 am - 11:30 am</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>Slot 4</td>
                <td>5:00 pm - 7:00 pm</td>
            </tr>
        </tbody>
    </table>
    <br></br>
    <br>
    </br>
    <label >Choose a Slot : </label>
    <br></br>
    <br></br>


    <select onChange={optionSelected}>
        {
            props.slots.filter((slot)=>(slot.slotleft!== 0 ))
            .map((slot)=>(
                <option key={slot.id}>{slot.day} {slot.start} to {slot.end} - slots left {slots_left[i++]  }</option>
                //          
            ))
        }
    </select>
    <br></br><br></br>
    <label>Enter the team number/name : </label>
    <input  type="text" onChange={setTeamFunction}/> 
    <br></br><br></br>
    <button onClick={clicked}>Book Slot</button>
{/* //onClick={slotLess} */}
    </center>
    </>
);
}
export default {ChooseSlot};
