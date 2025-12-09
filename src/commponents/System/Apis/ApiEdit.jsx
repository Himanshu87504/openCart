import React, { useState } from "react";
import GeneralTab from "./GeneralTab";
import IpAddress from "./IpAddress";
import SessionTab from "./SessionTab";

export default function ApiEdit() {
    const [activeTab, setActiveTab] = useState("General");

    // Correct Tab Names
    const tabs = ["General", "IP Addresses", "Session"];

    // Correct tab component mapping
    const tabComponents = {
        General: <GeneralTab />,
        "IP Addresses": <IpAddress />,
        Session: <SessionTab />,
    };

    return (
        <div className="p-6 bg-white border rounded shadow-sm">

            <h2 className="text-xl font-semibold mb-4">Edit API</h2>

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
            <div className="mt-4">{tabComponents[activeTab]}</div>
        </div>
    );
}
