import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Videocard from "./Videocard";
import { categ } from "../Utils/Constants";
import { Link } from "react-router-dom";
// import Channeldata from "../Utils/Channeldata";
import { APIKEY3 } from "../Utils/Constants";
import { addrecomchannel } from "../Utils/Videoslice";
const Maincon = () => {
  const dispatch = useDispatch();
 
  const videoRecommendations = useSelector((state) => state.video?.recomvideo);

  if (videoRecommendations && videoRecommendations.length > 0) {
    const channelData = [];
    for (let i = 0; i < videoRecommendations.length; i++) {
      const channelId = videoRecommendations[i].snippet?.channelId;

      const channelInfo = async (channelId) => {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${channelId}&key=${APIKEY3}`
        );
        const json = await response.json();

        return json;
      };
      channelData.push(channelInfo);
    }

    dispatch(addrecomchannel(channelData));
  } else {
    console.log("No video recommendations found");
  }
  if (!videoRecommendations) return;
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
        {videoRecommendations.map((video, index) => (
          <Link to={"/watch/" + video.id?.videoId} className="  no-underline">
            <Videocard key={index} array={video} uniqueID={index} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Maincon;
