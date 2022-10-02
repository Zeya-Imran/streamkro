import {Navbar, IconButton, Footer} from "../../tailwind";
import Logo from "../logo";
const template = ({children})=>{
  console.table({children});
    const menus = 
    {
      id:1,
      brand:<Logo />,
      link:[
        {
          
          id:2,
          label:"HOME",
          anchor:"/"
        },
        {
          id:3,
          label:"MOVIES",
          anchor:"/movies"
        },
        {
          id:4,
          label:"VIDEOS",
          anchor:"/video"
        },
        {
          id:5,
          label:"BLOG",
          anchor:"/blog"
        },
        {
            id:6,
            label:"CONTACT",
            anchor:"/contact"
          }
      ]
    }
    const toolbar = [
        {
            label:<IconButton>search</IconButton>
        },
        {
            label:<IconButton>person</IconButton>
        }
    ];
    const design = (
        <>
            <Navbar menu={menus} variant="between" toolbar={toolbar} fullwidth={false} theme="dark" />
            <div>
              {children}
            </div>
            <Footer />
            
        </>
    );
return design;
}
export default template;