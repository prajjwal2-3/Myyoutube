import React from 'react'
import {  useSelector } from 'react-redux';
import { RsnChat } from 'rsnchat';
import axios from 'axios'
const AI = () => {
    const addtodo = () => {
        axios
          .get("http://localhost:3001/api",)
          .then((Response) => {
            console.log(Response);
          })
    
          .catch((error) => console.error("Error adding todo:", error));
      };
      addtodo();


  return (
    <div>
      
    </div>
  )

  }
export default AI
