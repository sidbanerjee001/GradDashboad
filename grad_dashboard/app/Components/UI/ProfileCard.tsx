import Image from "next/image";
import myImage from './headshot_1.jpg';

import { motion } from "framer-motion"

interface ProfileCardProps {
    name?: string;
    degree?: string;
    grad_date?: number;
    tags?: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({name = "Placeholder", degree = "B.A. Default Degree", grad_date = "1900", tags = []}) => {
    return (
        <>
            <div id ="card-wrapper" className="mt-[40px] bg-[#282828] h-[390px] w-[300px] rounded-md relative drop-shadow-md hover:drop-shadow-xl cursor-pointer transition ease-in-out duration-300">
                
                {/* Image */}
                <div className="relative w-[300px] h-[175px]">
                    <Image
                        src={myImage}
                        alt={`${name}'s profile picture`}
                        fill
                        className="object-cover rounded-t-lg"
                    />
                </div>

                {/* Subpicture Text */}
                <div id="card-headers" className="mx-5 mt-7 text-lg">
                    <h1 className="font-medium">{name}</h1>
                    <h2 className="font-light text-sm mt-2">{degree}, {grad_date}</h2>
                </div>

                {/* Tags */}
                <div id="card-tags" className="flex mt-7 mx-5 justify-start gap-3 grow flex-wrap">
                    {tags.slice(0, 3).map((tag, index) => 
                        <div id="tag" key={index} className="text-[9px] font-bold uppercase bg-[#6BCC7D] rounded-[3px]"><p className="py-[4px] px-[8px]">{tag}</p></div>
                    )}
                    {tags.length > 3 ? <div id="tag" key={name + '_extra_tag'} className="text-[9px] font-bold uppercase bg-[#6BCC7D] rounded-[3px]"><p className="py-[4px] px-[8px]">+{tags.length-3}</p></div> : <></>}
                </div>

                {/* Footer Arrow */}
                <div id="card-footer" className="absolute bottom-0 right-0">
                    <button className="m-4">
                        <motion.div
                            whileHover={{scale: 1.2}}
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
        </>
    )
}

export default ProfileCard;