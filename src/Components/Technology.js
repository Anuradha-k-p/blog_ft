
import React, { useContext } from "react";
import {Store} from "../ContextApi/ContextApi"
import {NavLink} from "react-router-dom"


function Technology(){
    const [received] = useContext(Store);
    console.log(received);
    return(
        <>
 



          
<div className="maincontainer">
        {/* left side parent */}

        <div id="Lparent1">
          <h1 className="side side2">Latest Articles</h1>
          {received.filter((item) => item.Category === "technology")

            .map((item, index) => {
              return (
                <div key={index}>
                     <NavLink to={`/detailpage/${item.id}`} className="linkdes">
                  <div id="parent2">
                    <img
                      id="leftsideimage"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="160px"
                    />
                    <div id="Description3">
                      <h4>{item.Title}</h4>
                      <p>{item.Description.slice(0,100)+"..."}</p>
                    </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
          
        </div>

    <div className="middlecontainerright">
    
        {/* popular right side parent */}
      
        <div className="Rparent1">
          <h1 className="side2 side">Top Post</h1>
          {received
            .filter(
              (item) => item.id === 59 && item.Category === "technology"
            )
            .map((item, index) => {
              return (
                <div id="parent2"  key={index}>
                    <NavLink to={`/detailpage/${item.id}`} className="linkdes special-div">
                  <img
                  id="special-img"
                    src={item.image}
                    alt="not found"
                    height="240px"
                    width="390px"
                  />
                  <div  className="special-description">
                    <p>{item.Description.slice(0,140)+"..."}</p>
                    <h3 id="number">{index+1}</h3>
                  </div>
                 
                  </NavLink>
                </div>
              );
            })}
          {received
            .filter(
              (item) =>item.id >= 48 && item.id <= 51 && item.Category === "technology"
            )
            .map((item, index) => {
              return (
                <div id="parent2" key={index}>
                     <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes3">
                  <img
                    src={item.image}
                    alt="not found"
                    height="100px"
                    width="130px"
                  />
                  <div id="Description">
                    <p>{item.Description.slice(0,100)+"..."}</p>
                  </div>
                  <h3 id="number">{index+2}</h3>
                  </NavLink>
                </div>
              );
            })}
        </div>
        <div className="Advertise2 side2 "><h2 className="Adtext2">Advertisement</h2></div>
        <div className="bigimage2">
        {received.filter((item)=>item.id===46).map((item,index)=>{
             return(
              <div>
                 <img
            src={item.image}
            alt="not found"
          ></img>
              </div>
            )
          })}
        </div>
    </div>
    
      </div>


    </>
    )
}
export default Technology