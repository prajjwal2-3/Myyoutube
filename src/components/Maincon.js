import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Videocard from "./Videocard";
import { categ } from "../Utils/Constants";
import { Link } from "react-router-dom";
import Channeldata from "../Utils/Channeldata";

import { addrecomchannel } from "../Utils/Videoslice";
const Maincon = () => {
  const videodata = useSelector((state) => state.video?.recomvideo);

  const dispatch = useDispatch();
  const videoRecommendations = useSelector((state) => state.video?.recomvideo);

  if (videoRecommendations && videoRecommendations.length > 0) {
    const channelData = [];
    for (let i = 0; i < videoRecommendations.length; i++) {
      const channelId = videoRecommendations[i].snippet?.channelId;

      if (channelId) {
        const channelInfo = Channeldata(channelId);
        if (channelInfo) {
          channelData.push(channelInfo);
        }
      }
    }

    if (channelData.length > 0) {
      dispatch(addrecomchannel(channelData));
    }
  } else {
    console.log("No video recommendations found");
  }
  if (!videodata) return;
  return (
    <>
      <div className="w-11/12 flex justify-start ml-8 mt-2 overflow-auto">
        {categ.map((categ, index) => (
          <button
            key={index}
            className="p-1 bg-slate-300 opacity-65 rounded-md mx-3  overflow-visible"
          >
            {categ}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap w-11/12 mx-auto justify-center ">
        {videodata.map((video, index) => (
          <Link to={"/watch/" + video.id?.videoId} className="  no-underline">
            <Videocard key={index} array={video} uniqueID={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Maincon;
