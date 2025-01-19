import Image from "next/image";
import myImage from './headshot_1.jpg';

import { motion } from "framer-motion"
import { useRouter } from "next/navigation";

type ResumeExperience = {
    role: string;
    summary: string;
}

interface ProfileCardProps {
    id?: number;
    name?: string;
    degree?: string;
    grad_date?: number;
    location?: string;
    tags?: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({id=0, name = "Placeholder", degree = "B.A. Default Degree", grad_date = "1900", location = "Los Angeles, CA", tags = []}) => {
    const router = useRouter();

    const handleNavigation = () => {
    
        router.push(`/profiles/${id}?name=${name}`);
    };

    return (
        <>
            <div id ="card-wrapper" className="mt-[40px] bg-[#282828] w-[300px] rounded-md relative drop-shadow-md hover:drop-shadow-xl transition ease-in-out duration-300">
                
                {/* Image */}
                <div className="w-[265px] m-auto pt-2 pb-7">

                    <div className="relative h-[175px] mt-3">
                        <Image
                            src={myImage}
                            alt={`${name}'s profile picture`}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>

                    {/* Subpicture Text */}
                    <div id="card-headers" className="mt-3">
                        <h1 className="font-medium text-xl">{name}</h1>
                        <h2 className="font-light text-sm mt-1">{degree}, {grad_date}</h2>
                    </div>

                    {/* Location (info below headings) */}
                    <div className="mt-4 flex flex-row flex-start">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <p className="text-xs mx-2">{location}</p>
                    </div>

                    {/* Tags */}
                    <div id="card-tags" className="flex my-4 justify-start gap-x-3 gap-y-2 grow flex-wrap content-start">
                        {tags.slice(0, 3).map((tag, index) => 
                            <div id="tag" key={index} className="text-[9px] font-semibold uppercase bg-[#1E1E1E] rounded-[10px] flex flex-row items-center">
                                <div className="aspect-square w-[7px] h-[7px] rounded-full bg-[#6BC17B] mx-[8px]"></div>
                                <p className="py-[4px] pr-[8px] text-[#6BC17B]">{tag}</p>
                                </div>
                        )}
                        {tags.length > 3 ? <div id="tag" key={name + '_extra_tag'} className="text-[9px] font-semibold uppercase bg-[#1E1E1E] rounded-[10px]"><p className="py-[4px] px-[8px] text-[#6BC17B]">+{tags.length-3}</p></div> : <></>}
                    </div>

                    {/* Footer Arrow */}
                    <div id="card-footer" className="absolute bottom-0 right-0">
                        <button className="m-4" onClick={handleNavigation}>
                            <motion.div
                                whileHover={{x: 5}}
                                transition={{
                                duration: 0.75,
                                ease: [0, 0.71, 0.2, 1.01]
                                }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </motion.div>
                        </button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default ProfileCard;