import axios from "axios";
import { useEffect, useState } from "react";


const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

export const useGif = (gifName) => {
 
   //  console.log(gifName);
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const urlwithName = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${gifName}`;

  const [loading,Setloading]=useState(false);
  const [gif,setGif]=useState("crocodile");
 // console.log(gifName);

  async function getGif(gifName){  
   // console.log(gifName);
    Setloading(true);   
    try{
     // let output=
      const output= await axios.get(gifName?(urlwithName):(url));
      let data=output.data;
     let imageSrc=data.data.images.downsized_large.url;
     // console.log(imageSrc);
      setGif(imageSrc);
    }
    catch(e){
      console.log("Bro Error aa gaya api call mne");
    }
    Setloading(false);
  }

  useEffect(()=>{
   getGif();
  },[])
   
  return  {
    gif,
    getGif,
    loading
  }
}
