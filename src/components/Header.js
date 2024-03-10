import React from "react";
import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { addrecomvideo } from "../Utils/Videoslice";
import Rsh from "./Rsh";
import { APIKEY3} from "../Utils/Constants";
import PrimarySearchAppBar from "./Header2";
import AI from "./AI";
const Header = () => {
  const dispatch = useDispatch();
  
  
  useEffect(() => {
    youtube();
   

 
  }, []);
  const youtube = async () => {
    try {
      const data = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=${APIKEY3}&maxResults=40`
      );
      // const ai =  new Bard(cookie)
      // console.log(await ai.ask("Hello world"));
      const json = await data.json();

      // console.log(json);
      dispatch(addrecomvideo(json.items));

      if (json && json.items) {
        dispatch(addrecomvideo(json.items));
      }
      // console.log(json.items)
    
      
    } catch (error) {
      console.log(error);
    }
    
  };


  return (
    
      <PrimarySearchAppBar />
    
  );
};

export default Header;
