import { Carousel, Button, Icon } from "../../../tailwind";


const mainBannerIndex = ()=>{
    const Caption = ({data})=>{

        const design = (
            <>
                <div className="flex flex-col gap-2 sm:gap-10 px-5">
                    <div>
                        <h1 className="text-white sm:font-bold text-5xl sm:text-8xl mb-1 sm:mb-4">{data.title}</h1>
                        <div>
                            <div>
                                {
                                    Array(data.rating).fill(0).map((item,index)=>{
                                        return <Icon className="text-red-500" key={index}>star</Icon>
                                    })
                                }
                                {
                                    Array(5-(data.rating)).fill(0).map((item,index)=>{
                                        return <Icon className="text-red-500 " key={index}>star_outline</Icon>
                                    })
                                }
                            </div>
                            <p className="text-white"><span className="text-red-600 font-bold">Duration</span> : {data.duration}</p>
                        </div>
                    </div>
                    <div className="text-white text-lg flex flex-col gap-0 sm:gap-3">
                        <p><span className="text-red-600 font-bold">Staring</span> : {data.staring}</p>
                        <p><span className="text-red-600 font-bold">Category</span> : {data.category}</p>
                        <p><span className="text-red-600 font-bold">Tags</span> : {data.tags}</p>
                    </div>
                    <div>
                        <Button theme="danger" className=" flex items-center justify-center gap-1 py-2 sm:py-3.5 px-4 sm:px-6">
                            <Icon>play_circle</Icon>
                            Watch Now
                        </Button>

                    </div>
                </div>
            </>
        );
        return design;
    }

    const data = [
        {
            image:"sanddust2.jpg",
            caption: <Caption 
            data={{title:"SandDust",
            rating:5,
            duration:"2:45:52:hrs",
            staring:"Tom Cruise, Jon Voight and Emmanuelle Beart",
            category:" Comedy, Action and Entertainment.",
            tags:" Comedy, Action and Entertainment."
            }}
            />
        },
        {
            image:"movie-abc.png",
            caption: <Caption 
            data={{title:"GoDZila",
            rating:4,
            duration:"2:45:52:hrs",
            staring:"Tom Cruise, Jon Voight and Emmanuelle Beart",
            category:" Comedy, Action and Entertainment.",
            tags:" Comedy, Action and Entertainment."
            }}
            />
        },
        {
            image:"movie-xyz-.png",
            caption: <Caption 
            data={{title:"KingKong",
            rating:4,
            duration:"2:45:52:hrs",
            staring:"Tom Cruise, Jon Voight and Emmanuelle Beart",
            category:" Comedy, Action and Entertainment.",
            tags:" Comedy, Action and Entertainment."
            }}
            />
        }
    ]
    const design = (
        <>
            <div className="hidden sm:block">
                <Carousel data={data} height={ 650} counting={false}/>
            </div>
            <div className="block sm:hidden">
                <Carousel data={data} height={ 300} counting={false} dots={false}/>
            </div>
           
        </>
    );
    return design;
}
export default mainBannerIndex;