import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt, FaSearch } from 'react-icons/fa';
import { SelectorData, SelectorProps } from '../../types/types';


const Selector: React.FC<SelectorProps> = ({
    adults: initialAdults,
    children: initialChildren,
    checkInDate: initialCheckInDate,
    checkOutDate: initialCheckOutDate,
    onSearch,
}) => {
    const [adults, setAdults] = useState(initialAdults);
    const [children, setChildren] = useState(initialChildren);
    const [checkInDate, setCheckInDate] = useState<Date | null>(initialCheckInDate);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(initialCheckOutDate);

    const handleSearch = () => {
        const searchData: SelectorData = {
            adults,
            children,
            checkInDate,
            checkOutDate,
        };
        onSearch(searchData);
    };

    return (
        <div className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 px-12" id='booking'>
            <div className="mr-4">
                <input
                    placeholder='Adults'
                    type="number"
                    min={0}
                    max={10}
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value))}
                    className="block w-40 px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-t-lg border-b-2 border-b-pink-500 focus:outline-none  focus:border-b-pink-500"
                />
            </div>
            <div className="mr-4">
                <input
                    placeholder='Children'
                    type="number"
                    min={0}
                    max={10}
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value))}
                    className="block w-40 px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-t-lg border-b-2 border-b-pink-500 focus:outline-none focus:border-b-pink-500"
                />
            </div>
            <div className="mr-4 relative">
                <DatePicker
                    placeholderText='Check-in'
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    className="block w-48 px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-t-lg border-b-2 border-b-pink-500 focus:outline-none focus:border-pink-500"
                />
                <FaCalendarAlt className="absolute top-0 right-3 mt-5 text-pink-500" />
            </div>
            <div className="mr-4 relative">
                <DatePicker
                    placeholderText='Check-out'
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    className="block w-48 px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-t-lg border-b-2 border-b-pink-500 focus:outline-none focus:border-pink-500"
                />
                 <FaCalendarAlt className="absolute top-0 right-3 mt-5 text-pink-500" />
            </div>
            <button
                onClick={handleSearch}
                className="flex items-center  w-10 h-10 mt-2 text-white bg-pink-500 rounded-full hover:bg-pink-600 focus:outline-none"
            >
                <FaSearch className="mx-auto" />
            </button>
        </div>
    );
};

export default Selector;
