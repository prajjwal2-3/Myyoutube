import React from "react";
import { useSelector } from "react-redux";
import Videocard from "./Videocard";
import { categ } from "../Utils/Constants";
import { Link } from "react-router-dom";
const Maincon = () => {
  const videodata = useSelector((state) => state.video?.recomvideo);
  // const channeldata = useSelector((state)=>state.video?.recomchannel)
   console.log(videodata)

  if (!videodata) return;
  return (
    <>
      <div className="w-11/12 flex justify-start ml-8 mt-2 overflow-auto">
        {categ.map((categ) => (
          <button className="p-1 bg-slate-300 opacity-65 rounded-md mx-3  overflow-visible">
            {categ}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap w-11/12 mx-auto justify-center ">
        
          {videodata.map((video, index) => (
            <Link to={"/watch/"+video.id?.videoId} className="  no-underline">
            <Videocard key={index} array={video} uniqueID={index} />
            </Link>
          ))}
        
      </div>
    </>
  );
};

export default Maincon;
