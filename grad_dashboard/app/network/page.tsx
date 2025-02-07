'use client'

import NavBar from '@/app/Components/NavBar'
import ProfileCard from '../Components/UI/ProfileCard';

export default function Schools() {
  return (
    <div className="bg-white">
      <div className="m-auto w-[75%]">
        <NavBar/>
        <div id="hero" className="mt-[100px]">
        <h1 className="text-5xl text-slate-700 font-semibold m-auto text-center">Alumni Network</h1>
        </div>
        <div id="profiles" className="grid grid-cols-4 mt-10">
            <ProfileCard tags={["Chemical Engineering", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2", "test5"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2", "test5", "test5", "test5"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1", "test2"]}/>
            <ProfileCard tags={["Chemical Engin.", "Advanced Degrees", "Cal Men's Rowing", "test1"]}/>
            <ProfileCard name="Quimulous Dobby" degree="B.S. Computer Science" grad_date={2018} location="New York City, NY" tags={["Software Engineering", "Startups", "Venture Capital", "test1"]}/>
        </div>
      </div>
    </div>
  )
}
