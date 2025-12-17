// components/FormInput.jsx
import React from "react";

export default function FormInput({
    label,
    name,
    type = "text",
    value,
    onChange,
    required = false,
    note,
}) {
    return (
        <div className="space-y-1">
            <label className="font-medium text-gray-700">
                {required && <span className="text-red-500">*</span>} {label}
            </label>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 outline-none"
            />

            {note && <p className="text-xs text-gray-500">{note}</p>}
        </div>
    );
}
