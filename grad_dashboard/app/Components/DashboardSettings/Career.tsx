import Link from "next/link";
import Form from 'next/form'
import ResizableTextBox from "../UI/ResizableTextArea";

import { motion } from "framer-motion"
import { useEffect, useState } from "react";

interface CareerProps {
    title: string;
} 

interface ExperienceProps {
    company: string;
    role: string;
    start: string;
    end: string;
    hyperlink?: string;
    description: string;
}

const ExperienceField: React.FC<ExperienceProps> = ({company, role, start, end, hyperlink="", description}) => {
    const [editMode, toggleEditMode] = useState(false);

    return (
        <>
        {!editMode ? <div className="w-[700px] bg-[#242424] rounded-lg">
            <div className="flex flex-row items-center p-4">
                <h1 className="text-white">{role}</h1>
                <div className="aspect-square mx-3 w-[5px] h-[5px] rounded-full bg-white"></div>
                <h2 className="text-white">{company}</h2>
            </div>
            <div className="p-4">
                <p className="text-xs text-subtext">{description}</p>    
            </div>
            <div className="p-4 w-full">
                <button onClick={() => toggleEditMode(!editMode)} className="text-sm text-white hover:text-subtext transition">Edit</button>
            </div>
        </div> : 
        <div className="w-[700px] bg-[#242424] rounded-lg">
            <div className="m-5">
                <div className="w-full grid grid-cols-2 gap-y-3 justify-between">
                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2">Company / Organization</h1>
                        <input name="first_name" className="transition outline-none focus-within:border-blue-500 rounded-sm bg-[#393939] border-[1px] border-[#747474] text-sm h-[30px] w-[300px] p-2" placeholder={"Enter text here..."} defaultValue={company}/>
                    </div>
                    <div id="field" className="justify-self-end">
                        <h1 className="text-sm my-2">Role</h1>
                        <input name="first_name" className="transition outline-none focus-within:border-blue-500 rounded-sm bg-[#393939] border-[1px] border-[#747474] text-sm h-[30px] w-[300px] p-2" placeholder={"Enter text here..."} defaultValue={role}/>
                    </div>

                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2">Start Date</h1>
                        <input name="first_name" className="transition outline-none focus-within:border-blue-500 rounded-sm bg-[#393939] border-[1px] border-[#747474] text-sm h-[30px] w-[300px] p-2" placeholder={"Enter date here..."} defaultValue={start}/>
                    </div>
                    <div id="field"  className="justify-self-end">
                        <h1 className="text-sm my-2">End Date</h1>
                        <input name="first_name" className="transition outline-none focus-within:border-blue-500 rounded-sm bg-[#393939] border-[1px] border-[#747474] text-sm h-[30px] w-[300px] p-2" placeholder={"Enter date here..."} defaultValue={end}/>
                    </div>
                </div>

                <div id="field" className="my-3">
                        <h1 className="text-sm my-2">Description</h1>
                        <ResizableTextBox minHeight={100} placeholder="Type something..." defaultText={description}/>
                </div>

                <button className="transition text-white hover:text-subtext" onClick={() => toggleEditMode(!editMode)}>Save</button>
            </div>
        </div>}
        </>
    )
}

const Career: React.FC<CareerProps> = ({title}) => {
  const firstName = "Quimbulous";
  const lastName = "Dobby";
  const degree = "B.S. Computer Science";
  const gradYear = 2013;
  const location = "Denver, CO"

  const fields = [["Company", "CNMAT @ UC Berkeley"], ["Role", "Researcher"], ["Start Date", "Jan 2025"], ["End Date", "Present"], ["Hyperlink", "https://cnmat.berkeley.edu/"]];

  const experiences = [["Researcher", "CNMAT @ UC Berkeley", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."], ["SWE Intern", "Tona AI", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]];

  return (
    <div id="biography-panel" className="relative">
        <div id="biography-panel-inner">
            <h1 className="text-white font-semibold text-xl">{title}</h1>
            {/* <hr className="my-4"/> */}

            <div id="experience-list" className="pt-[40px] pb-[100px] grid grid-cols-1 gap-x-[150px] gap-y-[40px] w-[750px]">
                {experiences.map((value, index) => (
                    <ExperienceField key={"experience-"+value[0]+value[1]+value[2]} role={value[0]} company={value[1]} description={value[2]} start={"Jan 2025"} end={"Present"} hyperlink={"https://cnmat.berkeley.edu/"}/>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Career;
