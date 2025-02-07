'use client'

import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/navigation";

import LoadingButton from "../Components/UI/LoadingButton";
import DropdownButton from "../Components/UI/DropdownButton";

export default function SetupProfile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [invalidData, setInvalidData] = useState(false);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      console.log(user);
      if (!user) router.push("/signup");
      // if (user) router.push("/dashboard");
    };
    checkUser();
  }, []);

  const handleProfileSetup = async (e: React.FormEvent) => {
    if (!firstName || !lastName) {
        setInvalidData(true);
        return;
    }

    e.preventDefault();
    setLoading(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { error } = await supabase
      .from("profiles")
      .insert([{ id: user.id, first_name: firstName, last_name: lastName, email: user.email }]);

    if (error) console.log(error);
    if (!error) router.push("/dashboard");
    setLoading(false);
  };

  useEffect(() => {
    setInvalidData(false);
  }, [firstName, lastName])

  return (

    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-white to-blue-100">
        <div className="bg-white p-10 rounded-lg shadow-md">
            <h1 className="font-semibold text-center text-xl">Setup Your Profile</h1>

            <div id="login_input" className="mt-10">
                <h2 className="uppercase text-xs font-semibold text-gray-600">First Name</h2>
                <input name="first_name" className={`mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400 ${invalidData ? "outline-red-400" : ""}`} placeholder="Johnny" value={firstName} onChange={(e) => setFirstName(e.target.value)} required/>
                {invalidData ? <><p className="text-xs mt-2 text-red-400">Enter a first name.</p></> : <></>}

                <h2 className="uppercase text-xs font-semibold text-gray-600 mt-6">Last Name</h2>
                <input name="first_name" className={`mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400 ${invalidData ? "outline-red-400" : ""}`} placeholder="Appleseed" value={lastName} onChange={(e) => setLastName(e.target.value)} required/>
                {invalidData ? <><p className="text-xs mt-2 text-red-400">Enter a last name.</p></> : <></>}
            </div>
            
            <div className="flex flex-col justify-between gap-y-4 mt-10">

                {!loading ? <>
                <button className="px-4 py-2 border flex gap-2 border-slate-200 bg-slate-700 rounded-lg hover:border-slate-200 hover:text-slate-900 hover:shadow transition" onClick={handleProfileSetup}>
                    <div className="m-auto flex flex-row gap-x-2">
                        <span className="text-xs font-medium text-white">Finish Creating Profile</span>
                    </div>
                </button>
                </> : <>
                    <LoadingButton/>
                </>}
            </div>
        </div>
    </div>
  );
}
