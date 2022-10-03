import Logo from "../logo";
import { IconButton } from "../../tailwind";
import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
const adminIndex = ({children})=>{
    const [sidebar,setSidebar] = useState(null);
    const [section,setSection] = useState(null);
    const [toggle,setToggle]   = useState("format_indent_decrease");
    const [open,setOpen] = useState(true);
    const dispatch = useDispatch();//calling as hooks

    //plus or add  icon open close
    useEffect(()=>{
      if(open)
      {
        return(
          setSidebar("w-0 sm:w-2/12"),
          setSection("w-full sm:w-10/12"),
          setToggle("format_indent_decrease")

        );
      }
      else {
        return(
          setSidebar("absolute sm:static top-0 left-0 z-10 w-8/12 min-h-screen sm:w-0"),
          setSection("w-full"),
          setToggle("format_indent_increase")
        );
      }
    },[open]);
    //sweetalert open close throw redux;


     const design = (
        <>
          <div className="min-h-screen flex">
            <div className={`bg-white shadow-2xl overflow-x-hidden ${sidebar}`}>
            sidebar</div>
            <div className={`bg-slate-900  ${section}`}>
                <nav className="px-5 py-3 bg-gray-100 flex justify-between items-center">
                    <Logo />
                    <div className="flex gap-4">
                      <IconButton className="border flex items-center text-red-600"
                      onClick={()=>setOpen(!open)}>
                       {toggle}</IconButton>
                       <IconButton className="border flex items-center bg-red-600 text-white"
                       onClick={()=>dispatch({
                         type:"OPEN_DIALOG"
                       })}

                       >add</IconButton>
                     </div>
                </nav>
                <div className="p-5 text-white border">
                  {children}
                </div>
            </div>
          </div>
        </>
    );
    return design
}
export default adminIndex;
