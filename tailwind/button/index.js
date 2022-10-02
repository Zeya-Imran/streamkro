const sample = {
  //solid button design
  "primary": "bg-teal-600 text-white px-4 py-2 rounded-sm shadow-sm",
  "secondary": "bg-blue-600 text-white px-4 py-2 rounded-sm shadow-sm",
  "warning": "bg-orange-600 text-white px-4 py-2 rounded-sm shadow-sm",
  "danger": "bg-red-600 text-white px-4 py-2 rounded-sm shadow-sm",
  "success": "bg-green-600 text-white px-4 py-2 rounded-sm shadow-sm",
  "info": "bg-cyan-600 text-white px-4 py-2 rounded-sm shadow-sm",
  //Outine button design
  "outline-primary": "border border-teal-600 text-teal-600 px-4 py-2 rounded-sm shadow-sm",
  "outline-secondary": "border border-blue-600 text-blue-600 px-4 py-2 rounded-sm shadow-sm",
  "outline-warning": "border border-orange-600 text-orange-600 px-4 py-2 rounded-sm shadow-sm",
  "outline-danger": "border border-red-600 text-red-600 px-4 py-2 rounded-sm shadow-sm",
  "outline-success": "border border-green-600 text-green-600 px-4 py-2 rounded-sm shadow-sm",
  "outline-info": "border border-cyan-600 text-cyan-600 px-4 py-2 rounded-sm shadow-sm",
  //Flat button design
  "text-primary": "text-teal-600 px-4 py-2 rounded-sm",
  "text-secondary": "text-blue-600 px-4 py-2 rounded-sm",
  "text-warning": "text-orange-600 px-4 py-2 rounded-sm",
  "text-danger": "text-red-600 px-4 py-2 rounded-sm",
  "text-success": "text-green-600 px-4 py-2 rounded-sm",
  "text-info": " text-cyan-600 px-4 py-2 rounded-sm",
  //simple button design
  "no-design": "text-black px-4 py-2"
}
const button = (
  {
    className=null,
    children,
    theme="no-design",
    ...rest
  })=>{
  const design = (
    <>
      <button 
      className={sample[theme]+" "+className}
      {...rest}
      >{children}</button>
    </>
  );
  return design;
}
export default button;
