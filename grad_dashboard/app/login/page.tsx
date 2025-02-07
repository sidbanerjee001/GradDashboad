'use client'
import { useRouter } from 'next/navigation'
import { supabase } from '../lib/supabaseClient';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error("Login error:", error.message);
      return;
    }

    router.push("/dashboard"); // Redirect after login
  };

  return (
    <>
    <div className="h-screen flex items-center justify-center bg-gradient-to-t from-white to-blue-100">
        <div className="bg-white p-10 rounded-lg shadow-md">
            <h1 className="font-semibold text-center text-xl">Log In</h1>

            <div id="login_input" className="mt-10">
                <h2 className="uppercase text-xs font-semibold text-gray-600">Email Address</h2>
                <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" placeholder="example@email.com" onChange={(e) => setEmail(e.target.value)}/>
                <h2 className="uppercase text-xs font-semibold text-gray-600 mt-6">Password</h2>
                <input name="first_name" className="mt-2 outline-none w-[300px] text-sm text-slate-700 border-[1.2px] rounded-lg shadow-sm px-2 py-2 focus:outline-blue-400" type="password" placeholder="..." onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <hr className="border-[0.5px] border-gray-200 my-10"/>
            
            <div className="flex flex-col justify-between gap-y-4">
                <button className="px-4 py-2 border flex gap-2 border-slate-200 bg-slate-700 rounded-lg hover:border-slate-200 hover:text-slate-900 hover:shadow transition" onClick={handleLogin}>
                    <div className="m-auto flex flex-row gap-x-2">
                        <span className="text-xs font-medium text-white">Login with Email</span>
                    </div>
                </button>

                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <div className="m-auto flex flex-row gap-x-2">
                        <img className="w-4 h-4" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                        <span className="text-slate-700 text-xs font-medium">Login with Google</span>
                    </div>
                </button>

                <p className="text-xs text-gray-300 font-semibold text-center my-1">OR</p>

                <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150" onClick={() => router.push("/signup")}>
                    <div className="m-auto flex flex-row gap-x-2">
                        <span className="text-slate-700 text-xs font-medium">Create an Account</span>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </>
  )
}
