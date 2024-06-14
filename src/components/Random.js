import React,{useState,useEffect} from 'react'
import axios from "axios";
import Spinner from "../components/Spinner";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {
    const[gif , setGif]  = useState("");
   const [loading,setLoading] = useState(false);
    // async function fetchData() {
    //    const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //    const output = await axios.get(url);
    //    setGif(output.data.data.images.downsized_large.url);
    // //    console.log(output);

    // }
    async function fetchData() {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        console.log("API URL:", url); // Check if this URL is correct
        try {
            const output = await axios.get(url);
            setGif(output.data.data.images.downsized_large.url);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        setLoading(false);
    }
    
   useEffect(()=>{
    fetchData();
   },[])

    function clickHandler() {
        console.log("button clicked");
        fetchData();
    }

  return (
    
    <div className='w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]' >
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random Gif</h1>

       {
        loading ? (<Spinner/>):( <img src={gif} width="450"></img>
        )
       }
        <button onClick={clickHandler}
        className='w-10/12 bg-white opacity-90 text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
    
  )
}

export default Random