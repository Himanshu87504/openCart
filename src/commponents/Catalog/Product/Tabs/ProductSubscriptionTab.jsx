// ProductSubscriptionTab.jsx
import React, { useState } from "react";

const ProductSubscriptionTab = () => {
    const [rows, setRows] = useState([
        {
            id: 1,
            plan: "",
            customerGroup: "",
            trialPrice: "",
            price: "",
        },
    ]);

    const updateRow = (id, field, value) => {
        setRows((prev) =>
            prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
        );
    };

    const addRow = () => {
        setRows((prev) => [
            ...prev,
            {
                id: Date.now(), // unique id
                plan: "",
                customerGroup: "",
                trialPrice: "",
                price: "",
            },
        ]);
    };

    const removeRow = (id) => {
        setRows((prev) => prev.filter((r) => r.id !== id));
    };

    return (
        <div className="border border-gray-300 bg-white text-sm rounded overflow-x-auto">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-3 py-2 border border-gray-300 w-1/4">
                            Subscription Plan
                        </th>
                        <th className="px-3 py-2 border border-gray-300 w-1/4">
                            Customer Group
                        </th>
                        <th className="px-3 py-2 border border-gray-300 w-24">
                            Trial Price
                        </th>
                        <th className="px-3 py-2 border border-gray-300 w-24">
                            Price
                        </th>
                        <th className="px-3 py-2 border border-gray-300 w-12"></th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id}>
                            {/* Subscription Plan */}
                            <td className="px-3 py-2 border border-gray-300">
                                <select
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={row.plan}
                                    onChange={(e) =>
                                        updateRow(row.id, "plan", e.target.value)
                                    }
                                >
                                    <option value=""> </option>
                                    <option value="plan1">Plan 1</option>
                                    <option value="plan2">Plan 2</option>
                                </select>
                            </td>

                            {/* Customer Group */}
                            <td className="px-3 py-2 border border-gray-300">
                                <select
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={row.customerGroup}
                                    onChange={(e) =>
                                        updateRow(row.id, "customerGroup", e.target.value)
                                    }
                                >
                                    <option value=""> </option>
                                    <option value="default">Default</option>
                                    <option value="wholesale">Wholesale</option>
                                </select>
                            </td>

                            {/* Trial Price */}
                            <td className="px-3 py-2 border border-gray-300">
                                <input
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    placeholder="Trial Price"
                                    value={row.trialPrice}
                                    onChange={(e) =>
                                        updateRow(row.id, "trialPrice", e.target.value)
                                    }
                                />
                            </td>

                            {/* Price */}
                            <td className="px-3 py-2 border border-gray-300">
                                <input
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    placeholder="Price"
                                    value={row.price}
                                    onChange={(e) =>
                                        updateRow(row.id, "price", e.target.value)
                                    }
                                />
                            </td>

                            {/* Add/Remove buttons */}
                            <td className="px-3 py-2 border border-gray-300">
                                <div className="flex justify-end gap-1">
                                    {rows.length > 1 && (
                                        <button
                                            type="button"
                                            onClick={() => removeRow(row.id)}
                                            className="h-8 w-8 rounded bg-red-500 text-lg text-white"
                                        >
                                            ×
                                        </button>
                                    )}
                                    <button
                                        type="button"
                                        onClick={addRow}
                                        className="h-8 w-8 rounded bg-blue-500 text-lg text-white"
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductSubscriptionTab;
