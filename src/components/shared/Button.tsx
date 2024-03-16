import { ButtonProps } from "../../types/types";

export default function Button({ type, title, variant, handleClick }: ButtonProps) {
    return (
        <button
            className={`border-2 rounded-md cursor-pointer ${variant}`}
            type={type}
            onClick={handleClick}
        >
            <span className="cursor-pointer text-sm lg:text-lg">{title}</span>
        </button>
    );
}