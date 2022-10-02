import {Formik, Form} from "formik";
import * as yup from "yup";
import {Button} from "../";

const form = ({children, ...rest})=>{
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
    const design = (
        <>
            <Formik
            initialValues={defaultValues}
            validationSchema={schema}
            {...rest}
            >
                {
                    (formik)=>{
                        return(
                            <Form>
                                {children}
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