import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useSinle from "../Utils/useSinle";
import { useSelector } from "react-redux";

const Watchpage = () => {
  
  const { id } = useParams();
  const ds = useSinle(id);
  console.log(ds);
  const channels = useSelector((state)=>state?.video?.recomchannel)
  if(ds===undefined) return


  // console.log(channels)
   const ch = channels.filter((c)=>c.items[0] && c.items[0].id===ds?.items[0]?.snippet?.channelId)
 
 
if(ch===undefined)return
console.log(ch)
  return (
    <div className="flex justify-center">
      <div className="flex  w-11/12 ">
        <div className="video-comment w-8/12 h-screen ">
          <div className="video aspect-video mt-5 mr-1 ">
            <iframe
              className="w-full h-5/6 rounded-xl"
              src={`https://www.youtube.com/embed/${id}?si=Xl13FNhU_b4gBdWZ&autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h1 className="text-2xl text-white mt-2 font-bold">
              {ds?.items[0]?.snippet?.title}
            </h1>
            
         <div className=" flex">
         <div className="w-10 h-10 mt-2 m-1">
              <img
                src={ch[0]?.items[0]?.snippet?.thumbnails?.high?.url}
                className="rounded-full"
                alt="cant"
              />
            </div>
            <div className=" mt-2 m-1 text-white">
              <h5>{ch[0]?.items[0]?.snippet?.title}</h5>
            </div>
         </div>
            
          </div>
          <div className="comment"></div>
        </div>
        <div className="recommended w-4/12 ">j</div>
      </div>
    </div>
  );
};

export default Watchpage;
