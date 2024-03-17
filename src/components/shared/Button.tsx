import { ButtonProps } from "../../types/types";

export default function Button({ type, title, variant, handleClick, icon }: ButtonProps) {
    return (
        <button
            className={`border-2 rounded-md cursor-pointer flex items-center justify-center ${variant}`}
            type={type}
            onClick={handleClick}
        >
            <span className="cursor-pointer text-sm lg:text-2xl">{title}</span>
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}