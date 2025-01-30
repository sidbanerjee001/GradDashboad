'use client'

import NavBar from "@/app/Components/NavBar";
import Biography from "../Components/DashboardSettings/Biography";
import Contact from "../Components/DashboardSettings/Contact";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Career from "../Components/DashboardSettings/Career";
import PrivacySettings from "../Components/DashboardSettings/PrivacySettings";

interface TestProps {
    tags?: string[];
}

const ProfilePage: React.FC<TestProps> = ({}) => { 
    const router = useRouter();
    const profileID = 0;
    const name = "John Deere";

    const [currentSetting, changeCurrentSettings] = useState("Biography");

    useEffect(() => {
        // console.log(currentSetting);
    }, [currentSetting]);

    const settingsButtons = ["Biography", "Contact Information", "Career Experience", "Privacy Settings"]

    const settings_content_map = new Map();

    settings_content_map.set("Biography", <Biography title={"Biography"}/>);
    settings_content_map.set("Contact Information", <Contact title={"Contact Information"}/>);
    settings_content_map.set("Career Experience", <Career title={"Career Experience"}/>);
    settings_content_map.set("Privacy Settings", <PrivacySettings title={"Privacy Settings"}/>)

    return (
        <div key={profileID} className="bg-dark_background min-h-screen">
            <div className="m-auto w-[75%] py-5 text-white">
                <NavBar dark={true}/>
                <div id="header" className="mt-[150px]">
                    <h1 className="text-4xl">Welcome back, {name}</h1>
                    <hr className="text-white mt-[40px]"/>
                </div>

                {/* Sidebar */}
                <div id="content" className="flex flex-row justify-between items-start mt-[40px]">
                    <div id="sidebar" className="flex flex-col gap-y-[25px] items-start mr-10">
                        {settingsButtons.map((value, index) => (
                            <button onClick={() => changeCurrentSettings(value)} key={index} className="transition ease-in-out duration:300 bg-[#1B1B1B] hover:bg-[#282828] rounded-lg w-[200px] h-[40px] text-left"><h2 className={`text-sm pl-4 ${currentSetting===value ? "text-white" : "text-subtext"}`}>{value}</h2></button>
                        ))}
                    </div>
                    <div id="settings-content">
                        {settings_content_map.get(currentSetting) || "NaBingus!"}
                    </div>
                </div>
            </div>
        </div>
    );

}
  
export default ProfilePage;
  