import React, { useState, useEffect, useRef } from "react";
import { FaPuzzlePiece } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import Breadcrumb from '../../Breadcrumb'
const Extension = () => {
    const [openFilter, setOpenFilter] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState("Analytics (0)");

    const filterRef = useRef(null);

    const filterList = [
        "Analytics (0)",
        "Captchas (1)",
        "Currency Rates (2)",
        "Dashboard (8)",
        "Feeds (0)",
        "Anti-Fraud (1)",
        "Languages (0)",
        "Marketplaces (0)",
        "Modules (11)",
        "Other (0)",
        "Payments (4)",
        "Reports (15)",
        "Shipping (5)",
        "Themes (1)",
        "Order Totals (10)",
    ];

    // Close dropdown on outside click
    useEffect(() => {
        const handler = (e) => {
            if (filterRef.current && !filterRef.current.contains(e.target)) {
                setOpenFilter(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div className="bg-[#F6F6F6] min-h-screen p-4">
            <Breadcrumb
                title="Extension"
                paths={[
                    { name: "Home" },
                    { name: "Extension", color: "text-blue-400" },
                ]}
            />


            <div className="flex items-center gap-2 text-xl font-semibold text-gray-700 p-3 bg-[#F6F6F6] border border-gray-300 ">
                <FaPuzzlePiece className="text-gray-700" />
                <span>Extension List</span>
            </div>

            {/* Main Box */}
            <div className="border border-gray-300 bg-white p-4">

                {/* Choose Extension */}
                <h2 className="font-semibold text-xl text-gray-700 mb-3">
                    Choose the extension type
                </h2>

                <div className="border border-gray-300 rounded bg-white p-4 relative" ref={filterRef}>

                    {/* Dropdown Trigger */}
                    <div
                        className="border border-gray-300 rounded w-full px-3 py-2 flex items-center justify-between cursor-pointer"
                        onClick={() => setOpenFilter((prev) => !prev)}
                    >
                        <span className="text-gray-700">{selectedFilter}</span>
                        <FiChevronDown
                            className={`text-gray-600 text-xl transition-transform duration-200 ${openFilter ? "rotate-180" : ""
                                }`}
                        />
                    </div>

                    {/* Dropdown Menu */}
                    {openFilter && (
                        <div className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded shadow-lg z-50">
                            <ul className="max-h-96 overflow-y-auto">
                                {filterList.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setSelectedFilter(item);
                                            setOpenFilter(false);
                                        }}
                                        className="px-4 py-2 cursor-pointer hover:bg-blue-600 hover:text-white text-gray-700"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                {/* Table Section */}
                <h2 className="font-semibold text-xl text-gray-700 mt-8 mb-3">
                    {selectedFilter.replace(/\s\(\d+\)/, "")}
                </h2>

                <div className="border border-gray-300 ">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-gray-300">
                                <th className="px-4 py-2 text-gray-700 border-r border-gray-300">Name</th>

                                <th className="px-4 py-2 text-gray-700 border-r border-gray-300">Status</th>

                                <th className="px-4 py-2 text-gray-700">Action</th>
                            </tr>

                        </thead>

                        <tbody>
                            <tr>
                                <td colSpan="3" className="text-center py-4 text-gray-600">
                                    No results!
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Extension;
