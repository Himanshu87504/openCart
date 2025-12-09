import React, { useState } from "react";
import GeneralTab from "./GeneralTab";
import StoreTab from "./StoreTab";
import LocalTab from "./LocalTab";
import OptionTab from "./optionTab";
import ImageTab from "./ImageTab";
import MailTab from "./MailTab";
import ServerTab from "./ServerTab";

export default function SettingsEdit() {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = ["General", "Store", "Local", "Option", "Image", "Mail", "Server"];

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
        <div className="p-6 bg-white border rounded shadow-sm">
            {/* PAGE TITLE */}
            <h2 className="text-xl font-semibold mb-4">Edit Setting</h2>

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
            <div className="mt-4">{renderTab()}</div>
        </div>
    );
}
