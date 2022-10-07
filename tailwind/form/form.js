import {Formik, Form} from "formik";
import * as yup from "yup";
import {Button} from "../";
import {Input} from "./";


const form = ({fields})=>{
  console.log(fields);
   const defaultValues = {
    email: "",
    password:""
   }
   const schema = yup.object(
    {
        email: yup.string().required("Email is required").email("Enter the valid Email-Id"),
        password:yup.string().required("Password is required")
    }
   );

   // const Fields = ()=>{
   //   const allFields = fields.map((item,index)=>{
   //     const {component, props} = item;
   //     switch (component) {
   //       case "input": return <Input  {...props}/>
   //       default: return null
   //     }
   //   });
   //   return allFields;
   // }
    const design = (
        <>
            <Formik>
                {
                    (formik)=>{
                        return(
                            <Form>
                            
                                <Button type="submit" theme="danger">Submit</Button>
                            </Form>
                        );
                    }
                }
            </Formik>
        </>
    );
    return design;
}
export default form;
