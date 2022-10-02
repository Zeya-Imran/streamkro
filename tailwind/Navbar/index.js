import React from "react";
import { useEffect, useState,useRef } from "react";
import Link from "next/link";
import { Expand } from "../effect";
import {IconButton} from ".."
const sample = {
    //container size of Navbar
    fluid:"sm:full mx-auto px-4",
    container:"sm:w-4/5 mx-auto px-4",
    //background color for Navbar and hover effect
    dark: {
        nav: "bg-slate-900 text-white sm:px-4",
        hover: "text-white py-4 sm:py-6 px-8 sm:px-10 hover:bg-slate-800 hover:text-white"
      },
      light: {
        nav: "bg-gray-100 text-black sm:px-4",
        hover: "text-black py-4 sm:py-6 px-8 sm:px-10 hover:bg-gray-50"
      },
    primary: {
        nav:"bg-indigo-600 px-4 text-white",
        hover:"hover:bg-indigo-500 px-10 py-6 text-white"
    },
    secondary: {
        nav:"bg-blue-600 px-4 text-white",
        hover:"hover:bg-blue-500 px-10 py-6 text-white"
    },
    warning: {
        nav:"bg-orange-600 px-4 text-white",
        hover:"hover:bg-orange-500 px-10 py-6 text-white"
    },
    danger: {
        nav:"bg-red-600 px-4 text-white",
        hover:"hover:bg-red-500 px-10 py-6 text-white"
    },
    success: {
        nav:"bg-green-600 px-4 text-white",
        hover:"hover:bg-green-500 px-10 py-6 text-white"
    },
    info: {
        nav:"bg-cyan-600 px-4 text-white",
        hover:"hover:bg-cyan-500 px-10 py-6 text-white"
    },
    //position brand name and menu in Navbar
    variant:{
        start:"flex flex-col sm:flex-row sm:items-center sm:justify-start gap-12",
        end:"flex flex-col sm:flex-row sm:items-center sm:justify-end gap-12",
        between:"flex flex-col sm:flex-row sm:items-center sm:justify-between",
        around:"flex flex-col sm:flex-row sm:items-center sm:justify-around",
        evenly:"flex flex-col sm:flex-row sm:items-center sm:justify-evenly"
    }

}
const Navbar = ({fullwidth=true,theme="primary", variant="start",menu, toolbar=null})=>{
const [show,setShow] =useState(false)
   const Menus = ({item})=>{
    const MenuDesign = (
        <>
            <div className={sample[theme].hover}>
                <Link href={item.anchor}>{item.label}</Link>
            </div>
        </>
    );
    return MenuDesign;
   }
    const design = (

        <>
            <nav className={`${sample[theme].nav}` }>
                <div  className="flex">
                <div className={`
                    ${sample.variant[variant]} 
                    ${fullwidth ? sample.fluid : sample.container}
                `}>
                    
                        <Link href="/">
                            <a className={sample[theme].hover}>{menu.brand}</a>
                        </Link>
                       
                    </div>
                    <div className="hidden sm:flex flex-col sm:flex-row">
                       {
                        menu.link.map((item)=>{
                            return <Menus key={item.id}  item={item}/>
                        })
                       }
                   
                    {
                        toolbar ? <div className="hidden sm:flex gap-3 justify-center items-center">
                            {
                                toolbar.map((item,index)=>{
                                    return <div key={index} className="mt-5">{item.label}</div>
                                })
                            }
                        </div> : null
                    }
                     
                </div>
              
                </div>
               
            </nav>
            <Expand state={show} className="fixed bottom-0 left-0 w-full bg-slate-900 z-50">
            <div className="flex flex-col sm:flex-row">
                       {
                        menu.link.map((item)=>{
                            return <Menus key={item.id}  item={item}/>
                        })
                       }
                    </div>
                   {
                        toolbar ? <div className="flex gap-3 p-4">
                            {
                                toolbar.map((item,index)=>{
                                    return <div key={index}>{item.label}</div>
                                })
                            }
                        </div> : null
                    }
            </Expand>
        </>
    );
    return design;
}
export default Navbar;