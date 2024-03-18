import React, { useState } from 'react';
import { SubscriptionFormProps } from '../../types/types';
import Button from './Button';

const FormField: React.FC<SubscriptionFormProps> = ({ onSubmit }) => {
    const [email, setEmail] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit(email);
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="relative flex items-center justify-center mt-10 w-full">
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 px-10 py-[10px] xl:py-4 w-[300px] md:w-[500px] xl:w-[925px]"
            />
            <div className='absolute right-4 md:right-24 xl:right-60 top-0'>
                <Button
                    type="submit"
                    title="Get In Touch"
                    variant="btn_nav"
                />
            </div>
        </form>
    );
};

export default FormField;
