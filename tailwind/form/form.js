import {Formik, Form} from "formik";
import * as yup from "yup";
import {Button} from "../";
import {Input, UploadInput, Select} from "./";


const form = ({fields,grid=1,gap=4, ...rest})=>{
  console.log(fields);
   const schema =
    {
        email: yup.string().required("Email is required").email("Enter the valid Email-Id"),
        password:yup.string().required("Password is required"),
        fullname: yup.string().required("This field is required"),
        mobile: yup.string().required("This field is required"),
        title: yup.string().required("This field is required"),
        desc: yup.string().required("This field is required"),
        duration: yup.string().required("This field is required"),
        starring: yup.string().required("This field is required"),
        thumbnail: yup.string().required("This field is required"),
        category: yup.string().required("This field is required"),
        movie: yup.string().required("This field is required"),
        tags: yup.string().required("This field is required"),

    }

   const defaultValues = {
   }
   const validation = {};
   fields.map((items,index)=>{
     const {props} = items;
     let {name} = props;
     defaultValues[name] = '';
     validation[name] = schema[name];
    });

   const Fields = ()=>{
     const allFields = fields.map((item,index)=>{
       const {component, props} = item;
       switch (component) {
         case "input": return <Input  {...props} key={index}/>
          case "upload": return <UploadInput  {...props} key={index}/>
          case "select": return <Select  {...props} key={index}/>
         default: return null
       }
     });
     return allFields;
   }
    const design = (
        <>
            <Formik
            initialValues={defaultValues}
            validationSchema={yup.object(validation)}
            {...rest}

            >
                {
                    (formik)=>{
                        return(
                            <Form>
                                <div className={`grid grid-cols-${grid} gap-${gap}`}>
                                    <Fields />
                                    <Button type="submit" theme="danger" className="w-fit">Submit</Button>
                                </div>
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
