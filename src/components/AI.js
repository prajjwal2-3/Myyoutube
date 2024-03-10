import React from 'react'
import axios from 'axios'
const AI = () => {
    // const addtodo = () => {
    //     axios
    //       .get("http://localhost:3001/api")
    //       .then((Response) => {
    //         console.log(Response.data);
    //       })
    
    //       .catch((error) => console.error("Error adding todo:", error));
    //   };
    //   addtodo();
const send = ()=>{
    axios
    .post("http://localhost:3001/api",{text:"prajjwal"})
    .then((Response) => {
        console.log(Response.data);
      })
     .catch(error => {
        console.error('Error:', error); // Handle errors
     });
}
send();

  return (
    <div>
      
    </div>
  )

  }
export default AI
