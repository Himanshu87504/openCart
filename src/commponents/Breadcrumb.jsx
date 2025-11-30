// Breadcrumb.jsx
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumb = ({ title, paths }) => {
    return (
        <div className="w-full bg-[#F6F6F6] pl-4 p-3 pt-5 pb-2">
            <div className="flex items-center gap-1.5 border-b border-gray-300 mb-4 pb-5">
                {/* Main Title */}
                <h1 className="text-3xl font-light">{title}</h1>


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
