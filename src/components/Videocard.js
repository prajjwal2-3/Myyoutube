import React, { useState,useEffect } from 'react'

const Videocard = ({array,uniqueID}) => {
    console.log(array)
    const key="RK1J8kC1sEY"
    const[auto,setauto]=useState(0)
  
    useEffect(() => {
        const playerElement = document.getElementsByClassName(`player-${uniqueID}`)[0]; // Assuming there is only one element with the class "player"
    
        const handleMouseOver = () => {
          setauto(1);
        };
    
        const handleMouseOut = () => {
          setauto(0);
        };
    
        playerElement.addEventListener("mouseover", handleMouseOver);
        playerElement.addEventListener("mouseout", handleMouseOut);
    
        // Cleanup event listeners on component unmount
       
      });
  return (
   <div className="">
      
         <div className={`aspect-video m-2 player-${uniqueID}`}>
         <iframe className='rounded-xl ' height={200} width={300}src={`https://www.youtube.com/embed/${key}?si=roF6w1-ZfInPoufF&amp&controls=0&mute=1&autoplay=${auto}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
     
   </div>
  )
}

export default Videocard
