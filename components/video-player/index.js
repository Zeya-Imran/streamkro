import VideoJs from "video.js";
import "videojs-hotkeys";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import 'video.js/dist/video-js.css';
import "videojs-seek-buttons/dist/videojs-seek-buttons.css";
import { useRef, useEffect } from "react";

const index = ()=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const video = useRef();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const player = useRef(null);
    const options = {
        sources:[
            {
                src:'https://streamkro.s3.ap-south-1.amazonaws.com/hls/video-2.m3u8',
                type: 'application/x-mpegURL'
            }
        ],
        autoplay:true,
        controls:true,
        playbackRates:[0.5,1,1.5,2,2.5],
        fluid:true
    }

    const onReady = (player)=>{
     //console.log(player); //all features of viodejs player
    //    player.seekButtons({
    //     forward:10,
    //     back:10
    //    });
        player.hlsQualitySelector({
            displayCurrentQuality:true
        });
        player.hotkeys({
            alwayscaptureHotkeys: true,
            seekStep:10,
            enableVolumeScroll:true
        });


    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        player.current = VideoJs(video.current,options,()=>onReady(player.current));
        //cleanup funtion for clear prev video memory from RAM
        // return ()=>{
        //     player.current.dispose();
        //     //player.current = null;
        // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    // updating video url
    const update = ()=>{
        player.current.src(
                {
                    src:'/video-2.mp4',
                    type:'video/mp4'
                }
        );
    }
    const uploadAndPlay = (e)=>{
        const input = e.target;
        const file = input.files[0];
        const url = URL.createObjectURL(file);
        player.current.src(
            {
                src:url,
                type:'video/mp4'
            }
    );
    }

    const design = (
        <>
            <div className="w-9/12">
                <video  ref={video} className="video-js vjs-big-play-centered" />
            </div>

            <button onClick={update}>update</button>
            <input type='file' onChange={uploadAndPlay} />
        </>
    );
    return design;
}

export default index;
