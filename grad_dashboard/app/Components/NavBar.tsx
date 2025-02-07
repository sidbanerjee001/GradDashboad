import { useRouter } from 'next/navigation'

import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';
import { signOut } from '../lib/auth';

const navigation = [
  { name: 'Network', href: '/network', current: true },
  { name: 'Dashboard', href: '/test', current: false },
  { name: 'About', href: '/about', current: false },
  { name: 'Contact', href: '/contact', current: false },
]

export default function NavBar() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: {user} } = await supabase.auth.getUser();
      setUser(user);
    }

    checkUser();
  }, [])

  function signOutLogic() {
    signOut();
    setUser(null);
    router.push("/");
  }

  return (
    <div className="flex justify-between items-center w-full px-5 py-3">
      {/* Left section */}
      <div id="left" className="flex-1">
        <a href="/"><h1 className="font-semibold text-gray-700">Logo</h1></a>
      </div>

      {/* Center section */}
      <div id="center" className="flex-grow-0 flex justify-center">
        <div>
          {navigation.map((data, key) => (
            <button 
              key={key} 
              className="mx-4 text-sm font-medium text-gray-500 hover:text-gray-800 transition"
              onClick={() => router.push(data.href)}
            >
              {data.name}
            </button>
          ))}
        </div>
      </div>

      {/* Right section */}
      <div id="right" className="flex-1 flex justify-end">
        <div className="flex">
          {user ? <>
            <button 
              className="mx-3 text-sm font-medium text-white bg-sky-900 p-2 hover:bg-sky-700 rounded-md transition"
              onClick={signOutLogic}
            >
              Log Out
            </button>
          </> : 
          <>
            <button 
              className="mx-3 text-sm font-medium text-gray-500 hover:text-sky-900 transition"
              onClick={() => router.push("/login")}
            >
              Log In
            </button>
            <button 
              className="mx-3 text-sm font-medium text-white bg-sky-900 p-2 hover:bg-sky-700 rounded-md transition"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </button>
          </>}
          
        </div>
      </div>
    </div>
  )
}
