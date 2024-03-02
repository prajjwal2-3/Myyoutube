import React, { useState } from "react";
import { useParams } from "react-router-dom";

import useSinle from "../Utils/useSinle";
import { useDispatch, useSelector } from "react-redux";
import { APIKEY3 } from "../Utils/Constants";
import { addwatchpagerecom } from "../Utils/Videoslice";
import Watchrecom from "./Watchrecom";
import Videocard from "./Videocard";

const Watchpage = () => {
  const dispatch=useDispatch()
  const { id } = useParams();
  const ds = useSinle(id);
  console.log(ds);
  const channels = useSelector((state)=>state?.video?.recomchannel)
  if(ds===undefined) return


  // console.log(channels)
   const ch = channels.filter((c)=>c.items[0] && c.items[0].id===ds?.items[0]?.snippet?.channelId)
 
 
if(ch===undefined)return
console.log(ch)
const categId = ds?.items[0]?.snippet?.categoryId;
const recomlist=async()=>{
  try{
     const data = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&videoCategoryId=${categId}&key=${APIKEY3}`);
     const json = await data.json();
     console.log(json)
     dispatch(addwatchpagerecom(json.items))
  }catch(error){
console.log(error)
  }
}
recomlist()



function formatSubscriberCount(subscriberCount) {
  
  if (isNaN(subscriberCount) || subscriberCount === undefined || subscriberCount === null) {
    return "Unavailable";
  }


  subscriberCount = parseFloat(subscriberCount);


  const thresholds = [
    { value: 1e9, abbreviation: "B" },
    { value: 1e6, abbreviation: "M" },
    { value: 1e3, abbreviation: "K" },
  ];

  
  let threshold, abbreviation;
  for (const { value, abbreviation: abbr } of thresholds) {
    if (subscriberCount >= value) {
      threshold = value;
      abbreviation = abbr;
      break;
    }
  }

  
  const formattedCount = (subscriberCount / threshold).toFixed(1);

 
  return `${formattedCount}${abbreviation ? abbreviation : ""}`;
}
  return (
    <div className="flex justify-center  ">
      <div className="flex flex-col sm:flex-row sm:w-11/12 w-full   ">
        <div className="video-comment sm:w-8/12 w-full sm:h-screen ">
          <div className="video aspect-video  sm:mt-5 sm:mr-1 ">
            <iframe
              className="w-full h-5/6 sm:rounded-xl rounded-none shadow-md"
              src={`https://www.youtube.com/embed/${id}?si=Xl13FNhU_b4gBdWZ&autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <h1 className="text-xl sm:text-2xl text-white mt-2 sm:mx-0 mx-2 font-bold">
              {ds?.items[0]?.snippet?.title}
            </h1>
            <div className=" flex">
         <div className="w-10 h-10 mt-2 m-1 sm:mx-0 mx-2">
              <img
                src={ch[0]?.items[0]?.snippet?.thumbnails?.high?.url}
                className="rounded-full"
                alt="cant"
              />
            </div>
            <div className="mt-1 sm:mt-2 m-1 text-white h-10 ">
              <div className="text-sm ">{ch[0]?.items[0]?.snippet?.title}</div>
              <div className="text-sm  ">{formatSubscriberCount(ch[0]?.items[0]?.statistics?.subscriberCount)}</div>
            </div>
         </div>
           </div>
          <div className="comment"></div>
        </div>
        <div className="recommended sm:w-4/12 w-full mt-5 text-white  ">
          <div className="flex justify-center"><Watchrecom/></div>
        </div>
      </div>
    </div>
  );
};

export default Watchpage;
