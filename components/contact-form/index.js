import {
    Form,
    Email,
    Input
} from "../../tailwind";
const contactForm = ()=>{
    const design = (
        <>
           <Form>
                <div className="flex flex-col gap-5 mb-5">
                    <Input name="username" placeholder="Your Name" />
                    <Email placeholder="email@gmail.com"  />
                    <Input name="mobile" placeholder="Mobile no" />
                    <Input name="message" type="text" placeholder="Your Message" textarea/>
                </div>
           </Form>
        </>
    );
    return design;
}
export default contactForm;