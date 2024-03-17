import { LogoProps } from "../../types/types";
import logoImage from "/images/Logo.png";

export default function Logo({height, width, handleClick}:LogoProps) {
    return (
        <header>
            <img
                src={logoImage}
                height={height}
                width={width}
                loading="lazy"
                alt="Logo"
                className="cursor-pointer"
                onClick={handleClick}
            />
        </header>
    );
}