import React, { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { LuRefreshCw } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const OrdersView = () => {
    const [openModal, setOpenModal] = useState(false);
    const [modalType, setModalType] = useState("");
    const [activeTab, setActiveTab] = useState("history");

    const handleOpen = (type) => {
        setModalType(type);
        setOpenModal(true);
    };

    const renderModalFields = () => {
        switch (modalType) {
            case "customer":
                return (
                    <>
                        <div>
                            <label className="text-sm font-semibold">Customer</label>
                            <input className="w-full border border-gray-300 p-2 rounded mt-1" defaultValue="Aswin" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Customer Group</label>
                            <select className="w-full border border-gray-300 p-2 rounded mt-1">
                                <option>Default</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">First Name</label>
                            <input className="w-full border border-gray-300 p-2 rounded mt-1" defaultValue="Aswin Chandran" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Last Name</label>
                            <input className="w-full border border-gray-300 p-2 rounded mt-1" defaultValue="PC" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">E-Mail</label>
                            <input className="w-full border border-gray-300 p-2 rounded mt-1" defaultValue="aswin@gmail.com" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Telephone</label>
                            <input className="w-full border border-gray-300 p-2 rounded mt-1" placeholder="Telephone" />
                        </div>
                    </>
                );

            case "invoice":
                return (
                    <div>
                        <label className="text-sm font-semibold">Invoice No</label>
                        <input className="w-full border border-gray-300 p-2 rounded mt-1" defaultValue="INV-2024-000" />
                    </div>
                );

            case "payment_address":
                return (
                    <div>
                        <label className="text-sm font-semibold">Payment Address</label>
                        <textarea className="w-full border border-gray-300 p-2 rounded mt-1" rows={4}></textarea>
                    </div>
                );

            case "shipping_address":
                return (
                    <div>
                        <label className="text-sm font-semibold">Shipping Address</label>
                        <textarea
                            className="w-full border border-gray-300 p-2 rounded mt-1"
                            rows={4}
                            defaultValue={`Aswin J
bharathiyar street
madurai
625014
Tamil Nadu
India`}
                        />
                    </div>
                );

            default:
                return <p>No fields found.</p>;
        }
    };

    const modalTitle =
        modalType === "customer"
            ? "Customer"
            : modalType === "invoice"
                ? "Invoice"
                : modalType === "payment_address"
                    ? "Payment Address"
                    : modalType === "shipping_address"
                        ? "Shipping Address"
                        : "Settings";

    return (
        <div className="bg-[#F6F6F6] min-h-screen p-6">

            {/* ======================== MODAL ======================== */}
            {openModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white w-full max-w-md rounded shadow-lg p-5 max-h-[90vh] overflow-y-auto">

                        <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                            <h2 className="text-xl font-semibold">{modalTitle}</h2>
                            <IoClose
                                className="text-2xl cursor-pointer"
                                onClick={() => setOpenModal(false)}
                            />
                        </div>

                        <div className="mt-4 flex flex-col gap-4">
                            {renderModalFields()}
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                className="bg-blue-600 text-white px-4 py-2 rounded"
                                onClick={() => setOpenModal(false)}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================== HEADER ======================== */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-300 bg-white text-[16px] font-semibold">
                🛈 Order (#3279)
            </div>

            {/* ======================== TOP SECTIONS ======================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">

                {[
                    { label: "Invoice", value: "INV-2024-000", type: "invoice" },
                    { label: "Customer", value: "Aswin J", type: "customer", color: "text-blue-500 cursor-pointer" },
                    { label: "Date Added", value: "02/12/2025", type: "" },
                ].map((item, idx) => (
                    <div key={idx} className="border border-gray-300 p-3 rounded bg-white">
                        <div className="flex justify-between items-center font-semibold border-b border-gray-300 pb-1">
                            <span>{item.label}</span>
                            {item.type && (
                                <CiSettings
                                    className="text-[20px] cursor-pointer"
                                    onClick={() => handleOpen(item.type)}
                                />
                            )}
                        </div>
                        <p className={`${item.color ? item.color : "text-gray-500"} mt-1`}>{item.value}</p>
                    </div>
                ))}
            </div>

            {/* ================= PRODUCT TABLE ================= */}
            <div className="p-4 bg-white border border-gray-300 rounded mt-4">
                <table className="w-full border text-sm border-collapse">
                    <thead className="bg-[#F6F6F6] text-gray-700 text-sm">
                        <tr>
                            {["Product", "Model", "Quantity", "Unit Price", "Total", "Action"].map((head, i) => (
                                <th key={i} className="border border-gray-300 p-2 text-left">{head}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-gray-300 p-2">
                                <p className="text-blue-500 cursor-pointer">HP LP3065</p>
                                <p className="text-gray-500 text-xs">- Delivery Date: 2011-04-22</p>
                                <p className="text-gray-500 text-xs">- Points: 300</p>
                            </td>
                            <td className="border border-gray-300 p-2">Product 21</td>
                            <td className="border border-gray-300 p-2">1</td>
                            <td className="border border-gray-300 p-2">$100.00</td>
                            <td className="border border-gray-300 p-2">$100.00</td>
                            <td className="border border-gray-300 p-2 flex justify-center">
                                <button className="h-8 w-8 bg-red-500 text-white rounded flex items-center justify-center">⬤</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="text-center py-3 text-gray-600 border-t border-gray-300 cursor-pointer">
                More.. ▼
            </div>

            {/* PAYMENT & SHIPPING ADDRESS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                {[
                    { label: "Payment Address", type: "payment_address", content: "" },
                    {
                        label: "Shipping Address", type: "shipping_address", content: `Aswin J
bharathiyar street
madurai
625014
Tamil Nadu
India` },
                ].map((item, idx) => (
                    <div key={idx} className="border border-gray-300 p-3 rounded bg-white">
                        <div className="flex justify-between items-center font-semibold border-b border-gray-300 pb-1">
                            <span>{item.label}</span>
                            <CiSettings
                                className="text-[20px] cursor-pointer"
                                onClick={() => handleOpen(item.type)}
                            />
                        </div>
                        <div className="p-2 leading-5 text-gray-700">{item.content}</div>
                    </div>
                ))}
            </div>

            {/* TOTALS */}
            <div className="p-4 bg-white border border-gray-300 rounded mt-4">
                <table className="w-full border-collapse">
                    <tbody>
                        {[
                            { label: "Sub-Total", value: "$100.00" },
                            { label: "Flat Shipping Rate", value: "$5.00" },
                            { label: "Total", value: "$105.00" },
                        ].map((item, idx) => (
                            <tr key={idx}>
                                <td className="border border-gray-300 p-2"></td>
                                <td className="border border-gray-300 p-2 text-right font-semibold">{item.label}</td>
                                <td className="border border-gray-300 p-2">{item.value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-end gap-3 mt-4">
                    <button className="px-4 py-2 bg-[#D7F0FF] border border-gray-300 rounded flex items-center gap-2">
                        <LuRefreshCw /> Refresh
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Confirm</button>
                </div>
            </div>

            {/* HISTORY / ADDITIONAL TABS */}
            <div className="w-full bg-white border border-gray-300 rounded mt-4 p-4">
                {/* Tabs */}
                <div className="flex border-b border-gray-300 mb-6">
                    {["history", "additional"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 font-medium ${activeTab === tab
                                ? "border-b-2 border-blue-600 text-blue-600"
                                : "text-gray-500"
                                }`}
                        >
                            {tab === "history" ? "History" : "Additional"}
                        </button>
                    ))}
                </div>

                {/* HISTORY TAB */}
                {activeTab === "history" && (
                    <>
                        <h2 className="text-xl font-semibold mb-3">History</h2>
                        <div className="border border-gray-300 rounded overflow-hidden">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead className="bg-gray-50 text-gray-600">
                                    <tr>
                                        {["Date Added", "Comment", "Status", "Customer Notified"].map((head, i) => (
                                            <th key={i} className="p-3 border border-gray-300">{head}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-sm">
                                        <td className="p-3 border border-gray-300">02/12/2025</td>
                                        <td className="p-3 border border-gray-300"></td>
                                        <td className="p-3 border border-gray-300">Pending</td>
                                        <td className="p-3 border border-gray-300">No</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-gray-500 mt-2">
                            Showing 1 to 1 of 1 (1 Pages)
                        </p>

                        {/* Add History Form */}
                        <h2 className="text-xl font-semibold mt-8 mb-4">Add History</h2>

                        <div className="mb-6">
                            <label className="block mb-2 font-medium">Order Status</label>
                            <select className="w-full border border-gray-300 p-2 rounded">
                                <option>Pending</option>
                            </select>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <label className="font-medium">Override</label>
                                <input type="checkbox" className="toggle toggle-sm" />
                            </div>
                            <p className="text-gray-500 text-sm mt-1">
                                If the customer's order is being blocked due to anti-fraud extension enable override.
                            </p>
                        </div>

                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <label className="font-medium">Notify Customer</label>
                                <input type="checkbox" className="toggle toggle-sm" />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 font-medium">Comment</label>
                            <textarea
                                className="w-full border border-gray-300 rounded p-3"
                                rows="5"
                                placeholder="Comment"
                            ></textarea>
                        </div>

                        <button className="bg-blue-600 text-white px-5 py-2 rounded">
                            Add History
                        </button>
                    </>
                )}

                {/* ADDITIONAL TAB */}
                {activeTab === "additional" && (
                    <div className="p-4 border border-gray-300 rounded bg-gray-50">
                        <h2 className="text-xl font-semibold mb-4">Additional</h2>
                        <p className="text-gray-700 text-lg">Hello Additional History</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default OrdersView;
