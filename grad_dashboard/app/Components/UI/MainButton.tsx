'use client'

interface ButtonProps {
    text?: string;
    _classes?: string;
    on_click?: () => void;
}

const MainButton: React.FC<ButtonProps> = ({text = 'Placeholder', _classes = '', on_click = () => {}}) => {
    return (
        <button className={"transition ease-in-out duration-300 w-[150px] h-[32px] border-2 border-black hover:bg-black hover:text-white " + _classes} onClick={on_click}>
            {text}
        </button>
    );
};

export default MainButton;