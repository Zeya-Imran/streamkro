const card = ({children,title=null,actions=null})=>{
  const design = (
    <>
        <div className="p-4 shadow-lg ronded-md bg-white rounded-sm">
            {
              title ? <h1 className="text-2xl font-medium mb-4">{title}</h1> : null
            }
            <div>
              {children}
            </div>
            <div>
              {
                actions ? <div className="flex gap-4 mt-5">{actions}</div> : null
              }
            </div>
        </div>
    </>
  );
  return design;
}
export default card
