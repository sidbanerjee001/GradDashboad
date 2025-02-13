'use client'

import { useRouter } from 'next/navigation'

import { useAuth } from "./lib/AuthContext";

import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

export default function Redesign() {
    const { user, loading } = useAuth();
    const router = useRouter();

    return (
    <>
    <div className="flex items-center justify-center bg-gradient-to-b from-white to-blue-50">
        <div className="m-auto w-[75%]">
            <NavBar/>

            <div id="hero" className="mt-[200px]">
                <div id="hero-text" className="text-center">
                    <h1 className="text-5xl text-slate-800 font-semibold m-auto">Create <span className="text-sky-600">meaningful connections</span> with alumni.</h1>
                    <h2 className="text-lg text-gray-500 font-medium mt-8 w-[80%] m-auto">Follow in the footsteps of your institution’s alumni. Expand your network, gain professional insight, and develop your career goal. All with the help of voluntary mentors.</h2>
                </div>

                <div className="flex flex-row items-center justify-center mt-14">
                    <button className="flex items-center rounded-md border border-slate-300 py-2 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-4" type="button" onClick={() => router.push("/network")}>
                    Network
                    </button>

                    <button className="flex items-center rounded-md border border-slate-300 py-2 px-6 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mx-4" type="button" onClick={() => router.push(`${user ? "/test" : "/signup"}`)}>
                    {user ? <>Dashboard</> : <>Sign Up</>}
                    </button>
                </div>
            </div>

            <div id="dashboard-img" className="mt-[150px] p-2 bg-slate-200 rounded-lg">
                <img src={"https://mui.com/static/screenshots/material-ui/getting-started/templates/dashboard.jpg"}/>
            </div>

            <div id="bento-section" className="my-[150px]">
                    <h1 className="my-7 text-xl font-semibold text-slate-700 text-center">Why use us?</h1>
                    <p className="text-sm text-gray-500 font-normal text-center my-7">Learn why using Grad Dashboard can elevate your professional career.</p>
                    <div id="bento" className="flex flex-row my-8">
                        <div id="bento-element" className="p-5 rounded-md border-[1px] border-gray-200 bg-white mx-5">
                            <h1 className="font-semibold">Vetted Mentorship</h1>
                            <p className="text-sm font-normal text-gray-500 mt-5">Mentors register to be listed as contacts, meaning they are willing to speak to students about their experiences. No more combing through LinkedIn to connect with alumni.</p>
                        </div>
                        <div id="bento-element" className="p-5 rounded-md border-[1px] border-gray-200 bg-white mx-5">
                            <h1 className="font-semibold">Bidirectional Communication</h1>
                            <p className="text-sm font-normal text-gray-500 mt-5">Alumni tag their profiles with their major/minor, field(s) of interest, and anything else they’re interested in talking about. Students can connect with the right person based on their needs.</p>
                        </div>
                        <div id="bento-element" className="p-5 rounded-md border-[1px] border-gray-200 bg-white mx-5">
                            <h1 className="font-semibold">Spam-Free Experience</h1>
                            <p className="text-sm font-normal text-gray-500 mt-5">We take preventative measures against bot activity to foster real, human connections. Archive your profile from the site at any time to take a break, and return right where you left off.</p>
                        </div>
                    </div>
                </div>

                <Footer/>
        </div>
        </div>
    </>
    )
}
