import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import './App.css';
// import OptionPage from "./pages/OptionPage";
import Login from './pages/Login';
import ChooseSlot from './pages/ChooseSlot';
import Faculty from './pages/Faculty';
import { createContext } from 'react';
export const SlotContext =createContext(null);




function App() 
  {
    var arr=[];
  const slots=[
    {
        id:"d1",
        day:"Monday",
        start:"10:00 am",
        end:"12:00 noon",
        slotleft:4
    },
    {
        id:"d2",
        day:"Wednesday",
        start:"4:00 pm",
        end:"5:00 pm",
        slotleft:4
    },
    {
        id:"d3",
        day:"Thursday",
        start:"8:30 am",
        end:"11:30 am",
        slotleft:4
    },
    {
        id:"d4",
        day:"Friday",
        start:"5:00 pm",
        end:"7:00 pm",
        slotleft:1
    }
]

  return (
    <>  
     <BrowserRouter>
        <center>
    <h1> Time Table Scheduler</h1>
    <br></br>
    <label>
        Are you a faculty or a student ?
    </label>
    <br></br><br></br>
<nav>
    <Link to='/Login'style={{margin:'5pt'}}>Student</Link>
    <Link to='/Faculty' >Faculty</Link>
    <br></br>
    <br></br>

</nav>
<hr></hr>
<hr></hr>
<br></br>
<br></br>

<br></br>


</center>
   
      <Routes>
        
        <Route path="/Faculty" element={<Faculty arr={arr}/>} />
        <Route path="/Login" element={<Login />} />

          <Route path="ChooseSlot" element={<ChooseSlot slots={slots}  />} />
          {/* <Route path="OptionPage" element={<OptionPage />} /> */}
      </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;

