import React from 'react'

const Watchpage = () => {
  return (
   <div className="flex justify-center">
     <div className='flex  w-11/12 '>
      <div className="video-comment w-8/12 h-screen ">
        
        <div className="video aspect-video mt-5 mr-1 ">

        <iframe className='w-full h-5/6 rounded-xl' src="https://www.youtube.com/embed/dfTj3aslNLU?si=Xl13FNhU_b4gBdWZ&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="comment"></div>
      </div>
      <div className="recommended w-4/12 ">j</div>
    </div>
   </div>
  )
}

export default Watchpage
