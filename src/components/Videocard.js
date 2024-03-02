import React, { useState, useEffect } from "react";

import useChanneldata from "../Utils/Channeldata";

const Videocard = ({ array, uniqueID }) => {
  // console.log(array);
  const channelinfo = useChanneldata(array?.snippet?.channelId);
  // console.log(channelinfo)

  const [auto, setauto] = useState(0);

  useEffect(() => {
    const playerElement = document.getElementsByClassName(
      `player-${uniqueID}`
    )[0];

    const handleMouseOver = () => {
      setauto(1);
    };

    const handleMouseOut = () => {
      setauto(0);
    };

    playerElement.addEventListener("mouseover", handleMouseOver);
    playerElement.addEventListener("mouseout", handleMouseOut);
  }, []);
  return (
    <div className="mb-14">
      <div className={`aspect-video m-2 player-${uniqueID}`}>
        {auto === 1 ? (
          <iframe
            className={`rounded-xl w-80 h-48`}
            src={`https://www.youtube.com/embed/${array?.id?.videoId}?si=roF6w1-ZfInPoufF&amp&controls=0&mute=1&autoplay=${auto}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        ) : (
          <img
            src={array?.snippet?.thumbnails?.high?.url}
            className="rounded-xl w-80 h-48 "
            alt="logo"
          />
        )}
        <div className="">
          <div className=""></div>
          <div className=" flex">
            <div className="w-10 h-10 mt-2">
              <img
                src={channelinfo?.items[0]?.snippet?.thumbnails?.high?.url}
                className="rounded-full"
                alt="cant"
              />
            </div>
            <div className="w-72 h-12 p-2">
              {" "}
              <div className="font-bold truncate text-white">
                {array?.snippet?.title}
              </div>
              <div className=" truncate text-white opacity-85">
                {array?.snippet?.channelTitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
