import React, { useState } from 'react'
import {get_subtitles_for_video} from '@suejon/youtube-subtitles'
import { addsub } from '../Utils/Videoslice';
import { useDispatch } from 'react-redux';
// import {RsnChat} from 'rsnchat'

const Rsh = () => {
  const [data,setdata]=useState();
  const dispatch = useDispatch();
  
 
  const sub = async ()=>{
    try{
      var subtitles = await get_subtitles_for_video("o7L5mjrI7w4");
      // var languages = await get_available_languages("8MofNRuTRRM");
      var sub = subtitles?.map(c=>c.text).join(" ")
      setdata(sub);
      dispatch(addsub(data))
      // console.log(sub)
      // console.log(languages)
   

    }
    catch(error){
     console.log(error)
    }
  }
  sub()
  
  return (
    <div>
      
    </div>
  )
}

export default Rsh
