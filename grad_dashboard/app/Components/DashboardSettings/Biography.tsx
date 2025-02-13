import { supabase } from "@/app/lib/supabaseClient";
import { updateBio } from "@/app/lib/supabase-methods";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BiographyProps {
    title: string;
    first_name: string;
    last_name: string;
    degree?: string;
    grad_date?: string;
    location?: string;

    updateFn: Function;
}

const Biography: React.FC<BiographyProps> = ({ title, first_name, last_name, location, degree, grad_date, updateFn }) => {
    const [bioValues, setBioValues] = useState({
        first_name: first_name,
        last_name: last_name,
        location: location ?? "",
        degree: degree ?? "",
        grad_date: grad_date ?? ""
    });
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        if (!hasChanges) {
            setBioValues({
                first_name: first_name,
                last_name: last_name,
                location: location ?? "",
                degree: degree ?? "",
                grad_date: grad_date ?? ""
            });
        }
    }, [first_name, last_name, location, degree, grad_date]);

    function updateBioValue(key: string, value: string) {
        setBioValues(prevState => ({
            ...prevState,
            [key]: value
        }));
        setHasChanges(true);
    }

    const handleSubmit = async (event: React.FormEvent) => {
            event.preventDefault();
    
            const { data: { user } } = await supabase.auth.getUser();
            if (!user) {
                return;
            }
    
            try {

                let data: Array<[string, string]> = [];
                for (const [key, value] of Object.entries(bioValues)) {
                    data.push([key, value])
                };

                await updateBio(user.id, data);
    
                await updateFn();
                alert('Profile updated successfully');
            } catch (error) {
                alert('Error updating profile');
            }
        };

    return (
        <div id="biography-panel" className="relative">
            <div id="biography-panel-inner">
                <h1 className="text-slate-700 font-semibold text-xl">{title}</h1>
                <div id="inputs" className="pt-[40px] pb-[100px] grid grid-cols-2 gap-x-[150px] gap-y-[40px]">
                    {Object.entries(bioValues).map(([key, value], index) => (
                        <motion.div
                            initial={{ y: 25, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.075 * index,
                                ease: [0, 0.71, 0.2, 1.01]
                            }}
                            key={key}
                        >
                            <div id="text-field" className="flex flex-col">
                                <p className="font-semibold text-xs text-slate-700 uppercase">{key.replace("_", " ")}</p>
                                <input
                                    name={key}
                                    className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400"
                                    value={value}
                                    onChange={(e) => updateBioValue(key, e.target.value)}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <button className="absolute mt-[40px] mb-[20px] bottom-0 right-0 text-sm font-medium text-white bg-sky-900 py-[5px] px-3 hover:bg-sky-700 rounded-md transition" onClick={handleSubmit}>Save</button>
            </div>
        </div>
    );
};

export default Biography;