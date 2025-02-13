import Link from "next/link";
import Form from 'next/form'
import ResizableTextBox from "../UI/ResizableTextArea";
import ExperienceModal from "../UI/ExperienceModal";
import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

import { motion } from "framer-motion"
import { ReactNode, useEffect, useRef, useState } from "react";
import { supabase } from "@/app/lib/supabaseClient";
import LoadingButton from "../UI/LoadingButton";
import { deleteExperience, loadExperiences, updateExperience } from "@/app/lib/supabase-methods";
import { useAuth } from "@/app/lib/AuthContext";

interface CareerProps {
    title: string;
    userId: string;
} 

interface ExperienceProps {
    userId: string;
    experienceId: string;
    company: string;
    role: string;
    start: string;
    end: string;
    hyperlink?: string;
    description: string;

    onUpdate: () => void;
}

const ExperienceField: React.FC<ExperienceProps> = ({userId, experienceId, company, role, start, end, hyperlink="", description, onUpdate }) => {
    const [editMode, toggleEditMode] = useState(false);
    const [loading, setLoading] = useState(false);

    const [experience, setExperience] = useState<
    { id: string; Role: string; Company: string; StartDate: string; EndDate: string; Description: string }
    | null>({
        id: userId,
        Role: role,
        Company: company,
        StartDate: start,
        EndDate: end,
        Description: description
    });
    
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setExperience((prevExperience) => ({
            ...prevExperience!,
            Description: e.target.value,
          }));
    };

    function updateField(key: string, value: string) {
        setExperience((prevExperience) => ({
            ...prevExperience!,
            [key]: [value]
          }));
    }
      
    async function handleSubmit() {
        if (role === "" || company === "" || start === "" || end === "" || description === "") {
            alert("YGB.");
            return;
        }

        const updatedExperience = {
            Role: experience?.Role ?? "",
            Company: experience?.Company ?? "",
            StartDate: experience?.StartDate ?? "",
            EndDate: experience?.EndDate ?? "",
            Description: experience?.Description ?? ""
        };

        setLoading(true);

        await updateExperience(userId, experienceId, updatedExperience);

        onUpdate();

        toggleEditMode(!editMode);
        setLoading(false);
    }

    async function handleDelete() {
        await deleteExperience(userId, experienceId);

        toggleEditMode(false);
        onUpdate();
    }

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
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."} value={experience?.Role} onChange={(e) => updateField("Role", e.target.value)}/>
                    </div>
                    <div id="field" className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">Company / Organization</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."} value={experience?.Company} onChange={(e) => updateField("Company", e.target.value)}/>
                    </div>

                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2 text-slate-700">Start Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."} value={experience?.StartDate} onChange={(e) => updateField("StartDate", e.target.value)}/>
                    </div>
                    <div id="field"  className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">End Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."} value={experience?.EndDate} onChange={(e) => updateField("EndDate", e.target.value)}/>
                    </div>
                </div>

                <div id="field" className="my-10">
                        <h1 className="text-sm my-2 text-slate-700">Description</h1>
                        <textarea
                            ref={textareaRef}
                            value={experience?.Description}
                            onChange={handleChange}
                            placeholder={"Enter a description here..."}
                            className={`w-full outline-none text-slate-700 border-[1.2px] rounded-lg shadow-sm p-2 focus:outline-blue-400 text-sm resize-y min-h-[${100}px]`}
                            style={{ minHeight: `${100}px` }}
                        />
                </div>

                <div className="flex flex-row">
                    {!loading ? <>
                        <button
                        className="flex items-center rounded-md border border-slate-300 mr-4 py-1.5 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={handleSubmit}
                    >
                        Save
                        </button>
                    </> : <div className="mr-4">
                        <LoadingButton/>
                    </div>
                    }
                    
                    <button
                        className="flex items-center rounded-md border border-red-300 py-1.5 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-red-600 hover:text-white hover:bg-red-500 hover:border-red-500 focus:text-white focus:bg-red-800 focus:border-red-500 active:border-red-500 active:text-white active:bg-red-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => handleDelete()}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>}
        </>
    )
}

const Career: React.FC<CareerProps> = ({title, userId}) => {
    const [isOpen, setIsOpen] = useState(false);

    const [experiences, setExperiences] = useState<
    { id: string; Role: string; Company: string; StartDate: string; EndDate: string; Description: string }[]
    >([]);

    const [loading, setLoading] = useState(true);

    const fetchExperiences = async () => {
        setLoading(true);
        const data = await loadExperiences(userId);
        setExperiences(data);
        setLoading(false);
      };

    useEffect(() => {
        fetchExperiences();
      }, [userId]);
    
    if (loading) return <p>Loading experiences...</p>;
    
    async function onUpdate() {
        fetchExperiences();
    }
  

    return (
        <div id="biography-panel" className="relative">
            <div id="biography-panel-inner">
            <h1 className="text-slate-700 font-semibold text-xl">{title}</h1>
                {/* <hr className="my-4"/> */}

                <div id="experience-list" className="pt-[40px] pb-[50px] grid grid-cols-1 gap-x-[150px] gap-y-[40px] w-[750px]">
                    {experiences.map((value, index) => (
                        <ExperienceField userId={userId} experienceId={value.id} key={"experience-"+value.id} role={value.Role} company={value.Company} description={value.Description} start={value.StartDate} end={value.EndDate} hyperlink={""} onUpdate={onUpdate}/>
                    ))}
                </div>

                <div id="add-button">
                    <button
                        className="flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => setIsOpen(true)}
                    >
                        Add Experience
                    </button>

                    <ExperienceModal userId={userId} isOpen={isOpen} onClose={() => setIsOpen(false)} onUpdate={() => onUpdate()}/>
                </div>
            </div>
        </div>
    );
    };

export default Career;
