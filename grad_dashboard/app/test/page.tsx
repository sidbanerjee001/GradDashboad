'use client'

import NavBar from "@/app/Components/NavBar";
import Biography from "../Components/DashboardSettings/Biography";
import Contact from "../Components/DashboardSettings/Contact";
import Footer from "../Components/Footer";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Career from "../Components/DashboardSettings/Career";
import PrivacySettings from "../Components/DashboardSettings/PrivacySettings";
import { useAuth } from "../lib/AuthContext";
import { supabase } from "../lib/supabaseClient";

interface TestProps {
    tags?: string[];
}

const ProfilePage: React.FC<TestProps> = ({}) => {
    const router = useRouter();
    const { user, loading, profile, fetchProfile } = useAuth();
    const [currentSetting, changeCurrentSettings] = useState("Biography");

    useEffect(() => {
        if (!loading && !profile) {
            fetchProfile();
        }
    }, [loading, profile, fetchProfile]);

    if (loading || !profile) {
        return <div>Loading profile...</div>;
    }

    async function updateContactLinks(userId: string, contactLinks: {
        LinkedIn?: string;
        Calendly?: string;
        Facebook?: string;
    }) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .upsert({
                    id: userId,
                    ContactLinks: contactLinks
                }, {
                    onConflict: 'id'
                });
    
            if (error) {
                throw error;
            }
    
            // Clear the cached profile data
            sessionStorage.removeItem("profile");
    
            // Fetch the updated profile
            await fetchProfile();
        } catch (error) {
            console.error('Error in updateContactLinks:', error);
        }
    }

    const { first_name, last_name, email, ContactLinks } = profile;
    const name = first_name + " " + last_name;

    const settingsButtons = ["Biography", "Contact Information", "Career Experience", "Privacy Settings"];
    const settings_content_map = new Map([
        ["Biography", <Biography key="bio" title={"Biography"} first_name={first_name} last_name={last_name} />],
        ["Contact Information", <Contact key={`contact-${ContactLinks?.LinkedIn}-${ContactLinks?.Calendly}-${ContactLinks?.Facebook}`} title={"Contact Information"} email={email} links={ContactLinks} updateFn={updateContactLinks} />],
        ["Career Experience", <Career key="career" title={"Career Experience"} />],
        ["Privacy Settings", <PrivacySettings key="privacy" title={"Privacy Settings"} />]
    ]);

    return (
        <div className="m-auto w-[75%] text-white">
            <NavBar />
            <div id="header" className="mt-[150px]">
                <h1 className="text-4xl text-slate-800 font-semibold">Welcome back, {name}</h1>
                <hr className="text-white mt-[40px]" />
            </div>

            {/* Sidebar */}
            <div id="content" className="flex flex-row justify-between items-start">
                <div id="sidebar" className="mr-10 border-r-[1px] min-h-[60vh]">
                    <div className="mt-8 flex flex-col gap-y-[25px]">
                        {settingsButtons.map((value, index) => (
                            <button onClick={() => changeCurrentSettings(value)} key={index} className={`transition text-left w-[250px] h-[50px] rounded-l-md ${currentSetting === value ? "bg-gray-100 border-r-2 border-r-blue-500" : "bg-white"}`}><h2 className={`text-sm pl-4 font-medium ${currentSetting === value ? "text-gray-800" : "text-subtext"}`}>{value}</h2></button>
                        ))}
                    </div>
                </div>
                <div id="settings-content" className="mt-8">
                    {settings_content_map.get(currentSetting) || "NaBingus!"}
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;