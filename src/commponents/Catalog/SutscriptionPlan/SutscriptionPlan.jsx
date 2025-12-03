import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import { Link } from "react-router-dom";

// const initialPlans = [
//     { id: 1, name: "Subscription Plan 1", status: "Enabled", sortOrder: 0 },
//     { id: 2, name: "Subscription Plan 2", status: "Enabled", sortOrder: 0 },
//     { id: 3, name: "Subscription Plan 3", status: "Enabled", sortOrder: 0 },
// ];

import initialPlans from './SubscriptionPlan.json'

export default function SubscriptionPlan() {
    const [plans, setPlans] = useState(initialPlans);
    const [selected, setSelected] = useState([]); // Store selected row IDs

    // ----------- Handle Select All -----------
    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelected(plans.map((p) => p.id)); // select all ids
        } else {
            setSelected([]); // unselect all
        }
    };

    // ----------- Handle Individual Checkbox -----------
    const handleSelectOne = (id) => {
        setSelected((prev) => {
            if (prev.includes(id)) {
                return prev.filter((item) => item !== id); // remove id
            } else {
                return [...prev, id]; // add id
            }
        });
    };

    // Check if all are selected
    const isAllSelected = selected.length === plans.length;

    return (
        <div className="w-full max-w-7xl mx-auto bg-white rounded-lg">
            <Breadcrumb
                title="Subscription Plans"
                paths={[
                    { name: "Home" },
                    { name: "Subscription Plans", color: "text-blue-400" },
                ]}
            />
            <div className="overflow-x-auto p-3 bg-[#F6F6F6]">
                <table className="min-w-full border text-sm bg-white">
                    <thead className="bg-gray-100 text-gray-700">
                        <tr>
                            {/* SELECT ALL */}
                            <th className="w-10 border border-gray-300 px-2 py-2 text-center bg-white">
                                <input
                                    type="checkbox"
                                    checked={isAllSelected}
                                    onChange={handleSelectAll}
                                />
                            </th>

                            <th className="text-left border border-gray-300 px-3 py-2 bg-white text-[#1874A6]">
                                Subscription Plan Name
                            </th>

                            <th className="text-right border border-gray-300 px-3 py-2 bg-white text-[#1874A6]">
                                Sort Order
                            </th>

                            <th className="text-center border border-gray-300 px-3 py-2 bg-white">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {plans.map((plan) => (
                            <tr key={plan.id} className="hover:bg-gray-50 bg-white">
                                <td className="border border-gray-300 px-2 py-2 text-center">
                                    {/* INDIVIDUAL CHECKBOX */}
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(plan.id)}
                                        onChange={() => handleSelectOne(plan.id)}
                                    />
                                </td>

                                <td className="border border-gray-300 px-3 py-2">
                                    <div className="text-blue-600 hover:underline cursor-pointer font-medium">
                                        {plan.name}
                                    </div>
                                    <div className="text-xs text-green-600 font-medium">
                                        {plan.status}
                                    </div>
                                </td>

                                <td className="border border-gray-300 px-3 py-2 text-right font-medium">
                                    {plan.sortOrder}
                                </td>

                                <td className="border border-gray-300 px-3 py-2 text-center">
                                    <Link
                                        to={`/Subscription/${plan.id}`}
                                        className="inline-flex items-center justify-center rounded bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 text-xs transition"
                                    >
                                        Edit
                                    </Link>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
