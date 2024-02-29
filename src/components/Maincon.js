import React from 'react'
import { useSelector } from 'react-redux'
import Videocard from './Videocard'
const Maincon = () => {
    const videodata = useSelector((state)=>state.video?.recomvideo)
    const channeldata = useSelector((state)=>state.video?.recomchannel)
   console.log(videodata)
    
    if(!videodata) return
  return (
   <div className="flex justify-center ">
     <div className='flex flex-wrap w-11/12'>
      {videodata.map((video,index)=>(<Videocard key={index} array={video} uniqueID={index}/>))}
    </div>
   </div>
  )
}

export default Maincon
