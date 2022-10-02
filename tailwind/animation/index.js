import { useState, useEffect } from "react";
import { useSprings, animated } from "react-spring";
import { useGesture, useDrag } from "react-use-gesture";
import useMeasure from "react-use-measure";
import {Icon, Button} from "../";
import Styles from "./animation.module.css";
import { useDispatch } from 'react-redux';

export const Carousel = ({data, height=720, arrow=true, counting=true, dots=true})=>{
    const [count,setCount] = useState(0);
    const [move,setMove] = useState(0);
    // slider 
    useEffect(()=>{
        let timer = setTimeout(next,5000);
        api.start({
            x:-move+"%"
        });
        return ()=>{
            clearTimeout(timer);
        }
    },[move]);

    const [springs,api] = useSprings(data.length,(index)=>({
        x:"0%"
    }))
    const prev = ()=>{
        if((count+1)>1)
        {
            setCount(count-1);
            setMove(move-100);
        }
        else{
            setCount(data.length-1);
            setMove(100*(data.length-1));
        }
        
    }
    const next = ()=>{
        if((count+1) < data.length)
        {
            setCount(count+1);
            setMove(move+100);
        }
        else{
            setCount(0);
            setMove(0);
        }
        
    }

    const dostsControl = (index)=>{
        setCount(index);
        setMove(100*index)
    }
    const onDragEnd = (e)=>{
        let left = e.direction[0];
        if(left > 0)
        {
            prev();
        }
        else{
            next();
        }
    }
    const bind = useGesture({
        onDragEnd:onDragEnd
    })

    const Anim = ({styles,index})=>{
       const a = (
            <>
                <animated.div 
                    
                    {...bind()} 
                    style={{
                    width: "100%",
                    height: height,
                    background: `url(${data[index].image})`,
                    bakcgroundSize:"cover",
                    ...styles
                }}>
                    <div className={`flex items-center border h-full ${Styles["caption-bg"]}`}>
                        <div className="border p-8 sm:p-16 w-full">
                            {data[index].caption}
                        </div>
                    </div>
                </animated.div>
            </>
        );
        return a;
    }
    const design = (
        <>
            <div className="overflow-hidden relative">
                <div className="flex" style={{
                    width: `${100*data.length}%`
                }}>
                    {
                        springs.map((styles,index)=>{
                            return <Anim key={index} styles={styles} index={index} />
                            
                        })
                    }
                </div>
                <div className="absolute top-0 left-0 border p-5 h-full flex flex-col justify-between">
                <label>{counting ? (count+1/data.length) : null}</label>
                    {arrow ?
                    <button onClick={prev}><Icon className="text-white">arrow_back_ios</Icon></button> 
                    : null}
                    <label></label>
                </div>

                <div className="absolute top-0 right-0 border p-5 h-full flex flex-col justify-between">
                    <label></label>
                    {
                    arrow ?
                    <button onClick={next}><Icon className="text-white">arrow_forward_ios</Icon></button>
                    : null}
                    <label></label>
                </div>
               { dots ?<div className="absolute bottom-0 left-0 border flex w-full justify-center p-5">
                    <div className="flex gap-3">
                    {
                       data.map((item,index)=>{
                            return(
                               <>
                                 <button onClick={()=>dostsControl(index)} key={index} style={{
                                    width:50,
                                    height:5,
                                    background: count === index ? "white" :"rgba(255,255,255,0.3)"
                                }}>
                                   
                                </button>
                               </>
                            );
                       }) 
                    }
                    </div>
                </div>:null}
            </div>
        </>
    );
    return design;
}

export const Slider = ({data,vertical=false})=>{
    const dispatch = useDispatch(); //calling as Hooks;
    const [springs,api] = useSprings(data.length,((index)=>({
        x:0,
        y:0
    })));
    
    const [move,setMove] = useState(0);
    const [count,setCount] = useState(0);
    const [image,imageBound] = useMeasure(); //calliing hooks
    const [main,mainBound] = useMeasure();

    const handleDrag = ({offset})=>{
        vertical ? api.start({
            y: offset[1]
        })
        :
        api.start({
            x: offset[0]
        });
    }

    const bind = useDrag(handleDrag,{
        bounds:{
            top:0, //for future use, if u want to move upward direction
            bottom:0, // same for down
            right:0,
            left: -((imageBound.width*data.length)-(mainBound.width-(imageBound.width/3)))
        }
    }); // for Drag as slide
    const next = ()=>{
        if(count < data.length - 4)
        {
            setCount(count+1);
            vertical ? setMove(move+imageBound.height) : setMove(move+imageBound.width);
        }
        else
        {
            return;
        }
    }
    const prev = ()=>{
        
        if(count > 0)
        {
            setCount(count-1);
            vertical ?  setMove(move-imageBound.height) : setMove(move-imageBound.width);
        }
        else
        {
            return;
        }
    }
    useEffect(()=>{
        api.start({
           x:vertical ? null : -move,
           y:vertical ? -move : null
        })
    },[move]);

    const view = (index)=>{
        let payload = data[index];
        dispatch({
            type:"PREVIEW_IMAGE",
            payload:payload
        });
    }
   
    const Anim = ({styles,index})=>{
        const design = (
            <>
                <animated.div 
                onClick={vertical ? ()=>view(index) : null}
                className={Styles.noSelect}
                {...bind()}
                ref={image}
                style={{
                    ...styles,
                    width: vertical ? "100%" : "25%",
                    height:181,
                    border:"2px solid white",
                    backgroundImage:`url(${data[index].thumbnail})`,
                    backgroundSize: 'cover'
                    

                }}>
                   
                   <div className={`h-full flex flex-col gap-2 pl-4 justify-center ${Styles['caption-bg']}`} >
                    <h1 className="text-xl">{data[index].title}</h1>
                    <p>{data[index].duration}</p>
                    <div>
                     <Button theme="danger" className="px-2.5 py-1.5 text-sm flex items-center gap-2">
                        <Icon>play_circle</Icon>
                        Play Now
                        </Button>
                    </div>

                    </div>
                </animated.div>
            </>
        );
        return design;
    }
    const design = (
        <>
           <div className={`overflow-hidden ${vertical ? null: 'relative'}` } ref={main}>
            <div className={`flex gap-4 ${vertical ? 'flex flex-col':'flex-row'}` }style={{
                width: vertical ? "100%" : (25*data.length)+"%"
            }}>
                {
                springs.map((styles,index)=>{
                    return <Anim key={index} styles={styles} index={index} />
                })
                }
            </div>
                <div className=
                {
                    `flex absolute 
                    ${vertical ? 'w-full top-0 left-0 justify-center' : 'h-full items-center top-0 left-0' } `
                }
                >
                    <button className={vertical ? 'px-4 pt-2' : 'py-3 px-2'}   style={{background:"rgba(0,0,0,0.3"}} onClick={prev}>
                        <Icon className="text-white">
                            { vertical ?  'arrow_upward' : 'arrow_back_ios'
                            }</Icon>
                    </button>
                </div>
                <div className=
                {
                    `flex absolute 
                    ${vertical ? 'w-full bottom-0 left-0 justify-center' : 'h-full items-center top-0 right-0' } `
                }>
                <button className={vertical ? 'px-4 pt-2' : 'py-3 px-2'}   style={{background:"rgba(0,0,0,0.3"}} onClick={next}>
                        <Icon className="text-white">
                            { vertical ?  'arrow_downward' : 'arrow_forward_ios'
                            }</Icon>
                    </button>
                </div>
           </div>
        </>
    );
    return design;
}