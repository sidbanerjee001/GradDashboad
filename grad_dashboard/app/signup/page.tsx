'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react';
import LoadingButton from '../Components/UI/LoadingButton';

import { signUp } from "../lib/auth";

export default function SignUp() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!email.includes("@")) {
        setInvalidEmail(true);
        setLoading(false);
        return;
    }

    if (!password) {
        setInvalidPassword(true);
        setLoading(false);
        return;
    }

    try {
      const { user } = await signUp(email, password);
      if (user) router.push("/setup-profile");
      setMessage("Check your email for confirmation!");
    } catch (error: any) {
      setMessage(error.message);
    }

    setLoading(false);
  };

  useEffect(() => {
    setInvalidEmail(false);
    setInvalidPassword(false);
  }, [email, password])

  return (
    <>
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-white to-blue-100">
        <div className="bg-white p-10 rounded-lg shadow-md">
            <h1 className="font-semibold text-center text-xl">Create Account</h1>

            <div id="login_input" className="mt-10">
                <h2 className="uppercase text-xs font-semibold text-gray-600">Email Address</h2>
                <input name="first_name" className={`mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400 ${invalidEmail ? "outline-red-400" : ""}`} placeholder="example@email.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                {invalidEmail ? <><p className="text-xs mt-2 text-red-400">Invalid email address.</p></> : <></>}

                <h2 className="uppercase text-xs font-semibold text-gray-600 mt-6">Password</h2>
                <input name="first_name" className={`mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400 ${invalidPassword ? "outline-red-400" : ""}`} placeholder="..." type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                {invalidPassword ? <><p className="text-xs mt-2 text-red-400">Password required.</p></> : <></>}
            </div>

            <hr className="border-[0.5px] border-gray-200 my-10"/>
            
            <div className="flex flex-col justify-between gap-y-4">

                {!loading ? <>
                <button className="px-4 py-2 border flex gap-2 border-slate-200 bg-slate-700 rounded-lg hover:border-slate-200 hover:text-slate-900 hover:shadow transition" onClick={handleSignUp}>
                    <div className="m-auto flex flex-row gap-x-2">
                        <span className="text-xs font-medium text-white">Sign Up with Email</span>
                    </div>
                </button>
                </> : <>
                    <LoadingButton/>
                </>}

                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <div className="m-auto flex flex-row gap-x-2">
                        <img className="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span className="text-slate-700 text-xs font-medium">Login with Google</span>
                    </div>
                </button>

                <p className="text-xs text-gray-300 font-semibold text-center my-1">OR</p>

                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" onClick={() => router.push("/login")}>
                    <div className="m-auto flex flex-row gap-x-2">
                        <span className="text-slate-700 text-xs font-medium">Log In</span>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}
