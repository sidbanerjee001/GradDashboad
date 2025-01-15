import MainButton from '@/app/Components/UI/MainButton'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function NavBar() {
    return (
        <>
            <nav className="flex items-center justify-between">
                <a href={"/"} className="text-lg">Logo</a>
                <div className="flex row">
                    <MainButton _classes="mx-5" text="Log In"/>
                    <MainButton _classes="mx-5" text="About"/>
                    <button className="mx-5"><Bars3Icon className="h-[32px] w-[32px]"/></button>
                </div>
            </nav>
        </>
    )
}