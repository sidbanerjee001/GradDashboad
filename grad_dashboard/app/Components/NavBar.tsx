import MainButton from '@/app/Components/UI/MainButton'
import { Bars3Icon } from '@heroicons/react/24/outline'

interface NavBarProps {
  dark?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ dark = false }) => {
  return (
    <nav className="flex items-center justify-between">
      <a href="/" className="text-lg">Logo</a>
      <div className="flex">
        <MainButton _classes="mx-5" dark={dark} text="Log In" />
        <MainButton _classes="mx-5" dark={dark} text="About" />
        <button className="mx-5">
          <Bars3Icon className="h-8 w-8" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
