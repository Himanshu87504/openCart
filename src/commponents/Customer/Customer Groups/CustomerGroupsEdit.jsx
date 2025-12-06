// File: CustomerGroupsEdit.jsx

import React, { useState } from "react";

export default function CustomerGroupsEdit() {
    const [form, setForm] = useState({
        name: "Default",
        description: "test",
        approve: false,
        sortOrder: 1,
    });

    return (
        <div className="w-full bg-white border rounded shadow-sm p-6">
            {/* Header */}
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
                <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path d="M15.232 5.232l3.536 3.536M9 11l4-4 6 6M3 17.25V21h3.75L17.81 9.94l-3.536-3.536L3 17.25z" />
                </svg>
                Edit Customer Group
            </h2>

            {/* Form */}
            <div className="space-y-8">
                {/* Customer Group Name */}
                <div>
                    <label className="font-medium">
                        <span className="text-red-500">*</span> Customer Group Name
                    </label>
                    <div className="mt-2 flex items-center gap-2">
                        <img
                            src="/flags/en.png"
                            alt="lang"
                            className="w-6 h-4 border"
                        />
                        <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="border rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="font-medium">Description</label>
                    <div className="mt-2 flex items-start gap-2">
                        <img
                            src="/flags/en.png"
                            alt="lang"
                            className="w-6 h-4 border mt-2"
                        />
                        <textarea
                            rows="4"
                            value={form.description}
                            onChange={(e) => setForm({ ...form, description: e.target.value })}
                            className="border rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>

                {/* Approve New Customers */}
                <div>
                    <label className="font-medium">Approve New Customers</label>
                    <div className="mt-3 flex items-center gap-3">
                        <button
                            onClick={() =>
                                setForm({ ...form, approve: !form.approve })
                            }
                            className={`relative inline-flex h-6 w-12 items-center rounded-full transition 
                ${form.approve ? "bg-green-500" : "bg-gray-300"}`}
                        >
                            <span
                                className={`block h-5 w-5 rounded-full bg-white transform transition 
                ${form.approve ? "translate-x-6" : "translate-x-1"}`}
                            ></span>
                        </button>
                        <p className="text-gray-500 text-sm">
                            Customers must be approved by an administrator before they can login.
                        </p>
                    </div>
                </div>

                {/* Sort Order */}
                <div>
                    <label className="font-medium">Sort Order</label>
                    <div className="mt-2 w-32">
                        <input
                            type="number"
                            value={form.sortOrder}
                            onChange={(e) => setForm({ ...form, sortOrder: e.target.value })}
                            className="border rounded px-3 py-2 w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
