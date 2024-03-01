import { useState,useEffect } from "react";
import { APIKEY3 } from "./Constants";
const useCateg = () => {
    const [data, setData] = useState();

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=${APIKEY3}`
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

  
}

export default useCateg
