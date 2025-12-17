// components/FormSection.jsx
import React from "react";

export default function FormSection({ title, children }) {
    return (
        <div className="bg-white ">
            <div className="border border-gray-300 bg-[#F6F6F6] p-2">
                <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
                    <span>✏️</span> {title}
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border border-gray-300 pl-2 pt-3 pb-4">
                {children}
            </div>

        </div>
    );
}
