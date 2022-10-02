import { Icon } from "../";

const btnSize = {
    sm:"w-10 h-10 rounded-full",
    md:"w-12 h-12 rounded-full",
    lg:"w-14 h-14 rounded-full",
    xl:"w-16 h-16 rounded-full",

}

const sample = {
 //solid button design
 "primary": "bg-teal-600 text-white shadow-sm",
 "secondary": "bg-blue-600 text-white shadow-sm",
 "warning": "bg-orange-600 text-white shadow-sm",
 "danger": "bg-red-600 text-white shadow-sm",
 "success": "bg-green-600 text-white shadow-sm",
 "info": "bg-cyan-600 text-white shadow-sm",
 //Outine button design
 "outline-primary": "border border-teal-600 text-teal-600 shadow-sm",
 "outline-secondary": "border border-blue-600 text-blue-600 shadow-sm",
 "outline-warning": "border border-orange-600 text-orange-600 shadow-sm",
 "outline-danger": "border border-red-600 text-red-600 shadow-sm",
 "outline-success": "border border-green-600 text-green-600 shadow-sm",
 "outline-info": "border border-cyan-600 text-cyan-600 shadow-sm",
 //Flat button design
 "text-primary": "text-teal-600 ",
 "text-secondary": "text-blue-600 ",
 "text-warning": "text-orange-600 ",
 "text-danger": "text-red-600 ",
 "text-success": "text-green-600 ",
 "text-info": " text-cyan-600 ",
 //simple button design
 "no-design": "text-black "
 }
 const iconbutton = (
 {
  className=null,
  children,
  theme="no-design",
  onClick=null,
  onMouseOver=null,
  size="md"
 })=>{
 const design = (
  <>
  <button 
  className={"flex justify-center items-center"+ sample[theme]+" "+className+" "+btnSize[size]}
  onClick={onClick} 
  onMouseOver={onMouseOver}
  type="button"
  >
  <Icon>{children}</Icon>
  </button>
  </>
 );
 return design;
 }
 export default iconbutton;
 