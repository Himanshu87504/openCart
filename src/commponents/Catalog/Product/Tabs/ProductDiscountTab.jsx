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
        <div className="border border-gray-200 bg-white text-sm">
            {/* header */}
            <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1.5fr,1.5fr,auto] bg-gray-100 px-4 py-2 font-medium">
                <div>Customer Group</div>
                <div>Quantity</div>
                <div>Priority</div>
                <div>Price</div>
                <div>Date Start</div>
                <div>Date End</div>
                <div />
            </div>

            {/* rows */}
            {rows.map((r) => (
                <div
                    key={r.id}
                    className="grid grid-cols-[2fr,1fr,1fr,1fr,1.5fr,1.5fr,auto] items-center border-t px-4 py-2"
                >
                    <div className="pr-2">
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
                    </div>

                    <div className="pr-2">
                        <input
                            type="number"
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            value={r.quantity}
                            onChange={(e) =>
                                updateRow(r.id, "quantity", Number(e.target.value))
                            }
                        />
                    </div>

                    <div className="pr-2">
                        <input
                            type="number"
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            value={r.priority}
                            onChange={(e) =>
                                updateRow(r.id, "priority", Number(e.target.value))
                            }
                        />
                    </div>

                    <div className="pr-2">
                        <input
                            type="number"
                            step="0.0001"
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            value={r.price}
                            onChange={(e) =>
                                updateRow(r.id, "price", Number(e.target.value))
                            }
                        />
                    </div>

                    <div className="pr-2">
                        <input
                            type="date"
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            value={r.dateStart}
                            onChange={(e) =>
                                updateRow(r.id, "dateStart", e.target.value)
                            }
                        />
                    </div>

                    <div className="pr-2">
                        <input
                            type="date"
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            value={r.dateEnd}
                            onChange={(e) => updateRow(r.id, "dateEnd", e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end gap-1">
                        <button
                            className="h-8 w-8 rounded bg-red-500 text-lg text-white"
                            type="button"
                            onClick={() => removeRow(r.id)}
                        >
                            ×
                        </button>
                    </div>
                </div>
            ))}

            {/* add row button */}
            <div className="border-t px-4 py-3">
                <button
                    type="button"
                    onClick={addRow}
                    className="h-8 w-8 rounded bg-blue-500 text-lg text-white"
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ProductDiscountTab;
