import SweetAlert from "react-bootstrap-sweetalert";
import {useSelector, useDispatch} from "react-redux";

const index = ({title=null, children})=>{
  const dispatch = useDispatch(); //calling as hooks for closing SweetAlert
  const {DialogReducer} = useSelector(response=>response);
  const design = (
    <>
      <div className="text-black">
        <SweetAlert
        title={title}
        show={DialogReducer.open}
        showConfirm={false}
  
        className="relative"
        >
        <button className="text-xs absolute top-3 right-3 text-black"
        onClick={()=>dispatch({type:"CLOSE_DIALOG"})}

        >Close</button>
        {children}</SweetAlert>
      </div>
    </>
  );
  return design;
}
export default index;
