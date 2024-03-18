import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { SocialButtonProps } from '../../types/types';
import { Link } from 'react-router-dom';

const getIcon = (name: string): IconType => {
    switch (name.toLowerCase()) {
        case 'facebook':
            return AiOutlineFacebook;
        case 'instagram':
            return AiOutlineInstagram;
        case 'twitter':
            return AiOutlineTwitter;
        default:
            return AiOutlineFacebook;
    }
};

const SocialButton: React.FC<SocialButtonProps> = ({ name, url }) => {
    const Icon = getIcon(name);
    return (
        <div className='flex justify-between items-center px-2'>
            <Link
                to={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-transparent border-2 border-pink-500 p-2"
            >
                <Icon size={24} color="#D11242" />
            </Link>
        </div>

    );
};

export default SocialButton;

