// components/FormToggle.jsx
import React from "react";

export default function FormToggle({ label, checked, onChange }) {
    return (
        <div className="flex items-center gap-4">
            <label className="font-medium text-gray-700">{label}</label>

            <div
                onClick={onChange}
                className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition ${checked ? "bg-blue-400" : "bg-gray-300"
                    }`}
            >
                <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${checked ? "translate-x-6" : "translate-x-0"
                        }`}
                />
            </div>
        </div>
    );
}
