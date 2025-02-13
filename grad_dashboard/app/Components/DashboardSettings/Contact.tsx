import { motion } from "framer-motion";
import { supabase } from "../../lib/supabaseClient";
import { useEffect, useState } from "react";

import { updateContactLinks } from "@/app/lib/supabase-methods";

interface ContactProps {
    title: string;
    email: string;
    links?: {
        LinkedIn: string;
        Facebook: string;
        Calendly: string;
    };
    updateFn: Function;
}

const Contact: React.FC<ContactProps> = ({ title, email, links = { LinkedIn: "", Calendly: "", Facebook: "" }, updateFn }) => {
    const [linkValues, setLinkValues] = useState({
        LinkedIn: links?.LinkedIn ?? "",
        Email: email,
        Calendly: links?.Calendly ?? "",
        Facebook: links?.Facebook ?? ""
    });
    const [hasChanges, setHasChanges] = useState(false);

    useEffect(() => {
        if (!hasChanges) {
            setLinkValues({
                LinkedIn: links?.LinkedIn ?? "",
                Email: email,
                Calendly: links?.Calendly ?? "",
                Facebook: links?.Facebook ?? ""
            });
        }
    }, [links, email]);

    function updateLinkValue(key: string, value: string) {
        setLinkValues(prevState => ({
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
            await updateContactLinks(user.id, {
                LinkedIn: linkValues.LinkedIn,
                Calendly: linkValues.Calendly,
                Facebook: linkValues.Facebook
            });

            await updateFn();
            alert('Profile updated successfully');
        } catch (error) {
            alert('Error updating profile');
        }
    };

    return (
        <div id="contact-panel" className="relative">
            <div id="contact-panel-inner">
                <h1 className="text-slate-700 font-semibold text-xl">{title}</h1>
                <div id="inputs" className="pt-[40px] pb-[100px] grid grid-cols-2 gap-x-[150px] gap-y-[40px]">
                    {Object.entries(linkValues).map(([key, value], index) => (
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
                                <p className="font-semibold text-xs text-slate-700 uppercase">{key}</p>
                                <input
                                    name={key.toLowerCase()}
                                    className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400"
                                    value={value}
                                    onChange={(e) => updateLinkValue(key, e.target.value)}
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

export default Contact;