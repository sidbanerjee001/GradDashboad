import Link from "next/link";
import Form from 'next/form'
import ResizableTextBox from "../UI/ResizableTextArea";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { motion } from "framer-motion"
import { ReactNode, useEffect, useState } from "react";

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

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
  }

function Modal({ isOpen, onClose }: ModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[700px] bg-gray-50 rounded-lg border-[1.5px] border-blue-100">
            <h1 className="text-slate-700 m-5 font-semibold">Add Experience</h1>
            <div className="m-5">
                <div className="w-full grid grid-cols-2 gap-y-3 justify-between">
                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2 text-slate-700">Role</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."}/>
                    </div>
                    <div id="field" className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">Company / Organization</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."}/>
                    </div>

                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2 text-slate-700">Start Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."}/>
                    </div>
                    <div id="field"  className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">End Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."}/>
                    </div>
                </div>

                <div id="field" className="my-10">
                        <h1 className="text-sm my-2 text-slate-700">Description</h1>
                        <ResizableTextBox minHeight={100} placeholder="Type something..."/>
                </div>

                <div className="flex flex-row">
                    <button
                        className="flex items-center rounded-md border border-slate-300 mr-4 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={onClose}
                    >
                        Add Experience
                    </button>
                    <button
                        className="flex items-center rounded-md border border-red-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-red-600 hover:text-white hover:bg-red-500 hover:border-red-500 focus:text-white focus:bg-red-800 focus:border-red-500 active:border-red-500 active:text-white active:bg-red-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
      </div>
    );
  }

const ExperienceField: React.FC<ExperienceProps> = ({company, role, start, end, hyperlink="", description}) => {
    const [editMode, toggleEditMode] = useState(false);

    return (
        <>
        {!editMode ? <div className="w-[700px] bg-gray-50 border-[1px] border-gray-200 rounded-xl shadow-sm">
            <div className="flex flex-row items-center p-4">
                <h1 className="text-slate-700">{role}</h1>
                <div className="aspect-square mx-3 w-[5px] h-[5px] rounded-full bg-slate-700"></div>
                <h2 className="text-slate-700">{company}</h2>
            </div>
            <div className="p-4">
                <p className="text-xs text-subtext">{description}</p>    
            </div>
            <div className="p-4 w-full">
                <button onClick={() => toggleEditMode(!editMode)} className="text-sm text-slate-700 hover:text-slate-500 transition">Edit</button>
            </div>
        </div> : 
        <div className="w-[700px] bg-gray-50 rounded-lg border-[1.5px] border-blue-100">
            <div className="m-5">
                <div className="w-full grid grid-cols-2 gap-y-3 justify-between">
                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2 text-slate-700">Role</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."} defaultValue={role}/>
                    </div>
                    <div id="field" className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">Company / Organization</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."} defaultValue={company}/>
                    </div>

                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2 text-slate-700">Start Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."} defaultValue={start}/>
                    </div>
                    <div id="field"  className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">End Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."} defaultValue={end}/>
                    </div>
                </div>

                <div id="field" className="my-10">
                        <h1 className="text-sm my-2 text-slate-700">Description</h1>
                        <ResizableTextBox minHeight={100} placeholder="Type something..." defaultText={description}/>
                </div>

                <button className="transition text-slate-700 hover:text-slate-400 text-sm" onClick={() => toggleEditMode(!editMode)}>Save</button>
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

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="biography-panel" className="relative">
        <div id="biography-panel-inner">
        <h1 className="text-slate-700 font-semibold text-xl">{title}</h1>
            {/* <hr className="my-4"/> */}

            <div id="experience-list" className="pt-[40px] pb-[50px] grid grid-cols-1 gap-x-[150px] gap-y-[40px] w-[750px]">
                {experiences.map((value, index) => (
                    <ExperienceField key={"experience-"+value[0]+value[1]+value[2]} role={value[0]} company={value[1]} description={value[2]} start={"Jan 2025"} end={"Present"} hyperlink={"https://cnmat.berkeley.edu/"}/>
                ))}
            </div>

            <div id="add-button">
                <button
                    className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => setIsOpen(true)}
                >
                    Add Experience
                </button>

                <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
            </div>
        </div>
    </div>
  );
};

export default Career;
