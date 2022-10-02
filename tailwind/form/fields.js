import {Field, ErrorMessage} from "formik";
export const Email = ({...rest})=>{
    const designEmail = (
        <>
            <Field className="p-2 rounded-sm" name="email" type="email" {...rest} />
            <ErrorMessage name="email" component="p" />
        </>
    );
    return designEmail;
}

export const Password = ({...rest})=>{
    const designPassword = (
        <>
            <Field className="p-2 rounded-sm" name="password" type="password" {...rest} />
            <ErrorMessage name="password" component="p" />
        </>
    );
    return designPassword;
}

export const Input = ({name, type="text",textarea=false, ...rest})=>{
    const designInput = (
        <>
            <Field className="p-2 rounded-sm" {...rest} name={name} type={type} as={textarea ? "textarea" : null } />
            <ErrorMessage name={name} component="p" />
        </>
    );
    return designInput;
}

export const Select = ({name,data, ...rest})=>{
    const designSelect = (
        <>
            <Field {...rest} name={name} as="select">
                {
                    data.map((item,index)=>{
                        return  <option key={index} value={item.value} title={item.label}>{item.label}</option>
                    })
                }
            </Field>
            <ErrorMessage name={name} component="p" />
        </>
    );
    return designSelect;
}

export const Radio = ({name,data, ...rest})=>{
    const designRadio = (
        <>
            {
                data.map((item,index)=>{
                    return (
                        <>
                            <div className="flex gap-3">
                                <Field key={index} name={name} value={item.value} type="radio" title={item.label} /> 
                                <label>{data.label}</label>
                            </div>
                        </>
                    );
                })
            }
        </>
    );
    return designRadio;
}

export const Checkbox = ({name,value,label, ...rest})=>{
    const designCheckbox = (
        <>

             <div className="flex gap-2 items-center">
                 <Field  {...rest} type="checkbox" title={name} name={name} /> 
                 <label>{label}</label>
                 <ErrorMessage name={name} component="p" />
            </div>
      
        </>
    );
    return designCheckbox;
}