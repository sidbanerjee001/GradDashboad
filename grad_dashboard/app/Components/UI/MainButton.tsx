'use client'

interface ButtonProps {
    text?: string;
    _classes?: string;
    on_click?: () => void;
    dark?: boolean;
}

const MainButton: React.FC<ButtonProps> = ({text = 'Placeholder', _classes = '', dark = false, on_click = () => {}}) => {
    return (
        <button className={`transition ease-in-out duration-300 w-[150px] h-[32px] border-2 ${_classes} ${dark ? "border-white hover:bg-white hover:text-dark_background" : "border-black hover:bg-black hover:text-white"}`} onClick={on_click}>
            {text}
        </button>
    );
};

export default MainButton;