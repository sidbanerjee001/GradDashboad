import Link from "next/link";
import Form from 'next/form'

import { motion } from "framer-motion"

interface BiographyProps {
    title: string;
} 

const Biography: React.FC<BiographyProps> = ({title}) => {
  const firstName = "Quimbulous";
  const lastName = "Dobby";
  const degree = "B.S. Computer Science";
  const gradYear = 2013;
  const location = "Denver, CO"

  return (
    <div id="biography-panel" className="relative border-[#282828] border-2 rounded-md">
        <div id="biography-panel-inner" className="p-[40px]">
            <h1 className="text-white font-semibold text-xl">{title}</h1>
            <div id="inputs" className="my-[40px] grid grid-cols-2 gap-x-[150px] gap-y-[40px]">
                <div id="text-field" className="flex flex-row items-center">
                    <p className="font-semibold text-xs text-white uppercase w-[100px]">First Name</p>
                    <input name="first_name" className="ml-[20px] bg-[#1B1B1B] border-[#282828] border-2 rounded-md h-[35px] w-[300px] text-sm px-2" defaultValue={firstName}/>
                </div>
                <div id="text-field" className="flex flex-row items-center">
                    <p className="font-semibold text-xs text-white uppercase w-[100px]">Last Name</p>
                    <input name="first_name" className="ml-[20px] bg-[#1B1B1B] border-[#282828] border-2 rounded-md h-[35px] w-[300px] text-sm px-2" defaultValue={lastName}/>
                </div>
                <div id="text-field" className="flex flex-row items-center">
                    <p className="font-semibold text-xs text-white uppercase w-[100px]">Degree</p>
                    <input name="first_name" className="ml-[20px] bg-[#1B1B1B] border-[#282828] border-2 rounded-md h-[35px] w-[300px] text-sm px-2" defaultValue={degree}/>
                </div>
                <div id="text-field" className="flex flex-row items-center">
                    <p className="font-semibold text-xs text-white uppercase w-[100px]">Grad Year</p>
                    <input name="first_name" className="ml-[20px] bg-[#1B1B1B] border-[#282828] border-2 rounded-md h-[35px] w-[300px] text-sm px-2" defaultValue={gradYear}/>
                </div>
                <div id="text-field" className="flex flex-row items-center">
                    <p className="font-semibold text-xs text-white uppercase w-[100px]">Location</p>
                    <input name="first_name" className="ml-[20px] bg-[#1B1B1B] border-[#282828] border-2 rounded-md h-[35px] w-[300px] text-sm px-2" defaultValue={location}/>
                </div>
            </div>
            <button className="transition ease-in-out duration:300 absolute mt-[40px] mx-[40px] mb-[20px] bottom-0 right-0 bg-[#282828] w-[60px] h-[30px] rounded-md text-sm hover:bg-[#353535]">Save</button>
        </div>
    </div>
  );
};

export default Biography;
