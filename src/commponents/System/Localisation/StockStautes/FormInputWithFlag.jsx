import React from "react";
import { FaRegFlag } from "react-icons/fa";

export default function FormInputWithFlag({
    label,
    required = false,
    value,
    onChange,
    placeholder,
}) {
    return (
        <div className="mb-5 pl-2">

            <label className="block text-sm font-medium text-gray-700 mb-1">
                {required && <span className="text-red-500">*</span>} {label}
            </label>


            <div className="flex items-center border border-gray-300 rounded-md bg-white focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">


                <div className="w-12 h-10 flex items-center justify-center border-r border-gray-300 text-gray-500">

                    <FaRegFlag />

                </div>


                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="w-full px-3 py-2 text-sm outline-none bg-transparent"
                />
            </div>
        </div>
    );
}
