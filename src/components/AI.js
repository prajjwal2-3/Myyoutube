import React from 'react'
import {  useSelector } from 'react-redux';
import { RsnChat } from 'rsnchat';
const AI = () => {
    const addtodo = () => {
        axios
          .get("https://localhost:3001/api/",)
          .then((Response) => {
            console.log(Response);
          })
    
          .catch((error) => console.error("Error adding todo:", error));
      };
      addtodo();
}

  return (
    <div>
      
    </div>
  )


export default AI
