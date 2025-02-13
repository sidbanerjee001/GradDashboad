import { supabase } from "@/app/lib/supabaseClient";
import { upsertExperience } from "@/app/lib/supabase-methods";
import { useEffect, useRef, useState } from "react";

import { Slide, ToastContainer, toast } from 'react-toastify';

import LoadingButton from "./LoadingButton";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string;
    onUpdate: () => void;
}

function ExperienceModal({ isOpen, onClose, userId, onUpdate }: ModalProps) {

    const [loading, setLoading] = useState(false);

    const [role, setRole] = useState("");
    const [company, setCompany] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${Math.max(textareaRef.current.scrollHeight, 100)}px`;
        }
    }, [description]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
    };

    if (!isOpen) return null;

    async function handleSubmit() {
        if (role === "" || company === "" || start === "" || end === "" || description === "") {
            alert("YGB.");
            return;
        }

        const newExperience = {
            Role: role,
            Company: company,
            StartDate: start,
            EndDate: end,
            Description: description,
        };

        setLoading(true);

        await upsertExperience(userId, newExperience);

        setLoading(false);
        setRole("");
        setCompany("");
        setStart("");
        setEnd("");
        setDescription("");

        onUpdate();
        onClose();
    }
  
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[700px] bg-gray-50 rounded-lg border-[1.5px] border-blue-100">
            <h1 className="text-slate-700 m-5 font-semibold">Add Experience</h1>
            <div className="m-5">
                <div className="w-full grid grid-cols-2 gap-y-3 justify-between">
                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2 text-slate-700">Role</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."} value={role} onChange={(e) => setRole(e.target.value)}/>
                    </div>
                    <div id="field" className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">Company / Organization</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter text here..."} value={company} onChange={(e) => setCompany(e.target.value)}/>
                    </div>

                    <div id="field" className="justify-self-start">
                        <h1 className="text-sm my-2 text-slate-700">Start Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."} value={start} onChange={(e) => setStart(e.target.value)}/>
                    </div>
                    <div id="field"  className="justify-self-end">
                        <h1 className="text-sm my-2 text-slate-700">End Date</h1>
                        <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder={"Enter date here..."} value={end} onChange={(e) => setEnd(e.target.value)}/>
                    </div>
                </div>

                <div id="field" className="my-10">
                        <h1 className="text-sm my-2 text-slate-700">Description</h1>
                        <textarea
                            ref={textareaRef}
                            value={description}
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
                        Add Experience
                        </button>
                    </> : <div className="mr-4">
                        <LoadingButton/>
                    </div>
                    }
                    
                    <button
                        className="flex items-center rounded-md border border-red-300 py-1.5 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-red-600 hover:text-white hover:bg-red-500 hover:border-red-500 focus:text-white focus:bg-red-800 focus:border-red-500 active:border-red-500 active:text-white active:bg-red-500 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>

        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
            />
      </div>
    );
  }

export default ExperienceModal;