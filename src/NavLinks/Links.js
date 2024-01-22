
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Home from "../Components/Home"
import Hollywood from "../Components/Hollywood"
import Bollywood from "../Components/Bollywood"
import Fitness from "../Components/Fitness"
import Technology from "../Components/Technology"
import Food from "../Components/Food"
import ContextApi from "../ContextApi/ContextApi"
import Detailpage from "../Components/Detailpage"
import {useState } from "react"


function Links(){

  const[count,setCount]=useState(false);
    return(
        <>
<BrowserRouter>
<div id="navlink">
    <ul>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/" className="link" >Home</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Hollywood" className="link" >Hollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Bollywood" className="link" >Bollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Technology"  className="link">Technology </NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Fitness"  className="link">Fitness</NavLink></li>
        <li>
        <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} to="/Food"  className="link">Food</NavLink></li>
        
</ul>
<div onClick={()=>setCount(!count)} className="display"><i className="fa-solid fa-bars"  ></i></div>



</div>

<div className={(count)?"hambergerlinks show":"hambergerlinks hide"}>
<ul>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})} onClick={()=>setCount(!count)} to="/" className="link" >Home</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Hollywood" className="link" >Hollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Bollywood" className="link" >Bollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Technology"  className="link">Technology </NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Fitness"  className="link">Fitness</NavLink></li>
        <li>
        <NavLink style={({isActive})=>({color:(isActive)?"lightGrey":"black"})}  onClick={()=>setCount(!count)}  to="/Food"  className="link">Food</NavLink></li>
        
</ul>
</div>


<ContextApi>
<Routes>
 
 <Route path="/" element={<Home/>}/>
 <Route path="/Hollywood" element={<Hollywood/>}/>
 <Route path="/Bollywood" element={<Bollywood/>}/>
 <Route path="/Technology" element={<Technology/>}/>
 <Route path="/Fitness" element={<Fitness/>}/>
 <Route path="/Food" element={<Food/>}/>
 <Route path="/detailpage/:id" element={<Detailpage/>}/>

     
</Routes>
</ContextApi>



<footer>
 
<div className="footermedia">
<div >
    <ul className="footerlinks">
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/" className="link" >Home</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Hollywood" className="link" >Hollywood</NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Bollywood" className="link" >Bollywood</NavLink></li>

        
</ul>
    </div>
    <div >
      <ul className="footerlinks">
      <li>
    <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Technology"  className="link">Technology </NavLink></li>
        <li>
    <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Fitness"  className="link">Fitness</NavLink></li>
        <li>
        <NavLink style={({isActive})=>({color:(isActive)?"red":"black"})} to="/Food"  className="link">Food</NavLink></li>
      </ul>
    </div>
    <div id="copyright-phone">
    <p><i className="fa-regular fa-copyright"></i> 2024 swapnali pawar</p>
  <p><i className="fa-solid fa-phone"></i>0000000000</p>
  
    </div>
  <div id="footer-aboutus">
   <h3>About Site:</h3>
   <p>These is react blog project<br/>
       made using React dynamic routing <br/>
       concepts for tricks follow us<br/>
   </p>
    
  </div>
  <div className="pro-mediaicon">
                  <h3>Follow us:</h3> 
                  
                  <NavLink id="iconlink"><i className="fa-brands fa-square-instagram" to="https://www.instagram.com/"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-linkedin"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-facebook"></i></NavLink>
                   <NavLink id="iconlink"><i className="fa-brands fa-github"></i></NavLink>
          </div>
          
          </div>
</footer>

</BrowserRouter>



</>
    )
} 

export default Links