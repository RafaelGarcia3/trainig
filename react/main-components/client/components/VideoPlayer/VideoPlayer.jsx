import React, { useState, useRef } from "react";

export default function VideoPlayer(){
    const [isPlying, setIsPlaying] = useState(false);
    const ref = useRef(null);

    function handleClick(){
        const nextIsPlaying = !isPlying;
        setIsPlaying(!isPlying);

        if(nextIsPlaying){
            ref.current.play();
        }else{
            ref.current.pause();    
        }
    }

    return(
        <>
            <button onClick={handleClick}>
                {isPlying ? "Pause" : "Play"}
            </button>
            <br/><br/>
            <video
                width="300"
                ref={ref}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source 
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </>
    );
}