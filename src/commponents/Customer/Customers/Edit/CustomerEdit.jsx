import React, { useState } from "react";
import GeneralTab from "./GeneralTab";
import AddressForm from "./AddressForm";
import HistorySection from "./HistorySection";
import IpAddressTable from "./IpAddressTable";
import RewardPoints from "./RewardPoints";
import Transactions from "./Transactions";
import Breadcrumb from "../../../Breadcrumb";

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
        <div className="  rounded shadow-sm bg-[#F6F6F6]">
            <Breadcrumb
                title="Customer"
                paths={[
                    { name: "Home" },
                    { name: "Customer", color: "text-blue-400" },
                ]}
            />
            <div className="pl-5 pr-5">
                <div className="border border-gray-300 pt-2 bg-[#F6F6F6]">
                    <h2 className="text-xl font-semibold mb-2 pl-4">Edit Customer</h2>
                </div>

                <div className="flex gap-6  pb-2 pt-2 text-gray-600 text-sm pl-4 border border-gray-300 border-b-0 bg-white">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={`pb-2 ${activeTab === tab
                                ? "font-semibold text-black border-b-0 border p-1 border-gray-300"
                                : ""
                                }`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

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




