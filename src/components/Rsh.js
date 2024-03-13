import React, { useState } from 'react'
import {get_subtitles_for_video} from '@suejon/youtube-subtitles'
import { addsub } from '../Utils/Videoslice';
import { useDispatch } from 'react-redux';
// import {RsnChat} from 'rsnchat'

const Rsh = (id) => {
  const [data,setdata]=useState();
  const dispatch = useDispatch();
  console.log(id)
 
  const sub = async ()=>{
   
    console.log(id)
    try{
      if(id===undefined)return
      var subtitles = await get_subtitles_for_video(id,"en");
      // var languages = await get_available_languages("8MofNRuTRRM");
      var sub = subtitles?.map(c=>c.text).join(" ")
      setdata(sub);
      dispatch(addsub(data))
     
   

    }
    catch(error){
     console.log(error)
    }
  }
  sub()
  
  return (
    <div>
      f
    </div>
  )
}

export default Rsh
