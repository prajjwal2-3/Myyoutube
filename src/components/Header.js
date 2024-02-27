import React from "react";
import { useEffect } from "react";
import { addrecomvideo } from "../Utils/Videoslice";
import ListIcon from '@mui/icons-material/List';
import {useDispatch} from 'react-redux'

const Header = () => {
    const dispatch = useDispatch();
    // const apikey="AIzaSyB_bjlIYeeDmGlYNYwoLt7htxHagFCIvzY"
    // useEffect(()=>{
    // youtube();
    // },[])
    //   const youtube = async ()=>{
    //     try{
    //       const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&&chart=mostPopular&regionCode=IN&key=${apikey}`)
    //       const json = await data.json();
    //       console.log(json)
    //      if(json && json.items){
    //       dispatch(addrecomvideo(json.items))
    //      }
    //     }catch(error){
    //       console.log(error)
    //     }
       
    //   }
    const json={
        "kind": "youtube#searchListResponse",
        "etag": "gtnEktJnP1dIoKZND1-GrWIBxD0",
        "nextPageToken": "CAUQAA",
        "regionCode": "IN",
        "pageInfo": {
            "totalResults": 1000000,
            "resultsPerPage": 5
        },
        "items": [
            {
                "kind": "youtube#searchResult",
                "etag": "R4B6TiPsvuzyrHt1b4RgpAHTIyY",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "Km7BPRdUH-M"
                },
                "snippet": {
                    "publishedAt": "2022-07-22T19:30:03Z",
                    "channelId": "UCTBGH7y-WPy4NPsPKTPXLEw",
                    "title": "Tufting an M&amp;M Rug (ASMR)",
                    "description": "Tufting an M&M Rug ASMR style! Instagram/TikTok - @simjiofficial Main channel - www.youtube.com/c/SIMJI/ My Shop: ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Km7BPRdUH-M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Km7BPRdUH-M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Km7BPRdUH-M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "SIMJI",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-07-22T19:30:03Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "cVuzlSfPaD5aXCw1qhcAJ9cpbKA",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "4XuSd1uMLeA"
                },
                "snippet": {
                    "publishedAt": "2024-02-22T17:15:09Z",
                    "channelId": "UCilvXuMtM2WpzGuZ6EXdwJg",
                    "title": "ASMR MUKBANG 집밥 직접 만든 된장찌개 대왕 전복 소갈비찜 잡채 먹방 &amp; 레시피 Galbi jjim Korean Home Meal EATING REAL SOUND! #88",
                    "description": "ASMR MUKBANG 집밥 직접 만든 된장찌개 대왕 전복 소갈비찜 잡채 먹방 & 레시피 Galbi jjim Korean Home Meal EATING REAL ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4XuSd1uMLeA/default_live.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4XuSd1uMLeA/mqdefault_live.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4XuSd1uMLeA/hqdefault_live.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "HP DIY Farming",
                    "liveBroadcastContent": "live",
                    "publishTime": "2024-02-22T17:15:09Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "zyIHK9WmU65D39oqfyMoJRy01D4",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "pmW46W6nPaQ"
                },
                "snippet": {
                    "publishedAt": "2021-12-02T16:38:18Z",
                    "channelId": "UCKxH3FrngB6GJaGYUf_QNLA",
                    "title": "How To Sugar Like A Pro | DIY SUGAR WAX  #shorts",
                    "description": "how i make sugar wax at home https://youtu.be/3qOzDFUPoFE how to use sugar in depth https://youtu.be/8qCVYtQ_orE.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pmW46W6nPaQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pmW46W6nPaQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pmW46W6nPaQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "abetweene",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-12-02T16:38:18Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "ereZ2FI15xk858TnFLc2hPnllvA",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "XDwXbN6Ejo4"
                },
                "snippet": {
                    "publishedAt": "2022-03-26T15:42:58Z",
                    "channelId": "UCnrIE3mxTT9MshO8JTzuxeg",
                    "title": "How to Land Faster in Nimbus island (PUBG MOBILE &amp; BGMI 1.9 Update) Tips and Tricks Guide/Tutorial",
                    "description": "How to Land Faster in Nimbus island 1.9 Update (PUBG MOBILE & BGMI) Tips and Tricks join discord ...",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XDwXbN6Ejo4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XDwXbN6Ejo4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XDwXbN6Ejo4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Zendex",
                    "liveBroadcastContent": "none",
                    "publishTime": "2022-03-26T15:42:58Z"
                }
            },
            {
                "kind": "youtube#searchResult",
                "etag": "f_CZe9I_JwUlc7uso58JN2MgNuc",
                "id": {
                    "kind": "youtube#video",
                    "videoId": "Jhw36b4MC3M"
                },
                "snippet": {
                    "publishedAt": "2021-08-02T15:00:15Z",
                    "channelId": "UC1ymP-F2E2Cw-V_XUTTBwgQ",
                    "title": "Suspicious Stew In Minecraft Is More Useful Than You Think! #shorts",
                    "description": "Become a channel member for exclusive perks! ⚡️ https://www.youtube.com/c/JulienAzelart/join Discord!",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Jhw36b4MC3M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Jhw36b4MC3M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Jhw36b4MC3M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "Julien Azelart",
                    "liveBroadcastContent": "none",
                    "publishTime": "2021-08-02T15:00:15Z"
                }
            }
        ]
    }

    dispatch(addrecomvideo(json.items))
  return (
    <div className="w-full p-2 flex  justify-between">
      <div className="logo-options flex w-2/12">
          <div className="options m-2 ">

            <ListIcon/>
          </div>
        <div className="logo  flex "><img 
className='h-12 mr-2' src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="logo"
 />
        </div>
      </div>
      <div className="search bg-blue-600 w-8/12">search</div>
      <div className="profile bg-red-600 w-2/12">profile</div>
    </div>
  );
};

export default Header;
