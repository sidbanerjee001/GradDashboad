import NavBar from "@/app/Components/NavBar";
import myImage from './headshot_1.jpg';
import Image from "next/image";
  
  export default function ProfilePage() {
    const profileID = 0;
    const name = "John Deere";
  
    return (
        <div key={profileID} className="bg-dark_background min-h-screen">
            <div className="m-auto w-[75%] py-5 text-white">
                <NavBar dark={true}/>
                <div id="header" className="h-[250px] w-[100%] mt-[150px] flex flex-row justify-start flex-grow">
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
                        <h2 className="text-[1.2rem] pt-3">B.S. Computer Science, 2013</h2>

                        {/* Location */}
                        <div className="mt-10 flex flex-row flex-start">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        <p className="text-xs mx-2">Denver, CO</p>
                        </div>

                        {/* Tags */}
                        <div id="tags" className="mt-10">
                            <h1>Tags:</h1>
                        </div>
                    </div>
                </div>

                <div id="content" className="grid grid-cols-2 mt-10 gap-y-[65px]">
                    <div id="blurb" className="w-[95%]">
                        <h3 className="text-sm">ABOUT</h3>
                        <hr className="my-3"/>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div id="blurb" className="w-[95%]">
                        <h3 className="text-sm">DISCUSSION TOPICS</h3>
                        <hr className="my-3"/>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div id="blurb" className="w-[95%]">
                        <h3 className="text-sm">COLLEGE JOURNEY</h3>
                        <hr className="my-3"/>
                        <p className="text-sm">Degree(s):</p>
                        <br/>
                        <p className="text-sm">Organization(s):</p>
                        <br/>
                        <p className="text-sm">Sport(s):</p>
                    </div>

                    <div id="blurb" className="w-[95%]">
                        <h3 className="text-sm">CONTACT INFO</h3>
                        <hr className="my-3"/>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <div id="blurb" className="w-[95%]">
                        <h3 className="text-sm">CAREER PATHWAY</h3>
                        <hr className="my-3"/>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
      </div>
    );
  }
  