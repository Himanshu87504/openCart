// pages/ProductsEdit.jsx
import React, { useState } from "react";
import SEOTab from "../Categories/SEOTab";
import DesignTab from "../Categories/DesignTab";
import Breadcrumb from "../../Breadcrumb";

const InformationEdit = () => {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = ["General", "Data", "SEO", "Design"];

    return (
        <div className=" min-h-screen bg-[#F6F6F6]">

            <Breadcrumb
                title="Information"
                paths={[
                    { name: "Home" },
                    { name: "Information", color: "text-blue-400" },
                ]}
            />
            <div className="px-3 py-5 text-sm">
                <div className="border border-gray-400 bg-white">
                    <div className=" px-3 py-2 text-lg font-semibold border border-gray-300 bg-[#F6F6F6]">
                        Edit Information
                    </div>

                    {/* Tabs header (same style as image) */}
                    <div className=" px-4 pt-3">
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
                    <div className="px-2 py-2">
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
