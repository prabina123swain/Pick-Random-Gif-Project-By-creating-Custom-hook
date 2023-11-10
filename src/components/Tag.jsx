import { useState } from "react";
import Loading from "./Loading";
import { useGif } from "../hooks/useGif";


export default function Tag() {

 const[gifName,setGifName]=useState('');

const {gif,loading,getGif}=useGif(gifName);

  function changeHandler(event){
    setGifName(event.target.value);
    //console.log(gifName);
  }

  function GenerateHandler() {
    getGif(gifName);
  }

return <div className="bg-[#89adec] w-1/2  h-auto mx-auto mt-6 rounded-md border-black flex justify-between p-3 flex-col items-center">

<h2 className="underline font-bold text-xl uppercase mb-2">A Random {gifName} Gif</h2>
{
     loading?(<Loading></Loading>):
      (<img src={gif} width={250}height={450} alt="myimg"></img>)
    }
  <input
 type="text"
 value={gifName}
 className="bg-white rounded-md mt-3 w-11/12 text-center"
 onChange={changeHandler}
>

</input>

<button
className="bg-white rounded-md mt-3 w-11/12"
 onClick={GenerateHandler}
 >GENTRATE</button>
</div>;
}
