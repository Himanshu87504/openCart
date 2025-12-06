import React, { useState } from "react";
import GeneralTab from "./generalTab";

export default function CouponEdit() {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = [
        "General",
        "History"
    ];

    return (
        <div className="p-6 bg-white border rounded shadow-sm">
            {/* PAGE TITLE */}
            <h2 className="text-xl font-semibold mb-4">Edit Customer</h2>

            {/* TABS */}
            <div className="flex gap-6 border-b pb-2 text-gray-600 text-sm">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`pb-2 ${activeTab === tab
                            ? "font-semibold text-black border-b-2 border-black"
                            : ""
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* TAB CONTENT */}
            {activeTab === "General" && <GeneralTab />}


            {activeTab === "History" && (
                <div className="w-full bg-white border p-5 mt-5">
                    {/* Title */}
                    <h2 className="text-xl font-semibold mb-4">History</h2>

                    {/* Table */}
                    <div className="border border-gray-300">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-300 bg-white">
                                    <th className="py-2 px-3 font-semibold text-gray-700">Order ID</th>
                                    <th className="py-2 px-3 font-semibold text-gray-700">Customer</th>
                                    <th className="py-2 px-3 font-semibold text-gray-700">Amount</th>
                                    <th className="py-2 px-3 font-semibold text-gray-700">Date Added</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td
                                        colSpan="4"
                                        className="text-center py-8 text-gray-500"
                                    >
                                        No results!
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Footer */}
                    <div className="text-right text-gray-600 text-sm mt-2">
                        Showing 0 to 0 of 0 (0 Pages)
                    </div>
                </div>
            )}

        </div>
    );
}




