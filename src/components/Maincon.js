import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Videocard from "./Videocard";
import { categ } from "../Utils/Constants";
import { Link } from "react-router-dom";

import { APIKEY3 } from "../Utils/Constants";
import { addrecomchannel } from "../Utils/Videoslice";
const Maincon = () => {
  const dispatch = useDispatch();

  const videoRecommendations = useSelector((state) => state.video?.recomvideo);
  if (!videoRecommendations) return;
  if (videoRecommendations && videoRecommendations.length > 0) {
    const fetchData = async () => {
      if (videoRecommendations && videoRecommendations.length > 0) {
        const channelInfoPromises = videoRecommendations.map(
          async (recommendation) => {
            const channelId = recommendation.snippet?.channelId;

            if (channelId) {
              const response = await fetch(
                `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${channelId}&key=${APIKEY3}`
              );
              const json = await response.json();
              // console.log(json);

              return json;
            }

            return null;
          }
        );

        const channelInfos = await Promise.all(channelInfoPromises);

        const filteredChannelInfos = channelInfos.filter(
          (info) => info !== null
        );

        dispatch(addrecomchannel(filteredChannelInfos));
        console.log("added");
      } else {
        console.log("No video recommendations found");
      }
    };

    fetchData();
  } else {
    console.log("No video recommendations found");
  }

  return (
    <>
      <div className="sm:w-11/12 w-full flex justify-start sm:ml-8 ml-1  mt-2 overflow-auto">
        {categ.map((categ, index) => (
          <button
            key={index}
            className="p-1 bg-slate-300 opacity-65 rounded-md mx-3  overflow-visible"
          >
            {categ}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap sm:w-11/12 w-full sm:mx-auto justify-center ">
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
