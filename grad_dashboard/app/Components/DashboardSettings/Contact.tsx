import Link from "next/link";
import Form from 'next/form'

import { motion } from "framer-motion"

interface ContactProps {
    title: string;
} 

const Contact: React.FC<ContactProps> = ({title}) => {
  const linkedin = "https://www.linkedin.com/";
  const email = "sidbanerjee@berkeley.edu";
  const calendly = "https://calendly.com/";
  const facebook = "https://www.facebook.com/";

  const links = [["LinkedIn", "https://www.linkedin.com/"],  ["Email", "sidbanerjee@berkeley.edu"], ["Calendly", "sidbanerjee@berkeley.edu"], ["Facebook", "https://www.facebook.com/"]]

  return (
    <div id="contact-panel" className="relative">
        <div id="contact-panel-inner">
            <h1 className="text-white font-semibold text-xl">{title}</h1>
            {/* <hr className="my-4"/> */}
            <div id="inputs" className="pt-[40px] pb-[100px] grid grid-cols-2 gap-x-[150px] gap-y-[40px]">

                {links.map((value, index) => (
                    <motion.div
                        initial={{ y: 25, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1,
                        delay: 0.075 * index,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        key={value[0]}
                    >
                        <div id="text-field" className="flex flex-col">
                            <p className="font-semibold text-xs text-white uppercase">{value[0]}</p>
                            <input name="first_name" className="transition ease-in-out duration-150 mt-2 bg-[#1B1B1B] border-b-2 border-[#282828] h-[35px] w-[300px] text-sm outline-none focus:border-white" defaultValue={value[1]}/>
                        </div>
                    </motion.div>
                ))}

            </div>
            <button className="transition ease-in-out duration:300 absolute mt-[40px] mb-[20px] bottom-0 right-0 bg-[#282828] w-[60px] h-[30px] rounded-md text-sm hover:bg-[#353535]">Save</button>
        </div>
    </div>
  );
};

export default Contact;
