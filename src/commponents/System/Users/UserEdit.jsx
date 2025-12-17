import React, { useState } from "react";
import UserGeneralTab from "./UserGeneralTab";
import UserAuthorizeTab from "./UserAuthorizeTab";
import UserLoginTab from "./UserLoginTab";
import Breadcrumb from "../../Breadcrumb";

export default function UserEdit() {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = ["General", "Authorize", "Login"];

    const tabComponents = {
        General: <UserGeneralTab />,
        Authorize: <UserAuthorizeTab />,
        Login: <UserLoginTab />,
    };

    return (
        <div className=" bg-[#F6F6F6] pl-6">
            <Breadcrumb
                title="User"
                paths={[
                    { name: "Home" },
                    { name: "User", color: "text-blue-400" },
                ]}
            />
            <div className="border pt-1 pl-3 border-gray-300">
                <h2 className="text-xl font-semibold mb-2">Edit User</h2>
            </div>
            <div className="border border-gray-300 p-2 bg-white">
                <div className="flex gap-6 border-b border-gray-300 pb-2 text-gray-600 text-sm">
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


                <div className="mt-4">{tabComponents[activeTab]}</div>
            </div>
        </div>
    );
}
