import React from 'react'
import { useState,useEffect } from 'react';
import { APIKEY3 } from './Constants';
const useSinle = (id) => {
    const [data, setData] = useState();
    console.log(id)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${APIKEY3}`
          );
          const json = await response.json();
          setData(json); 
          console.log(json)
        } catch (error) {
          console.error(error);
        }
      };
      fetchData(); 
    }, []); 
    return data; 
}

export default useSinle
