'use client'
import { useState } from "react";
import VideoPlayer from "./VideoPlayer";
import { useWindowListener } from "@/hooks/useWindowListener";

export default function PromoteCard(){
    
    useWindowListener("contextmenu",(e)=>{ e.preventDefault()})

    const [playing,setPlaying] = useState(true);
    return(
        <div className="w-[80%] shadow-lg mx-[10%] my-10 p-2 rounded-lg bg-gray-200 flex flex-row">
            <VideoPlayer vdoSrc="/vdo/getvaccine.mp4" isPlaying={playing}/>
            <div className="m-5">
                Get your vaccine today.
                <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm mt-10" onClick={()=>{setPlaying(!playing)}}>
                    {playing ? "Pause":"Play"}
                </button>
            </div>
        </div>
    );
}