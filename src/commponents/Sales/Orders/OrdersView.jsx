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
                            <input className="w-full border p-2 rounded mt-1" defaultValue="Aswin" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Customer Group</label>
                            <select className="w-full border p-2 rounded mt-1">
                                <option>Default</option>
                            </select>
                        </div>

                        <div>
                            <label className="text-sm font-semibold">First Name</label>
                            <input className="w-full border p-2 rounded mt-1" defaultValue="Aswin Chandran" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Last Name</label>
                            <input className="w-full border p-2 rounded mt-1" defaultValue="PC" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">E-Mail</label>
                            <input className="w-full border p-2 rounded mt-1" defaultValue="aswin@gmail.com" />
                        </div>

                        <div>
                            <label className="text-sm font-semibold">Telephone</label>
                            <input className="w-full border p-2 rounded mt-1" placeholder="Telephone" />
                        </div>
                    </>
                );

            case "invoice":
                return (
                    <>
                        <div>
                            <label className="text-sm font-semibold">Invoice No</label>
                            <input className="w-full border p-2 rounded mt-1" defaultValue="INV-2024-000" />
                        </div>
                    </>
                );

            case "payment_address":
                return (
                    <>
                        <div>
                            <label className="text-sm font-semibold">Payment Address</label>
                            <textarea className="w-full border p-2 rounded mt-1" rows={4}></textarea>
                        </div>
                    </>
                );

            case "shipping_address":
                return (
                    <>
                        <div>
                            <label className="text-sm font-semibold">Shipping Address</label>
                            <textarea
                                className="w-full border p-2 rounded mt-1"
                                rows={4}
                                defaultValue={`Aswin J
bharathiyar street
madurai
625014
Tamil Nadu
India`}
                            />
                        </div>
                    </>
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
        <div className="border border-gray-300 bg-white">

            {/* ======================== MODAL ======================== */}
            {openModal && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white w-[480px] rounded shadow-lg p-5 max-h-[90vh] overflow-y-auto">

                        <div className="flex justify-between items-center pb-3 border-b">
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
                                className="bg-blue-500 text-white px-4 py-2 rounded"
                                onClick={() => setOpenModal(false)}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ======================== HEADER ======================== */}
            <div className="flex items-center gap-2 px-4 py-3 border-b bg-[#F6F6F6] text-[16px] font-semibold">
                <span className="text-black">🛈</span>
                Order (#3279)
            </div>

            {/* ======================== TOP SECTIONS ======================== */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4">

                <div className="border p-3 rounded">
                    <div className="flex justify-between items-center font-semibold">
                        <span>Invoice</span>
                        <CiSettings
                            className="text-[20px] cursor-pointer"
                            onClick={() => handleOpen("invoice")}
                        />
                    </div>
                    <p className="text-gray-500 mt-1">INV-2024-000</p>
                </div>

                <div className="border p-3 rounded">
                    <div className="flex justify-between items-center font-semibold">
                        <span>Customer</span>
                        <CiSettings
                            className="text-[20px] cursor-pointer"
                            onClick={() => handleOpen("customer")}
                        />
                    </div>
                    <p className="text-blue-500 mt-1 cursor-pointer">Aswin J</p>
                </div>

                <div className="border p-3 rounded">
                    <div className="flex justify-between items-center font-semibold">
                        <span>Date Added</span>
                        <CiSettings className="text-[20px] cursor-pointer" />
                    </div>
                    <p className="text-gray-500 mt-1">02/12/2025</p>
                </div>
            </div>

            {/* ================= PRODUCT TABLE ================= */}
            <div className="p-4">
                <table className="w-full border text-sm">
                    <thead className="bg-[#F6F6F6]">
                        <tr>
                            <th className="border p-2">Product</th>
                            <th className="border p-2">Model</th>
                            <th className="border p-2">Quantity</th>
                            <th className="border p-2">Unit Price</th>
                            <th className="border p-2">Total</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border p-2">
                                <p className="text-blue-500 cursor-pointer">HP LP3065</p>
                                <p className="text-gray-500 text-xs">- Delivery Date: 2011-04-22</p>
                                <p className="text-gray-500 text-xs">- Points: 300</p>
                            </td>
                            <td className="border p-2">Product 21</td>
                            <td className="border p-2">1</td>
                            <td className="border p-2">$100.00</td>
                            <td className="border p-2">$100.00</td>
                            <td className="border p-2">
                                <button className="h-8 w-8 bg-red-500 text-white rounded flex items-center justify-center">
                                    ⬤
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="text-center py-3 text-gray-600 border-t cursor-pointer">
                More.. ▼
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">

                <div className="border p-3 rounded">
                    <div className="flex justify-between items-center font-semibold border-b pb-1">
                        <span>Payment Address</span>
                        <CiSettings
                            className="text-[20px] cursor-pointer"
                            onClick={() => handleOpen("payment_address")}
                        />
                    </div>
                    <div className="p-2 h-24"></div>
                </div>

                <div className="border p-3 rounded">
                    <div className="flex justify-between items-center font-semibold border-b pb-1">
                        <span>Shipping Address</span>
                        <CiSettings
                            className="text-[20px] cursor-pointer"
                            onClick={() => handleOpen("shipping_address")}
                        />
                    </div>

                    <div className="p-2 leading-5 text-gray-700">
                        Aswin J<br />
                        bharathiyar street<br />
                        madurai<br />
                        625014<br />
                        Tamil Nadu<br />
                        India
                    </div>
                </div>
            </div>

            <div className="p-4">
                <table className="w-full border text-sm">
                    <tbody>
                        <tr>
                            <td className="border p-2"></td>
                            <td className="border p-2 text-right font-semibold">Sub-Total</td>
                            <td className="border p-2">$100.00</td>
                        </tr>
                        <tr>
                            <td className="border p-2"></td>
                            <td className="border p-2 text-right font-semibold">Flat Shipping Rate</td>
                            <td className="border p-2">$5.00</td>
                        </tr>
                        <tr>
                            <td className="border p-2"></td>
                            <td className="border p-2 text-right font-semibold">Total</td>
                            <td className="border p-2">$105.00</td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex justify-end gap-3 mt-4">
                    <button className="px-4 py-2 bg-[#D7F0FF] border rounded flex items-center gap-2">
                        <LuRefreshCw /> Refresh
                    </button>
                    <button className="px-4 py-2 bg-[#1A7BB0] text-white rounded">
                        Confirm
                    </button>
                </div>
            </div>


            <div className="w-full p-6 bg-white">
                {/* Tabs */}
                <div className="flex border-b mb-6">
                    <button
                        onClick={() => setActiveTab("history")}
                        className={`px-4 py-2 font-medium ${activeTab === "history"
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "text-gray-500"
                            }`}
                    >
                        History
                    </button>

                    <button
                        onClick={() => setActiveTab("additional")}
                        className={`px-4 py-2 font-medium ${activeTab === "additional"
                            ? "border-b-2 border-blue-600 text-blue-600"
                            : "text-gray-500"
                            }`}
                    >
                        Additional
                    </button>
                </div>

                {/* -------------------- HISTORY TAB -------------------- */}
                {activeTab === "history" && (
                    <>
                        <h2 className="text-xl font-semibold mb-3">History</h2>

                        <div className="border rounded overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-100 text-gray-600 text-sm">
                                    <tr>
                                        <th className="p-3 border">Date Added</th>
                                        <th className="p-3 border">Comment</th>
                                        <th className="p-3 border">Status</th>
                                        <th className="p-3 border">Customer Notified</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="text-sm">
                                        <td className="p-3 border">02/12/2025</td>
                                        <td className="p-3 border"></td>
                                        <td className="p-3 border">Pending</td>
                                        <td className="p-3 border">No</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-sm text-gray-500 mt-2">
                            Showing 1 to 1 of 1 (1 Pages)
                        </p>

                        {/* Add History */}
                        <h2 className="text-xl font-semibold mt-8 mb-4">Add History</h2>

                        {/* Order Status */}
                        <div className="mb-6">
                            <label className="block mb-2 font-medium">Order Status</label>
                            <select className="w-full border p-2 rounded">
                                <option>Pending</option>
                            </select>
                        </div>

                        {/* Override */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <label className="font-medium">Override</label>
                                <input type="checkbox" className="toggle toggle-sm" />
                            </div>
                            <p className="text-gray-500 text-sm mt-1">
                                If the customer's order is being blocked due to anti-fraud
                                extension enable override.
                            </p>
                        </div>

                        {/* Notify */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3">
                                <label className="font-medium">Notify Customer</label>
                                <input type="checkbox" className="toggle toggle-sm" />
                            </div>
                        </div>

                        {/* Comment */}
                        <div className="mb-6">
                            <label className="block mb-2 font-medium">Comment</label>
                            <textarea
                                className="w-full border rounded p-3"
                                rows="5"
                                placeholder="Comment"
                            ></textarea>
                        </div>

                        <button className="bg-blue-600 text-white px-5 py-2 rounded">
                            Add History
                        </button>
                    </>
                )}

                {/* -------------------- ADDITIONAL TAB -------------------- */}
                {activeTab === "additional" && (
                    <div className="p-4 border rounded bg-gray-50">
                        <h2 className="text-xl font-semibold mb-4">Additional</h2>
                        <p className="text-gray-700 text-lg">Hello Additional History</p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default OrdersView;
