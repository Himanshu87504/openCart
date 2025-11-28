// ProductAttributesTab.jsx
import React, { useState } from "react";

const ProductAttributesTab = () => {
    const [rows, setRows] = useState([
        { id: 1, attribute: "Clockspeed", text: "100mhz" },
    ]);

    const addRow = () => {
        setRows((prev) => [
            ...prev,
            { id: Date.now(), attribute: "", text: "" },
        ]);
    };

    const updateRow = (id, field, value) => {
        setRows((prev) =>
            prev.map((r) => (r.id === id ? { ...r, [field]: value } : r))
        );
    };

    const removeRow = (id) => {
        setRows((prev) => prev.filter((r) => r.id !== id));
    };

    return (
        <div className="border border-gray-200 bg-white text-sm">
            {/* header */}
            <div className="grid grid-cols-[1fr,3fr,auto] border-b bg-gray-100 px-4 py-2 font-medium">
                <div>Attribute</div>
                <div>Text</div>
                <div />
            </div>

            {/* rows */}
            {rows.map((row) => (
                <div
                    key={row.id}
                    className="grid grid-cols-[1fr,3fr,auto] items-start border-b px-4 py-3"
                >
                    {/* Attribute input */}
                    <div className="pr-2">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Attribute"
                            value={row.attribute}
                            onChange={(e) =>
                                updateRow(row.id, "attribute", e.target.value)
                            }
                        />
                        <p className="mt-1 text-xs text-gray-500">(Autocomplete)</p>
                    </div>

                    {/* Text textarea */}
                    <div className="pr-2">
                        <textarea
                            className="h-24 w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Text"
                            value={row.text}
                            onChange={(e) => updateRow(row.id, "text", e.target.value)}
                        />
                    </div>

                    {/* delete button */}
                    <div className="flex items-start justify-end">
                        <button
                            type="button"
                            onClick={() => removeRow(row.id)}
                            className="mt-1 h-8 w-8 rounded bg-red-500 text-lg font-bold text-white"
                        >
                            ×
                        </button>
                    </div>
                </div>
            ))}

            {/* add button row */}
            <div className="px-4 py-3">
                <button
                    type="button"
                    onClick={addRow}
                    className="rounded bg-blue-500 px-3 py-1 text-sm text-white"
                >
                    Add Attribute
                </button>
            </div>
        </div>
    );
};

export default ProductAttributesTab;
