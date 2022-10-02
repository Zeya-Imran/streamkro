const icon = ({children,outline=false,className=null})=>{
    const design = (
        <>
            <span className={
                outline ? 
                `${className} materila-icons-outlined` : 
                `${className} material-icons`}>
                {children}</span>
        </>
    );
    return design;
}
export default icon;