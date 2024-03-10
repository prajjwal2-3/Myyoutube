import React from 'react'
import {get_subtitles_for_video,get_available_languages} from '@suejon/youtube-subtitles'
const Rsh = () => {

  const sub = async ()=>{
    try{
      var subtitles = await get_subtitles_for_video("HYu23wXZDbQ");
      // var languages = await get_available_languages("8MofNRuTRRM");
      var sub = subtitles?.map(c=>c.text).join(", ")
      console.log(sub)
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
