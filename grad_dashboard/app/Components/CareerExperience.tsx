import Link from "next/link";

import { motion } from "framer-motion"

interface CareerExperienceProps {
    start?: string;
    end?: string;
    role?: string;
    company?: string;
    description?: string;
    link?: string;
} 

const CareerExperience: React.FC<CareerExperienceProps> = ({start=2000, end=2025, role="Researcher", company="ACME Company", description="Lorem ipsum...", link}) => {
  return (
    <div id="role-experience" className="mb-[12px]">
        <div id="r-e-header" className="flex flex-row items-center gap-x-[8px]">
            <div className="aspect-square w-[5px] h-[5px] rounded-full bg-white"></div>
            <h1 className="text-sm text-subtext font-semibold upper">{start} — {end}</h1>
            <h1 className="text-sm text-white font-normal">{role}</h1>
            <div className="aspect-square w-[5px] h-[5px] rounded-full bg-white"></div>
            <h1 className="text-sm text-white font-normal">{company}</h1>
            {link ? 
                <motion.div
                    whileHover={{ x: 2 }}
                    transition={{
                        duration: 0.75,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                >
                    <Link href={link}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#999999" className="size-4"> 
                            <path fillRule="evenodd" d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </motion.div>
            : <></>}
        </div>
        <div id="r-e-content" className="flex flex-row gap-x-[16px] mt-[12px] items-stretch">
            <div id="r-e-vline" className="ml-[2px] w-[2px] bg-white"></div>
            <div id="r-e-p">
                <p className="text-sm text-subtext">
                    {description}    
                </p>
            </div>
        </div>
    </div>
  );
};

export default CareerExperience;
