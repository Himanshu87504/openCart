import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";

const ReturnEdit = () => {
    const [activeTab, setActiveTab] = useState("general");

    const [form, setForm] = useState({
        orderId: "563356767",
        orderDate: "2025-12-05",
        customer: "b w",
        firstName: "b",
        lastName: "w",
        email: "41374671964717@gmail.com",
        telephone: "87878748",

        product: "samsung ultra pro max",
        model: "mobile phone",
        quantity: 1,
        returnReason: "Received Wrong Item",
        opened: "Opened",
        comment: "Comment",
        returnAction: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-6 bg-white border rounded">

            {/* TITLE */}
            <h1 className="text-xl font-semibold mb-4 flex items-center gap-2">
                ✏️ Edit Product Return
            </h1>

            {/* TABS */}
            <div className="border-b mb-6 flex gap-6">

                {/* GENERAL TAB */}
                <button
                    onClick={() => setActiveTab("general")}
                    className={`pb-2 font-semibold ${activeTab === "general"
                        ? "text-blue-600 border-b-2 border-blue-500"
                        : "text-gray-500"
                        }`}
                >
                    General
                </button>

                {/* HISTORY TAB */}
                <button
                    onClick={() => setActiveTab("history")}
                    className={`pb-2 font-semibold ${activeTab === "history"
                        ? "text-blue-600 border-b-2 border-blue-500"
                        : "text-gray-500"
                        }`}
                >
                    History
                </button>
            </div>

            {/* -------------------- GENERAL CONTENT -------------------- */}
            {activeTab === "general" && (
                <>
                    {/* ORDER INFORMATION */}
                    <h2 className="text-lg font-semibold mb-4">Order Information</h2>

                    <div className="space-y-5">
                        <div>
                            <label className="font-medium text-sm">* Order ID</label>
                            <input
                                name="orderId"
                                value={form.orderId}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-sm">Order Date</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    name="orderDate"
                                    value={form.orderDate}
                                    onChange={handleChange}
                                    className="w-full border p-2 rounded mt-1"
                                />
                                <CiCalendar className="absolute right-3 top-4 text-gray-600" />
                            </div>
                        </div>

                        <div>
                            <label className="font-medium text-sm">Customer</label>
                            <input
                                name="customer"
                                value={form.customer}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-sm">* First Name</label>
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-sm">* Last Name</label>
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-sm">* E-Mail</label>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-sm">* Telephone</label>
                            <input
                                name="telephone"
                                value={form.telephone}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>
                    </div>

                    {/* PRODUCT INFO */}
                    <h2 className="text-lg font-semibold mt-10 mb-4">
                        Product Information & Reason for Return
                    </h2>

                    <div className="space-y-5">
                        <div>
                            <label className="font-medium text-sm">* Product</label>
                            <input
                                name="product"
                                value={form.product}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                            <p className="text-xs text-gray-500">(Autocomplete)</p>
                        </div>

                        <div>
                            <label className="font-medium text-sm">* Model</label>
                            <input
                                name="model"
                                value={form.model}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-sm">Quantity</label>
                            <input
                                name="quantity"
                                value={form.quantity}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            />
                        </div>

                        <div>
                            <label className="font-medium text-sm">Return Reason</label>
                            <select
                                name="returnReason"
                                value={form.returnReason}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            >
                                <option>Received Wrong Item</option>
                                <option>Damaged Item</option>
                                <option>Not as Described</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-medium text-sm">Opened</label>
                            <select
                                name="opened"
                                value={form.opened}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            >
                                <option>Opened</option>
                                <option>Unopened</option>
                            </select>
                        </div>

                        <div>
                            <label className="font-medium text-sm">Comment</label>
                            <textarea
                                name="comment"
                                value={form.comment}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1 h-24"
                            ></textarea>
                        </div>

                        <div>
                            <label className="font-medium text-sm">Return Action</label>
                            <select
                                name="returnAction"
                                value={form.returnAction}
                                onChange={handleChange}
                                className="w-full border p-2 rounded mt-1"
                            >
                                <option value="">Select Action</option>
                                <option>Refund</option>
                                <option>Replace</option>
                                <option>Store Credit</option>
                            </select>
                        </div>
                    </div>
                </>
            )}

            {/* -------------------- HISTORY CONTENT -------------------- */}
            {activeTab === "history" && (
                <div>

                    <h2 className="text-lg font-semibold mb-4">History</h2>

                    {/* History Table */}
                    <div className="border rounded">
                        <div className="grid grid-cols-4 bg-gray-100 p-2 font-medium">
                            <div>Date Added</div>
                            <div>Comment</div>
                            <div>Status</div>
                            <div>Customer Notified</div>
                        </div>

                        <div className="text-center p-4 text-gray-500">
                            No results!
                        </div>
                    </div>

                    <h2 className="text-lg font-semibold mt-10 mb-4">Add History</h2>

                    {/* Add History Form */}
                    <div className="space-y-6">

                        {/* Return Status */}
                        <div>
                            <label className="text-sm font-medium">Return Status</label>
                            <select className="w-full border p-2 rounded mt-1">
                                <option>Awaiting Products</option>
                                <option>Complete</option>
                                <option>Pending</option>
                            </select>
                        </div>

                        {/* Notify Customer */}
                        <div className="flex items-center gap-4">
                            <label className="text-sm font-medium">Notify Customer</label>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-10 h-5 bg-gray-300 rounded-full peer peer-checked:bg-blue-600"></div>
                                <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                            </label>
                        </div>

                        {/* Comment */}
                        <div>
                            <label className="text-sm font-medium">Comment</label>
                            <textarea
                                className="w-full border p-2 rounded h-28 mt-1"
                                placeholder="Comment"
                            ></textarea>
                        </div>

                        {/* Add History Button */}
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Add History
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ReturnEdit;
