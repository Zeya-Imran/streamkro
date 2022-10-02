import Image from "next/image";
import Logo from "../../components/logo";
import ContactForm from "../../components/contact-form";
import {IconButton} from "../";
const index = ()=>{
    const design = (
        <>
            <div className="bg-slate-900 p-16"> 
                <div className="mx-auto flex flex-col sm:flex-row sm:justify-between gap-5 sm:gap-0">
                    
                    <div className="flex flex-col gap-5">
                        <div>
                            <Logo />
                            <p className="text-gray-300 mt-5">
                                Movies, Daramas, Entertainmen.
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <button className="bg-slate-800">
                                <Image src="/andorid.png" width={150} height={48} alt="apple"/>
                            </button>
                            <button className="bg-slate-800">
                                <Image src="/apple.png" width={150} height={48} alt="apple"/>
                            </button>
                        </div>
                    </div>


                        <div className="border-y border-orange-500 sm:border-y-0 my-0">
                           <h1 className="text-gray-300 text-xl mt-5">Follow us</h1>
                           <div className="text-gray-300 my-5 flex gap-3">
                                <IconButton theme="outline-danger" btnSize="xl">home</IconButton>
                                <IconButton theme="outline-danger" btnSize="xl">home</IconButton>
                                <IconButton theme="outline-danger" btnSize="xl">home</IconButton>
                                <IconButton theme="outline-danger" btnSize="xl">home</IconButton>
                                <IconButton theme="outline-danger" btnSize="xl">home</IconButton>
                           </div>
                        </div>
               
                   
                        <div className="w-full sm:w-3/12">
                            <h1 className="text-gray-300 text-xl">Contact us</h1>
                            <div className="text-gray-300 my-5">
                                <ContactForm />
                            </div>
                        </div>
                      

                    
                </div>
            </div>
        </>
    );
    return design
}
export default index;