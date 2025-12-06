import React, { useState } from "react";
import GeneralTab from "./GeneralTab";
import AddressForm from "./AddressForm";
import HistorySection from "./HistorySection";
import IpAddressTable from "./IpAddressTable";
import RewardPoints from "./RewardPoints";
import Transactions from "./Transactions";

export default function CustomerEdit() {
    const [activeTab, setActiveTab] = useState("General");

    const tabs = [
        "General",
        "Addresses",
        "Payment Methods",
        "History",
        "Transactions",
        "Reward Points",
        "IP Addresses",
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


            {activeTab === "Addresses" && <AddressForm />}

            {activeTab === "Payment Methods" && (
                <h3>Paymment Method</h3>
            )}

            {activeTab === "History" && <HistorySection />}

            {activeTab === "Transactions" && <Transactions />}

            {activeTab === "Reward Points" && <RewardPoints />}

            {activeTab === "IP Addresses" && <IpAddressTable />}
        </div>
    );
}




