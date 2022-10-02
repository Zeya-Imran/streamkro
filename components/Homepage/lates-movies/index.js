import {Slider} from '../../../tailwind';
const index = ()=>{
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
    const design = (
        <>
          <div className="text-white">
            <h1 className="text-3xl mb-5"> Latest Moives</h1>
            <Slider data={data} vertical={false} />
          </div>
        </>
    );
    return design;
}
export default index