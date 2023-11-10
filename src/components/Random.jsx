import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useGif } from "../hooks/useGif";


export default function Random() {

let API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
const {gif,loading,getGif}=useGif();


  function clickHandler(){
    //console.log("kya hua");
    getGif();
  }

  return <div className="bg-[green] w-1/2  h-auto mx-auto mt-6 rounded-md border-black flex justify-between p-3 flex-col items-center">

    <h2 className="underline font-bold text-xl uppercase mb-2">A Random Gif</h2>
    {
      loading?(<Loading></Loading>):
      (<img src={gif} width={250}height={450} alt="myimg"></img>)
    }
    <button
    className="bg-white rounded-md mt-3 w-11/12"
    onClick={clickHandler}>GENTRATE</button>
  </div>;
}
