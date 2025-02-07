import Link from "next/link";
import Form from 'next/form'

import { motion } from "framer-motion"

interface BiographyProps {
    title: string;
    first_name: string;
    last_name: string;
    degree?: string;
    grad_date?: string;
    location?: string;
} 

const Biography: React.FC<BiographyProps> = ({title, first_name, last_name, location="Berkeley, CA", degree="B.S. Computer Science", grad_date=2013}) => {
  const fields = [["First Name", first_name], ["Last Name", last_name], ["Degree", degree], ["Graduation Date", grad_date], ["Location", location]]

  return (
    <div id="biography-panel" className="relative">
        <div id="biography-panel-inner">
            <h1 className="text-slate-700 font-semibold text-xl">{title}</h1>
            {/* <hr className="my-4"/> */}
            <div id="inputs" className="pt-[40px] pb-[100px] grid grid-cols-2 gap-x-[150px] gap-y-[40px]">
                {fields.map((value, index) => (
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
                            <p className="font-semibold text-xs text-slate-700 uppercase">{value[0]}</p>
                            <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" defaultValue={value[1]}/>
                        </div>
                    </motion.div>
                ))}
            </div>
            <button className="absolute mt-[40px] mb-[20px] bottom-0 right-0 text-sm font-medium text-white bg-sky-900 py-[5px] px-3 hover:bg-sky-700 rounded-md transition">Save</button>
        </div>
    </div>
  );
};

export default Biography;
