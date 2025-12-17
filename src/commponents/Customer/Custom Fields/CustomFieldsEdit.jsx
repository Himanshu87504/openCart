// File: CustomFieldsEdit.jsx

import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import { FaFlag } from "react-icons/fa";

export default function CustomFieldsEdit() {
    const [form, setForm] = useState({
        name: "Checkbox",
        location: "Account",
        type: "Checkbox",
        status: false,
        sortOrder: 3,
        customerGroup: true,
        required: true,
    });

    const [values, setValues] = useState([
        { name: "Test 1", sort: 1 },
        { name: "Test 2", sort: 2 },
        { name: "Test 3", sort: 3 },
    ]);

    const updateValue = (index, field, value) => {
        const updated = [...values];
        updated[index][field] = value;
        setValues(updated);
    };

    const removeValue = (index) => {
        setValues(values.filter((_, i) => i !== index));
    };

    const addValue = () => {
        setValues([...values, { name: "", sort: values.length + 1 }]);
    };

    return (
        <div className="bg-[#F6F6F6] p-4">
            <Breadcrumb
                title="Customer Field"
                paths={[
                    { name: "Home" },
                    { name: "Customer Filed", color: "text-blue-400" },
                ]}
            />
            <div className="border border-gray-300">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-3 ">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path d="M15.232 5.232l3.536 3.536M9 11l4-4 6 6M3 17.25V21h3.75L17.81 9.94l-3.536-3.536L3 17.25z" />
                    </svg>
                    Edit Custom Field
                </h2>
            </div>
            <div className="w-full bg-white border border-gray-300 p-6">
                <h3 className="text-xl font-semibold mb-6">Custom Field</h3>

                <div className="space-y-8">


                    <div>
                        <label className="font-medium">
                            <span className="text-red-500">*</span> Custom Field Name
                        </label>
                        <div className="mt-2 flex items-center border border-gray-300 rounded">
                            <FaFlag className="w-6 p-1 h-10 border border-gray-200" />
                            <input
                                className=" h-10  border-gray-300 rounded px-3 py-2 w-full"
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="font-medium">Location</label>
                        <select
                            className="border border-gray-300 rounded px-3 py-2 mt-2 w-full"
                            value={form.location}
                            onChange={(e) => setForm({ ...form, location: e.target.value })}
                        >
                            <option>Account</option>
                            <option>Address</option>
                            <option>Payment</option>
                        </select>
                    </div>

                    {/* Type */}
                    <div>
                        <label className="font-medium">Type</label>
                        <select
                            className="border border-gray-300 rounded px-3 py-2 mt-2 w-full"
                            value={form.type}
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                        >
                            <option>Checkbox</option>
                            <option>Select</option>
                            <option>Text</option>
                        </select>
                    </div>

                    {/* Customer Group */}
                    <div>
                        <label className="font-medium">Customer Group</label>

                        <div className="mt-3 border border-gray-300 bg-gray-50 rounded p-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={form.customerGroup}
                                    onChange={() => setForm({ ...form, customerGroup: !form.customerGroup })}
                                    className="h-4 w-4"
                                />
                                Default
                            </label>
                        </div>
                    </div>

                    {/* Required */}
                    <div>
                        <label className="font-medium">Required</label>

                        <div className="mt-3 border border-gray-300 bg-gray-50 rounded p-4">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={form.required}
                                    onChange={() => setForm({ ...form, required: !form.required })}
                                    className="h-4 w-4"
                                />
                                Default
                            </label>
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="font-medium">Status</label>
                        <div className="mt-3">
                            <button
                                onClick={() => setForm({ ...form, status: !form.status })}
                                className={`relative inline-flex h-6 w-12 items-center rounded-full transition 
                                ${form.status ? "bg-green-500" : "bg-gray-300"}`}
                            >
                                <span
                                    className={`block h-5 w-5 rounded-full bg-white shadow transform transition 
                                    ${form.status ? "translate-x-6" : "translate-x-1"}`}
                                ></span>
                            </button>
                        </div>
                    </div>

                    {/* Sort Order */}
                    <div>
                        <label className="font-medium">Sort Order</label>
                        <input
                            type="number"
                            className="border border-gray-300 rounded px-3 py-2 mt-2 w-32"
                            value={form.sortOrder}
                            onChange={(e) => setForm({ ...form, sortOrder: e.target.value })}
                        />
                        <p className="text-gray-500 text-sm mt-1">
                            Use minus to count backwards from the last field in the set.
                        </p>
                    </div>

                    {/* Custom Field Values */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Custom Field Values</h3>

                        <label className="font-medium">
                            <span className="text-red-500">*</span> Custom Field Value Name
                        </label>

                        <div className="mt-3 border border-gray-300 bg-gray-50 rounded p-4 space-y-5">

                            {values.map((row, index) => (
                                <div key={index} className="grid grid-cols-12 gap-4 items-center">

                                    {/* Name */}
                                    <div className="col-span-7 flex items-center border border-gray-300 rounded">
                                        {/* <img src="/flags/en.png" className="w-6 h-10 " /> */}
                                        <FaFlag className="p-1 w-6 h-10" />
                                        <input
                                            className="border border-gray-200 px-3 py-2 w-full"
                                            value={row.name}
                                            onChange={(e) => updateValue(index, "name", e.target.value)}
                                        />
                                    </div>


                                    <div className="col-span-3">
                                        <input
                                            type="number"
                                            className="border border-gray-300 px-3 py-2 w-full"
                                            value={row.sort}
                                            onChange={(e) => updateValue(index, "sort", e.target.value)}
                                        />
                                    </div>


                                    <div className="col-span-2 flex justify-end">
                                        <button
                                            onClick={() => removeValue(index)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-3 rounded"
                                        >
                                            −
                                        </button>
                                    </div>

                                </div>
                            ))}

                            {/* Add Button */}
                            <div className="flex justify-end mt-3">
                                <button
                                    onClick={addValue}
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded"
                                >
                                    +
                                </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
