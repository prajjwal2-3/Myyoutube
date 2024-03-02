import React from 'react'
import { useSelector } from 'react-redux'
import Videocard from './Videocard'

const Watchrecom = () => {

const recomchannel = useSelector((state)=>state?.video?.watchpagerecom)
console.log(recomchannel)
if(recomchannel===undefined) return
  return (
    <div className='w-72'>
      {recomchannel.map((video,index)=>
     ( <Videocard key={index} array={video} uniqueID={index}/>)
      )}
    </div>
  )
}

export default Watchrecom
