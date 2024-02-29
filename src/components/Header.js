import React from "react";
import { useEffect } from "react";
import { addrecomvideo ,addrecomchannel} from "../Utils/Videoslice";
import ListIcon from '@mui/icons-material/List';
import {useDispatch} from 'react-redux'
import useChanneldata from "../Utils/useChanneldata";
import { APIKEY, LOGO } from "../Utils/Constants";


import Header2 from "./Header2";
import PrimarySearchAppBar from "./Header2";

const channelid = "UCkWOpf05w9dPthQ-2tXndfA"
const Header = () => {
    const dispatch = useDispatch();
    const channel = useChanneldata(channelid);
 console.log(channel)
    
    // useEffect(()=>{
    // youtube();
    // },[])
    //   const youtube = async ()=>{
    //     try{
    //       const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&&chart=mostPopular&regionCode=US&key=${APIKEY}&maxResults=16`)
    //       const json = await data.json();
    //     const data1= await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus&id=UCkWOpf05w9dPthQ-2tXndfA&key=${APIKEY}`)
    //       const json1 = await data1.json();
    //       console.log(json)
    //       dispatch(addrecomvideo(json.items))
    //       console.log(json1)
    //       dispatch(addrecomchannel(json1.items))
         
    //      if(json && json.items){
    //       dispatch(addrecomvideo(json.items))
    //      }
    //     }catch(error){
    //       console.log(error)
    //     }
       
    //   }
    const json=[
        {
            "kind": "youtube#searchResult",
            "etag": "IpKorf3xebLpcFUAVYzw88ZczUE",
            "id": {
                "kind": "youtube#video",
                "videoId": "D7Z6T8-HHzo"
            },
            "snippet": {
                "publishedAt": "2021-10-29T11:24:11Z",
                "channelId": "UCkWOpf05w9dPthQ-2tXndfA",
                "title": "Rainbow Spider Web Nail Art 🕸🌈",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/D7Z6T8-HHzo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/D7Z6T8-HHzo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/D7Z6T8-HHzo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ilysm Nails",
                "liveBroadcastContent": "none",
                "publishTime": "2021-10-29T11:24:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "NwpRY5bTWn_5MhZvs_Pq20whSwY",
            "id": {
                "kind": "youtube#video",
                "videoId": "ZA-lpzyLJBY"
            },
            "snippet": {
                "publishedAt": "2024-01-17T04:20:38Z",
                "channelId": "UCqpgkc2_06sFf0StsAoqfEg",
                "title": "Rihanna, Avicii, Justin Bieber, Kygo, Selena Gomez, Bastille, David Guetta - Summer Nostalgia",
                "description": "deephousemix #DeepMusic #summermix Rihanna, Avicii, Justin Bieber, Kygo, Selena Gomez, Alok, Bastille, David Guetta ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ZA-lpzyLJBY/default_live.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ZA-lpzyLJBY/mqdefault_live.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ZA-lpzyLJBY/hqdefault_live.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Deep Atlantic",
                "liveBroadcastContent": "live",
                "publishTime": "2024-01-17T04:20:38Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "BxeNsBKfliUBERztOlyjr-LIwNE",
            "id": {
                "kind": "youtube#video",
                "videoId": "MroVPrJSM10"
            },
            "snippet": {
                "publishedAt": "2021-10-16T01:03:55Z",
                "channelId": "UClFN9LShD_Pv0wnSeUKbUZw",
                "title": "Epic Falls by #thatlittlepuff #MakeItCinematic #recipe #shorts",
                "description": "SUBSCRIBE➤ https://rb.gy/mw7bk2 Introducing Puff Designer Outfits! https://www.thatlittlepuff.com/ The one and only cooking cat, ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/MroVPrJSM10/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/MroVPrJSM10/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/MroVPrJSM10/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "That Little Puff",
                "liveBroadcastContent": "none",
                "publishTime": "2021-10-16T01:03:55Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "cY2AcqAGkuEb1ag3MBch_llGxs4",
            "id": {
                "kind": "youtube#video",
                "videoId": "kD7BQe_zQv8"
            },
            "snippet": {
                "publishedAt": "2023-04-06T20:00:13Z",
                "channelId": "UCbZDEx-VdzasD4HzXuD0M4Q",
                "title": "Cesium and Rubidium elements #periodictable",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/kD7BQe_zQv8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/kD7BQe_zQv8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/kD7BQe_zQv8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Engineered Labs",
                "liveBroadcastContent": "none",
                "publishTime": "2023-04-06T20:00:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xqCJlRdAUTEvDv00C6UI9iRIiRw",
            "id": {
                "kind": "youtube#video",
                "videoId": "oKStYmMgNRA"
            },
            "snippet": {
                "publishedAt": "2019-02-09T14:00:03Z",
                "channelId": "UCM1LVD5a5509fzL-4khritA",
                "title": "🎥 AVENGERS 4: ENDGAME (2019) | Full Movie Trailer in Full HD | 1080p",
                "description": "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/oKStYmMgNRA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/oKStYmMgNRA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/oKStYmMgNRA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "TRAILER CITY",
                "liveBroadcastContent": "none",
                "publishTime": "2019-02-09T14:00:03Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Fnm_dzpA3N1vIjOknX8gz2kmIho",
            "id": {
                "kind": "youtube#video",
                "videoId": "MQFuzoAJIt4"
            },
            "snippet": {
                "publishedAt": "2022-11-07T04:48:08Z",
                "channelId": "UCeuXd6PLk_t2WGIhPMvkUSA",
                "title": "Tool Items!😍New Viral Gadgets, Smart Appliances, Kitchen Utensils/Home Inventions #shorts #gadgets",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/MQFuzoAJIt4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/MQFuzoAJIt4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/MQFuzoAJIt4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Tool Items",
                "liveBroadcastContent": "none",
                "publishTime": "2022-11-07T04:48:08Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "c4CVsFwDMwQ7zCBgGR0O1tCZSKU",
            "id": {
                "kind": "youtube#video",
                "videoId": "SoK9KZ2dco0"
            },
            "snippet": {
                "publishedAt": "2022-06-13T03:41:27Z",
                "channelId": "UCeuXd6PLk_t2WGIhPMvkUSA",
                "title": "Tool Items!😍New Viral Gadgets, Smart Appliances, Kitchen Utensils/Home Inventions #shorts #gadgets",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/SoK9KZ2dco0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/SoK9KZ2dco0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/SoK9KZ2dco0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Tool Items",
                "liveBroadcastContent": "none",
                "publishTime": "2022-06-13T03:41:27Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "4cb5AC79FV6zfaU25gbF1Ov86bs",
            "id": {
                "kind": "youtube#video",
                "videoId": "HLH_Ii7wvDA"
            },
            "snippet": {
                "publishedAt": "2022-08-18T05:28:40Z",
                "channelId": "UCeuXd6PLk_t2WGIhPMvkUSA",
                "title": "Tool Items!😍New Viral Gadgets, Smart Appliances, Kitchen Utensils/Home Inventions #shorts #gadgets",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HLH_Ii7wvDA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HLH_Ii7wvDA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HLH_Ii7wvDA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Tool Items",
                "liveBroadcastContent": "none",
                "publishTime": "2022-08-18T05:28:40Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Qv44suMMtvmrixcZqbk_u7p33ck",
            "id": {
                "kind": "youtube#video",
                "videoId": "vRUu2JyCJ1w"
            },
            "snippet": {
                "publishedAt": "2022-05-09T02:21:17Z",
                "channelId": "UC4I8H3mVdF9_JfbzmB7kbCA",
                "title": "Convenience items needed in the family",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vRUu2JyCJ1w/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vRUu2JyCJ1w/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vRUu2JyCJ1w/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "SKY CHANNEL",
                "liveBroadcastContent": "none",
                "publishTime": "2022-05-09T02:21:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "2BJwnApBhRDgrGUKah6ef4o7bQk",
            "id": {
                "kind": "youtube#channel",
                "channelId": "UCdzF3OLZ3aqODZfzbhU08UQ"
            },
            "snippet": {
                "publishedAt": "2015-07-06T10:02:19Z",
                "channelId": "UCdzF3OLZ3aqODZfzbhU08UQ",
                "title": "XỔ SỐ MIỀN NAM - ĐẠI PHÁT",
                "description": "XỔ SỐ MIỀN NAM - ĐẠI PHÁT nguyenkhai18101997@gmail.com.",
                "thumbnails": {
                    "default": {
                        "url": "https://yt3.ggpht.com/FvXJe6MgPgi_7uw2-Xt-hP80-WlrqXoSFhwoYRElcSfVbSP1EFi5gQwCR6wU6Gb9ojF0rYhBuw=s88-c-k-c0xffffffff-no-rj-mo"
                    },
                    "medium": {
                        "url": "https://yt3.ggpht.com/FvXJe6MgPgi_7uw2-Xt-hP80-WlrqXoSFhwoYRElcSfVbSP1EFi5gQwCR6wU6Gb9ojF0rYhBuw=s240-c-k-c0xffffffff-no-rj-mo"
                    },
                    "high": {
                        "url": "https://yt3.ggpht.com/FvXJe6MgPgi_7uw2-Xt-hP80-WlrqXoSFhwoYRElcSfVbSP1EFi5gQwCR6wU6Gb9ojF0rYhBuw=s800-c-k-c0xffffffff-no-rj-mo"
                    }
                },
                "channelTitle": "XỔ SỐ MIỀN NAM - ĐẠI PHÁT",
                "liveBroadcastContent": "live",
                "publishTime": "2015-07-06T10:02:19Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "1w0b81cDs1hBBtCATra4RUX2xD8",
            "id": {
                "kind": "youtube#video",
                "videoId": "bwYa0sJNPvI"
            },
            "snippet": {
                "publishedAt": "2021-11-26T00:22:29Z",
                "channelId": "UCJ3u2OkwClq8-dxDVDa2fBg",
                "title": "WHY Can’t Teams STOP The Golden State Warriors Offense?...",
                "description": "The Warriors are beating everyone these days... Below 0.500 teams, Above .500 teams, it doesn't matter... Not only are the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bwYa0sJNPvI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bwYa0sJNPvI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bwYa0sJNPvI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Hoop Reports",
                "liveBroadcastContent": "none",
                "publishTime": "2021-11-26T00:22:29Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "4Kpkvw1CW32wEjUt6tISC9YLXyE",
            "id": {
                "kind": "youtube#video",
                "videoId": "CqedTsnMDlg"
            },
            "snippet": {
                "publishedAt": "2022-04-16T11:00:05Z",
                "channelId": "UC4rlAVgAK0SGk-yTfe48Qpw",
                "title": "Solve One of 9 Riddles, and Prove You Are a Winner at Life",
                "description": "Wanna check if you belong to the 1% of the smartest people out there? These riddles will reveal your true brain power! Whether ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/CqedTsnMDlg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/CqedTsnMDlg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/CqedTsnMDlg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "BRIGHT SIDE",
                "liveBroadcastContent": "none",
                "publishTime": "2022-04-16T11:00:05Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "u5OB6c0Dt9ZeDfHY0uxDJt928aM",
            "id": {
                "kind": "youtube#video",
                "videoId": "kQ_50OwQVBo"
            },
            "snippet": {
                "publishedAt": "2020-05-02T03:00:13Z",
                "channelId": "UC4rlAVgAK0SGk-yTfe48Qpw",
                "title": "One Place on Earth Where No Life Can Exist",
                "description": "What's the hottest place on Earth? Planning a vacation, but don't know where to go? Yes, the Maldives, Bali, Thailand, and other ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/kQ_50OwQVBo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/kQ_50OwQVBo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/kQ_50OwQVBo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "BRIGHT SIDE",
                "liveBroadcastContent": "none",
                "publishTime": "2020-05-02T03:00:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Cg29DT0GtoyG-VXUsCOo9Y92t3w",
            "id": {
                "kind": "youtube#video",
                "videoId": "hAbxkkeHRpE"
            },
            "snippet": {
                "publishedAt": "2022-07-29T11:00:34Z",
                "channelId": "UC4rlAVgAK0SGk-yTfe48Qpw",
                "title": "Why You Shouldn&#39;t Order a Medium-Sized Drink",
                "description": "Have you noticed that you subconsciously pick a medium-sized soda even when you aren't that thirsty? Many people buy a ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/hAbxkkeHRpE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/hAbxkkeHRpE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/hAbxkkeHRpE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "BRIGHT SIDE",
                "liveBroadcastContent": "none",
                "publishTime": "2022-07-29T11:00:34Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "8GRiqkxiFJxyPa0WWr9ecCzIzlY",
            "id": {
                "kind": "youtube#video",
                "videoId": "bS6Mh989vEI"
            },
            "snippet": {
                "publishedAt": "2021-12-20T16:00:19Z",
                "channelId": "UC4rlAVgAK0SGk-yTfe48Qpw",
                "title": "The Deepest Points in Each Ocean",
                "description": "What's the deepest place on Earth? Most of us would name the Mariana Trench and not without reason. It's the very place in the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/bS6Mh989vEI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/bS6Mh989vEI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/bS6Mh989vEI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "BRIGHT SIDE",
                "liveBroadcastContent": "none",
                "publishTime": "2021-12-20T16:00:19Z"
            }
        }
    ]
    
    dispatch(addrecomvideo(json))
    


      
     
  return (
  <>
   <PrimarySearchAppBar/>
     </>
   
  );
};

export default Header;
