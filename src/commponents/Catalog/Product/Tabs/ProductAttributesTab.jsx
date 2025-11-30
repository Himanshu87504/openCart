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
        <div className="border border-gray-300 bg-white text-sm rounded">
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-100 border-b border-gray-300">
                        <th className="w-1/3 px-4 py-2 text-left border-r border-gray-200">
                            Attribute
                        </th>
                        <th className="w-1/2 px-4 py-2 text-left border-r border-gray-200">
                            Text
                        </th>
                        <th className="w-16 px-4 py-2 text-left" />
                    </tr>
                </thead>

                <tbody>
                    {rows.map((row) => (
                        <tr
                            key={row.id}
                            className="border-b border-gray-200 last:border-b-0 align-top"
                        >
                            {/* Attribute cell */}
                            <td className="px-4 py-3 border-r border-gray-200">
                                <input
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    placeholder="Attribute"
                                    value={row.attribute}
                                    onChange={(e) =>
                                        updateRow(row.id, "attribute", e.target.value)
                                    }
                                />
                                <p className="mt-1 text-xs text-gray-500">(Autocomplete)</p>
                            </td>

                            {/* Text cell */}
                            <td className="px-4 py-3 border-r border-gray-200">
                                <textarea
                                    className="h-24 w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm"
                                    placeholder="Text"
                                    value={row.text}
                                    onChange={(e) => updateRow(row.id, "text", e.target.value)}
                                />
                            </td>

                            {/* Delete cell */}
                            <td className="px-4 py-3">
                                <button
                                    type="button"
                                    onClick={() => removeRow(row.id)}
                                    className="mt-1 h-8 w-8 rounded bg-red-500 text-lg font-bold text-white leading-none"
                                >
                                    ×
                                </button>
                            </td>
                        </tr>
                    ))}

                    {/* Add button row */}
                    <tr>
                        <td className="px-4 py-3" colSpan={3}>
                            <button
                                type="button"
                                onClick={addRow}
                                className="rounded bg-blue-500 px-3 py-1 text-sm text-white"
                            >
                                Add Attribute
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductAttributesTab;
