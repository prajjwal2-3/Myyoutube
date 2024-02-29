import React, { useEffect, useState } from 'react';
import { APIKEY } from './Constants';

const useChanneldata = (prop) => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=${prop}&key=${APIKEY}`
        );
        const json = await response.json();
        setData(json); 
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(); 
  }, []); 
  return data; 
};
export default useChanneldata;
