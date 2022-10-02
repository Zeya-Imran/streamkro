import {Slider} from "../../../tailwind";
import { useSelector } from "react-redux"
import {useEffect } from "react";
const TopMovies = ()=>{
    const data = [
        {
            thumbnail: "sanddust2.jpg",
            title:"SandDust",
            duration:"2:40 hrs"
        },
        {
            thumbnail: "movie-abc.png",
            title:"GoDZila",
            duration:"2:40 hrs"
        },
        {
            thumbnail: "movie-xyz-.png",
            title:"KingKong",
            duration:"2:40 hrs"
        },
        {
            thumbnail: "sanddust2.jpg",
            title:"The Mummy",
            duration:"2:40 hrs"
        },
        {
            thumbnail: "movie-abc.png",
            title:"MI-7",
            duration:"2:40 hrs"
        },
        {
            thumbnail: "movie-xyz-.png",
            title:"Mechanic",
            duration:"2:40 hrs"
        }
    ]
    const {AnimationReducer} = useSelector(response=>response); // calling as Hooks
    const {image} = AnimationReducer;

     useEffect(()=>{
        //code
    },[AnimationReducer]);

    const design = (
        <>
            <div style={{
                    height:600,
                    backgroundImage: `url(${image ? image : 'sanddust2.jpg'})`,
                    backgroundSize: "cover"
                }}>
                    <div className="h-full p-8" style={{
                        background:"linear-gradient(to right,rgba(0,0,0,0.9),transparent)"}}>
                        <h1 className="text-white text-3xl mb-4"> Top 10 Movies</h1>
                        <div className="overflow-hidden relative"
                        style={{
                            width:330,
                            height: 516
                        }}
                        >
                            <Slider data={data} vertical={true} />
                        </div>
                    </div>

            </div>
        </>
    );
    return design;
}
export default TopMovies;