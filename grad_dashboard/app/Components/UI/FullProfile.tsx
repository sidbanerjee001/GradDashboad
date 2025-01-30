'use client'

import NavBar from "@/app/Components/NavBar";
import myImage from './headshot_1.jpg';
import Image from "next/image";
import CareerExperience from "../CareerExperience";

import { motion } from "framer-motion"
import Link from "next/link";
import { useRouter } from "next/navigation";

type ResumeExperience = {
    start: string;
    end: string;
    role: string;
    company: string;
    summary: string;
    link: string;
}

type InlineLink = {
    name: string;
    link: string;
}

interface FullProfileProps {
    name: string;
    degree: string;
    gradYear: number;
    location: string;
    tags?: string[];
    
    about: string;
    discussion: string;

    experiences: ResumeExperience[];
    contactLinks?: InlineLink[];
}

const FullProfile: React.FC<FullProfileProps> = ({name, degree, gradYear, location, about, discussion, experiences, contactLinks=[], tags=["Greek Life", "Consulting", "Resume Building", "Networking", "Life after College"]}) => { 
    const router = useRouter();
    const profileID = 0;

    return (
        <div key={profileID} className="bg-dark_background min-h-screen">
            <div className="m-auto w-[75%] py-5 text-white">
                <NavBar dark={true}/>
                <div id="header" className="h-[250px] w-[100%] mt-[75px] flex flex-row justify-start flex-grow relative">
                    <div className="relative h-[250px] w-[200px]">
                        <Image
                        src={myImage}
                        alt={`${name}'s profile picture`}
                        fill
                        className="object-cover"
                        />
                    </div>
                    <div className="mx-10">
                        {/* Headings */}
                        <h1 className="text-[2rem]">{name}</h1>
                        <h2 className="text-[1.2rem] pt-3">{degree}, {gradYear}</h2>

                        {/* Location */}
                        <div className="mt-10 flex flex-row flex-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        <p className="text-xs mx-2">{location}</p>
                        </div>

                        {/* Tags */}
                        <div id="tags" className="mt-10">
                            <h1>Tags:</h1>
                            <div id="card-tags" className="flex my-4 justify-start gap-x-3 gap-y-2 grow flex-wrap content-start">
                                {tags ? 
                                    <>
                                        {tags.slice(0, 10).map((tag, index) => 
                                        <div id="tag" key={index} className="text-[9px] font-semibold uppercase bg-[#303030] rounded-[10px] flex flex-row items-center">
                                        <div className="aspect-square w-[7px] h-[7px] rounded-full bg-[#6BC17B] mx-[8px]"></div>
                                        <p className="py-[4px] pr-[8px] text-[#6BC17B] font-bold">{tag}</p>
                                        </div>
                                        )}
                                        {tags.length > 10 ? <div id="tag" key={name + '_extra_tag'} className="text-[9px] font-semibold uppercase bg-[#1E1E1E] rounded-[10px]"><p className="py-[4px] px-[8px] text-[#6BC17B]">+{tags.length-10}</p></div> : <></>}
                                    </>    
                                    : <></>
                                }
                            </div>
                        </div>
                    </div>

                    {/* X button */}
                    <div className="absolute top-0 right-0">
                        <button onClick={() => router.back()}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div id="content" className="grid grid-cols-2 mt-10 gap-y-[65px]">
                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">ABOUT</h3>
                            <hr className="my-3"/>
                            <p className="text-sm">{about}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.25,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">DISCUSSION TOPICS</h3>
                            <hr className="my-3"/>
                            <p className="text-sm">{discussion}</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">CAREER PATHWAY</h3>
                            <hr className="my-3"/>
                            {experiences.map((exp, key) => 
                                <CareerExperience key={key} start={exp.start} end={exp.end} role={exp.role} company={exp.company} description={exp.summary} link={exp.link}/>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ y: 75, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                        duration: 1.5,
                        delay: 0.35,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                    >
                        <div id="blurb" className="w-[95%]">
                            <h3 className="text-sm">CONTACT INFO</h3>
                            <hr className="my-3"/>
                                {contactLinks.map((elem, key) => 
                                    <div key={key} className="flex flex-row items-center my-4">
                                        <div className="bg-[#424242] hover:bg-[#242424] rounded-md flex items-center justify-center w-8 h-8 cursor-pointer" onClick={() => router.push(elem.link)}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="p-2 w-8 h-8"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                            />
                                        </svg>
                                        </div>
                                  
                                    <p className="text-white px-2">{elem.name}</p>
                                  </div>
                                  
                                )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );

}
  
export default FullProfile;
  