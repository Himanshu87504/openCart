// Breadcrumb.jsx
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ title, paths }) => {
    return (
        <div className="w-full bg-[#F6F6F6] pl-4 p-5">
            <div className="flex items-center gap-1.5 border-b border-gray-200 mb-4">
                {/* Main Title */}
                <h1 className="text-3xl font-light">{title}</h1>

                {/* Breadcrumb Path */}
                {paths && paths.map((path, index) => {
                    return (
                        <div key={index} className="flex items-center gap-1.5">
                            <h4 className={`pt-2 ${path.color || "text-gray-500"}`}>
                                {path.name}
                            </h4>
                            {index !== paths.length - 1 && (
                                <MdKeyboardArrowRight className="mt-2 text-gray-500" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Breadcrumb;
