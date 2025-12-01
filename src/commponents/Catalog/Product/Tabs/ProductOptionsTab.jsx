// ProductOptionsTab.jsx
import React, { useState } from "react";

const OptionHeader = ({ title }) => (
    <div className="border border-gray-300 border-b-0 bg-[#F8F8F8] px-4 py-2">
        <h2 className="text-sm font-semibold">{title}</h2>
    </div>
);

const allOptions = [
    { id: 1, label: "File", type: "file" },
    { id: 2, label: "Date", type: "date" },
    { id: 3, label: "Time", type: "time" },
    { id: 4, label: "Date & Time", type: "datetime-local" }
];

const initialOptions = [allOptions[0], allOptions[1], allOptions[2]];

const RequiredRow = () => (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 border border-t-0 border-gray-300 bg-white px-4 py-3 text-sm">
        <div className="sm:w-40 w-full sm:text-right font-medium">Required</div>
        <div className="w-full sm:w-auto">
            <select className="w-full sm:w-40 rounded border border-gray-300 px-3 py-2 text-sm">
                <option>Enabled</option>
                <option>Disabled</option>
            </select>
        </div>
    </div>
);

const OptionValueTable = ({ rows }) => (
    <div className="border border-t-0 border-gray-300 bg-white text-sm overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-3 py-2 text-left border border-gray-300">Option Value</th>
                    <th className="px-3 py-2 text-left border border-gray-300">Quantity</th>
                    <th className="px-3 py-2 text-left border border-gray-300">Subtract Stock</th>
                    <th className="px-3 py-2 text-left border border-gray-300">Price</th>
                    <th className="px-3 py-2 text-left border border-gray-300">Points</th>
                    <th className="px-3 py-2 text-left border border-gray-300">Weight</th>
                    <th className="px-3 py-2 text-left border border-gray-300" />
                </tr>
            </thead>

            <tbody>
                {rows.map((r) => (
                    <tr key={r.id}>
                        <td className="px-3 py-2 border border-gray-300">{r.label}</td>
                        <td className="px-3 py-2 border border-gray-300">{r.quantity}</td>
                        <td className="px-3 py-2 border border-gray-300">{r.subtract}</td>
                        <td className="px-3 py-2 border border-gray-300">{r.price}</td>
                        <td className="px-3 py-2 border border-gray-300">{r.points}</td>
                        <td className="px-3 py-2 border border-gray-300">{r.weight}</td>
                        <td className="px-3 py-2 border border-gray-300">
                            <div className="flex justify-end gap-1">
                                <button className="h-8 w-8 rounded bg-blue-500 text-xs text-white">
                                    ✎
                                </button>
                                <button className="h-8 w-8 rounded bg-red-500 text-xs text-white">
                                    ×
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}

                <tr>
                    <td className="px-3 py-2 border border-gray-300 text-right" colSpan={7}>
                        <button
                            type="button"
                            className="rounded bg-blue-500 px-3 py-1 text-xs text-white"
                        >
                            + Add Option Value
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);

const ProductOptionsTab = () => {
    const radioRows = [
        { id: 1, label: "Small", quantity: 0, subtract: "Yes", price: "+10.0000", points: "+1", weight: "+10" },
        { id: 2, label: "Medium", quantity: 0, subtract: "Yes", price: "+20.0000", points: "+2", weight: "+20" },
        { id: 3, label: "Large", quantity: -1, subtract: "Yes", price: "+30.0000", points: "+3", weight: "+30" }
    ];

    const checkboxRows = [
        { id: 1, label: "Checkbox 1", quantity: 0, subtract: "Yes", price: "+10.0000", points: "+0", weight: "+10" },
        { id: 2, label: "Checkbox 2", quantity: 0, subtract: "Yes", price: "+20.0000", points: "+0", weight: "+20" },
        { id: 3, label: "Checkbox 3", quantity: 2394, subtract: "Yes", price: "+30.0000", points: "+0", weight: "+30" },
        { id: 4, label: "Checkbox 4", quantity: 3914, subtract: "Yes", price: "+40.0000", points: "+0", weight: "+40" }
    ];

    const [rows, setRows] = useState(initialOptions);
    const [selectedId, setSelectedId] = useState("");

    const handleChangeValue = (id, value) => {
        setRows(prev =>
            prev.map(r => (r.id === id ? { ...r, value } : r))
        );
    };

    const handleRemoveRow = (id) => {
        setRows(prev => prev.filter(r => r.id !== id));
    };

    const handleAddRow = () => {
        if (!selectedId) return;
        const opt = allOptions.find(o => String(o.id) === selectedId);
        if (!opt) return;
        const newRow = { ...opt, key: Date.now(), value: "" };
        setRows(prev => [...prev, newRow]);
        setSelectedId("");
    };

    return (
        <div className="bg-[#F6F6F6] space-y-6">
            {/* RADIO */}
            <div className="bg-white">
                <OptionHeader title="Radio" />
                <RequiredRow />
                <OptionValueTable rows={radioRows} />
            </div>

            {/* CHECKBOX */}
            <div className="bg-white">
                <OptionHeader title="Checkbox" />
                <RequiredRow />
                <OptionValueTable rows={checkboxRows} />
            </div>

            <div className="space-y-4 p-4">
                {rows.map((row) => (
                    <div key={row.key || row.id} className="border border-gray-300 bg-white mb-6">

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 border-b border-gray-300 gap-3">
                            <h3 className="text-xl font-semibold">{row.label}</h3>
                            <button
                                onClick={() => handleRemoveRow(row.id)}
                                className="h-8 w-8 rounded bg-red-500 text-white text-lg leading-none flex items-center justify-center"
                            >
                                ×
                            </button>
                        </div>

                        <div className="px-4 py-3">
                            <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] items-center gap-4">
                                <div className="sm:text-right font-semibold text-sm">Required</div>
                                <select className="w-full rounded border border-gray-300 px-3 py-2 text-sm">
                                    <option>Enabled</option>
                                    <option>Disabled</option>
                                </select>
                            </div>
                        </div>

                        <div className="px-4 pb-4">
                            <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] items-center gap-4">
                                <div className="sm:text-right font-semibold text-sm">Option Value</div>
                                <div className="flex w-full">
                                    <input
                                        type={row.type === "file" ? "text" : row.type}
                                        value={row.value || ""}
                                        onChange={(e) => handleChangeValue(row.id, e.target.value)}
                                        className="flex-1 rounded-l border border-r-0 border-gray-300 px-3 py-2 text-sm"
                                        placeholder={row.type === "file" ? "Upload file path / name" : ""}
                                    />
                                    <button
                                        type="button"
                                        className="w-10 rounded-r border border-l-0 border-gray-300 flex items-center justify-center bg-white"
                                    >
                                        📅
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="border-t pt-4 mt-4">
                    <h4 className="text-md font-semibold mb-2">Add Option</h4>
                    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                        <select
                            className="border rounded px-3 py-2 text-sm w-full sm:w-auto"
                            value={selectedId}
                            onChange={(e) => setSelectedId(e.target.value)}
                        >
                            <option value="">Select option</option>
                            {allOptions.map((o) => (
                                <option key={o.id} value={o.id}>
                                    {o.label}
                                </option>
                            ))}
                        </select>
                        <button
                            onClick={handleAddRow}
                            className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 w-full sm:w-auto"
                        >
                            Add Row
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductOptionsTab;
