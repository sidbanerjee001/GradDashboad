import { Button } from '@headlessui/react'
import { useRouter } from 'next/navigation'

const navigation = [
  { name: 'Dashboard', href: '/dashboard', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

export default function NavBar() {
  const router = useRouter();
  return (
    <>
      <div className="shadow-md rounded-b-xl bg-slate-50 flex flex-row justify-between items-center">
        <div id="left" className="mx-5 flex flex-row my-3">
          <h1 className="font-semibold text-gray-700">Logo</h1>
          <div className="mx-5">
            {navigation.map((data, key) => (
              <button key={key} className="mx-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition" onClick={() => router.push(data.href)}>{data.name}</button>
            ))}
          </div>
        </div>
        <div id="right" className="mx-5 my-3">
            <div className="flex flex-row">
              <button className="mx-3 text-sm font-medium text-gray-500 hover:text-sky-900 transition" onClick={() => router.push("/login")}>Log In</button>
              <button className="mx-3 text-sm font-medium text-white bg-sky-900 p-2 hover:bg-sky-700 rounded-md transition" onClick={() => router.push("/signup")}>Sign Up</button>
            </div>
        </div>
      </div>
    </>
  )
}
