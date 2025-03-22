'use client'
import { useEffect, useRef } from "react";

type Props = {
    vdoSrc:string;
    isPlaying:boolean;
}

export default function VideoPlayer(props:Props){
    const vdoRef = useRef<HTMLVideoElement>(null)
    
    useEffect(()=>{
        if(props.isPlaying){
            vdoRef.current?.play();
        }else{
            vdoRef.current?.pause();
        }
    },[props.isPlaying])

    return(
        <video className="w-[40%]" src={props.vdoSrc} ref={vdoRef} muted loop controls/>
    );
}