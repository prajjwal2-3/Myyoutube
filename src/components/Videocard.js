import React from 'react'

const Videocard = ({array}) => {
    console.log(array)
  return (
   <div className="">
      
         <div className='aspect-video m-2 '>
         <iframe className='rounded-xl' src={`https://www.youtube.com/embed/${array.id?.videoId}?si=roF6w1-ZfInPoufF&amp;controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
     
   </div>
  )
}

export default Videocard
