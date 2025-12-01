// pages/ProductsEdit.jsx
import React, { useState } from "react";
import SEOTab from "../Catalog/Categories/SEOTab";
import DesignTab from "../Catalog/Categories/DesignTab";

const InformationEdit = () => {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = ["General", "Data", "SEO", "Design"];

    return (
        <div className=" min-h-screen">
            <div className="px-6 py-5 text-sm">
                <div className="border border-gray-400 bg-white">
                    {/* Top title bar */}
                    <div className=" px-6 py-3 text-lg font-semibold">
                        Edit Information
                    </div>

                    {/* Tabs header (same style as image) */}
                    <div className=" px-4">
                        <ul className="flex gap-1 text-sm">
                            {tabs.map((tab) => (
                                <li key={tab}>
                                    <button
                                        type="button"
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-4 py-2 border border-gray-50  ${activeTab === tab
                                            ? "border-gray-300 border-b-0 bg-white font-semibold"
                                            : "text-gray-700 hover:text-black"
                                            }`}
                                    >
                                        {tab}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tab content area */}
                    <div className="px-4 py-4">
                        {activeTab === "General" && "--"}

                        {activeTab === "Data" && <SEOTab />}

                        {activeTab === "SEO" && <DesignTab />}

                        {activeTab === "Design" && (
                            <div className="border border-gray-200">

                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationEdit;
