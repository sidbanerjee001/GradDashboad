import Image from "next/image";
import myImage from './headshot_1.jpg';

import { useRouter } from "next/navigation";

interface ProfileCardProps {
    id?: number;
    name?: string;
    degree?: string;
    grad_date?: number;
    location?: string;
    tags?: string[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ id = 0, name = "Placeholder", degree = "B.A. Default Degree", grad_date = "1900", location = "Los Angeles, CA", tags = [] }) => {
    const router = useRouter();

    const handleNavigation = () => {
        router.push(`/profiles/${id}?name=${name}`);
    };

    return (
        <div
            id="card-wrapper"
            className="mt-[40px] bg-[#282828] w-[250px] rounded-md border-[1px] border-[#99999920] flex flex-col"
        >
            {/* Image */}
            <div className="w-full h-[150px] relative rounded-t-md overflow-hidden">
                <Image
                    src={myImage}
                    alt={`${name}'s profile picture`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 250px) 100vw, 250px"
                />
            </div>

            {/* Card Content */}
            <div className="flex-1 px-3">
                {/* Subpicture Text */}
                <div id="card-headers" className="mt-3">
                    <h1 className="font-semibold text-sm">{name}</h1>
                    <h2 className="font-light text-xs mt-1">
                        {degree}, {grad_date}
                    </h2>
                </div>

                {/* Location */}
                <div className="mt-4 flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1"
                        stroke="currentColor"
                        className="size-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                    </svg>
                    <p className="text-[0.7rem] mx-1">{location}</p>
                </div>

                {/* Tags */}
                <div
                    id="card-tags"
                    className="flex my-4 justify-start gap-x-3 gap-y-2 grow flex-wrap content-start"
                >
                    {tags.slice(0, 3).map((tag, index) => (
                        <div
                            id="tag"
                            key={index}
                            className="text-[9px] font-bold uppercase bg-[#2ECC7120] rounded-[10px] flex flex-row items-center"
                        >
                            <p className="py-[4px] px-[8px] text-[#2ECC71]">{tag}</p>
                        </div>
                    ))}
                    {tags.length > 3 ? (
                        <div
                            id="tag"
                            key={name + '_extra_tag'}
                            className="text-[9px] font-semibold uppercase bg-[#2ECC7120] rounded-[10px]"
                        >
                            <p className="py-[4px] px-[8px] text-[#2ECC71]">
                                +{tags.length - 3}
                            </p>
                        </div>
                    ) : null}
                </div>
            </div>

            {/* Footer Button */}
            <div id="card-footer" className="mt-auto p-3">
                <button
                    className="w-full py-1 text-sm rounded-md bg-[#424242] hover:bg-[#242424] hover:text-white transition"
                    onClick={handleNavigation}
                >
                    View More
                </button>
            </div>
        </div>
    );
};

export default ProfileCard;
