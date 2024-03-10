import React from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
const AI = () => {
const cap = useSelector((state)=>state?.video?.sub)
if(cap===undefined)return
const send = ()=>{
    axios
    .post("http://localhost:3001/api",{text:cap})
    .then((Response) => {
        console.log(Response.data);
      })
     .catch(error => {
        console.error('Error:', error); 
     });
}
send();

  return (
    <div>
      d
    </div>
  )

  }
export default AI
