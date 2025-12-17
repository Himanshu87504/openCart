import React, { useState } from "react";
import GeneralTab from "./GeneralTab";
import StoreTab from "./StoreTab";
import LocalTab from "./LocalTab";
import OptionTab from "./optionTab";
import ImageTab from "./ImageTab";
import MailTab from "./MailTab";
import ServerTab from "./ServerTab";
import Breadcrumb from "../../../Breadcrumb";

export default function SettingsEdit() {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = [
        "General",
        "Store",
        "Local",
        "Option",
        "Image",
        "Mail",
        "Server",
    ];

    const renderTab = () => {
        switch (activeTab) {
            case "General":
                return <GeneralTab />;
            case "Store":
                return <StoreTab />;
            case "Local":
                return <LocalTab />;
            case "Option":
                return <OptionTab />;
            case "Image":
                return (
                    <ImageTab
                        name="Default Store"
                        logoUrl=""
                        iconUrl=""
                        onChangeLogo={() => { }}
                        onChangeIcon={() => { }}
                    />
                );
            case "Mail":
                return <MailTab name="Default Store" />;
            case "Server":
                return <ServerTab />;
            default:
                return null;
        }
    };

    return (
        <div className="p-3 bg-[#F6F6F6] border border-gray-200 rounded shadow-sm">
            <Breadcrumb
                title="Setting"
                paths={[
                    { name: "Home" },
                    { name: "Setting", color: "text-blue-400" },
                ]}
            />
            <div className="p-2 border border-gray-300">
                <h1>Edit Setting</h1>
            </div>
            <div className="border-b border-gray-300 bg-white p-3">
                <div className="flex gap-6 text-sm text-gray-600">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3  ${activeTab === tab
                                ? "font-semibold text-black border-b-2 border-black"
                                : "hover:text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>


            <div className=" bg-white p-6 ">
                {renderTab()}
            </div>
        </div>
    );
}
