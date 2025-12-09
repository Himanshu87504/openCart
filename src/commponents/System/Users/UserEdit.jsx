import React, { useState } from "react";
import UserGeneralTab from "./UserGeneralTab";
import UserAuthorizeTab from "./UserAuthorizeTab";
import UserLoginTab from "./UserLoginTab";

export default function UserEdit() {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = ["General", "Authorize", "Login"];

    const tabComponents = {
        General: <UserGeneralTab />,
        Authorize: <UserAuthorizeTab />,
        Login: <UserLoginTab />,
    };

    return (
        <div className="p-6 bg-white border rounded shadow-sm">
            {/* PAGE TITLE */}
            <h2 className="text-xl font-semibold mb-4">Edit User</h2>

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
