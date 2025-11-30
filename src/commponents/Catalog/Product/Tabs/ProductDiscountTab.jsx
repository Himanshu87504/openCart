// ProductDiscountTab.jsx
import React, { useState } from "react";

const ProductDiscountTab = () => {
    const [rows, setRows] = useState([
        {
            id: 1,
            customerGroup: "Default",
            quantity: 10,
            priority: 1,
            price: 88,
            dateStart: "",
            dateEnd: "",
        },
        {
            id: 2,
            customerGroup: "Default",
            quantity: 20,
            priority: 1,
            price: 77,
            dateStart: "",
            dateEnd: "",
        },
        {
            id: 3,
            customerGroup: "Default",
            quantity: 30,
            priority: 1,
            price: 66,
            dateStart: "",
            dateEnd: "",
        },
    ]);

    const updateRow = (id, field, value) => {
        setRows((prev) =>
            prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
        );
    };

    const removeRow = (id) => {
        setRows((prev) => prev.filter((r) => r.id !== id));
    };

    const addRow = () => {
        setRows((prev) => [
            ...prev,
            {
                id: Date.now(),
                customerGroup: "Default",
                quantity: 0,
                priority: 1,
                price: 0,
                dateStart: "",
                dateEnd: "",
            },
        ]);
    };

    return (
        <div className="border border-gray-300 bg-white text-sm rounded">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-3 py-2 text-left border border-gray-300 w-1/4">
                            Customer Group
                        </th>
                        <th className="px-3 py-2 text-left border border-gray-300 w-16">
                            Quantity
                        </th>
                        <th className="px-3 py-2 text-left border border-gray-300 w-16">
                            Priority
                        </th>
                        <th className="px-3 py-2 text-left border border-gray-300 w-24">
                            Price
                        </th>
                        <th className="px-3 py-2 text-left border border-gray-300 w-32">
                            Date Start
                        </th>
                        <th className="px-3 py-2 text-left border border-gray-300 w-32">
                            Date End
                        </th>
                        <th className="px-3 py-2 text-left border border-gray-300 w-12"></th>
                    </tr>
                </thead>

                <tbody>
                    {rows.map((r) => (
                        <tr key={r.id}>
                            {/* Customer Group */}
                            <td className="px-3 py-2 border border-gray-300">
                                <select
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={r.customerGroup}
                                    onChange={(e) =>
                                        updateRow(r.id, "customerGroup", e.target.value)
                                    }
                                >
                                    <option value="Default">Default</option>
                                    <option value="VIP">VIP</option>
                                    <option value="Wholesale">Wholesale</option>
                                </select>
                            </td>

                            {/* Quantity */}
                            <td className="px-3 py-2 border border-gray-300">
                                <input
                                    type="number"
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={r.quantity}
                                    onChange={(e) =>
                                        updateRow(r.id, "quantity", Number(e.target.value))
                                    }
                                />
                            </td>

                            {/* Priority */}
                            <td className="px-3 py-2 border border-gray-300">
                                <input
                                    type="number"
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={r.priority}
                                    onChange={(e) =>
                                        updateRow(r.id, "priority", Number(e.target.value))
                                    }
                                />
                            </td>

                            {/* Price */}
                            <td className="px-3 py-2 border border-gray-300">
                                <input
                                    type="number"
                                    step="0.0001"
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={r.price}
                                    onChange={(e) =>
                                        updateRow(r.id, "price", Number(e.target.value))
                                    }
                                />
                            </td>

                            {/* Date Start */}
                            <td className="px-3 py-2 border border-gray-300">
                                <input
                                    type="date"
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={r.dateStart}
                                    onChange={(e) =>
                                        updateRow(r.id, "dateStart", e.target.value)
                                    }
                                />
                            </td>

                            {/* Date End */}
                            <td className="px-3 py-2 border border-gray-300">
                                <input
                                    type="date"
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={r.dateEnd}
                                    onChange={(e) =>
                                        updateRow(r.id, "dateEnd", e.target.value)
                                    }
                                />
                            </td>

                            {/* Delete button */}
                            <td className="px-3 py-2 border border-gray-300">
                                <button
                                    className="h-8 w-8 rounded bg-red-500 text-lg text-white"
                                    type="button"
                                    onClick={() => removeRow(r.id)}
                                >
                                    ×
                                </button>
                            </td>
                        </tr>
                    ))}

                    {/* Add row button */}
                    <tr>
                        <td className="px-3 py-2 border border-gray-300 text-right" colSpan={7}>
                            <button
                                type="button"
                                onClick={addRow}
                                className="h-8 w-8 rounded bg-blue-500 text-lg text-white"
                            >
                                +
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductDiscountTab;
