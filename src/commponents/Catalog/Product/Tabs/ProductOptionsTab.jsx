// ProductOptionsTab.jsx
import React from "react";

const OptionHeader = ({ title }) => (
    <div className="border border-gray-300 border-b-0 bg-[#F8F8F8] px-4 py-2">
        <h2 className="text-sm font-semibold">{title}</h2>
    </div>
);

const RequiredRow = () => (
    <div className="flex items-center gap-6 border border-t-0 border-gray-300 bg-white px-4 py-3 text-sm">
        <div className="w-40 text-right font-medium">Required</div>
        <div>
            <select className="w-40 rounded border border-gray-300 px-3 py-2 text-sm">
                <option>Enabled</option>
                <option>Disabled</option>
            </select>
        </div>
    </div>
);

// common table + add button
const OptionValueTable = ({ rows }) => (
    <div className="border border-t-0 border-gray-300 bg-white text-sm">
        <table className="w-full border-collapse">
            <thead>
                <tr className="bg-gray-100">
                    <th className="px-3 py-2 text-left border border-gray-300 w-1/4">
                        Option Value
                    </th>
                    <th className="px-3 py-2 text-left border border-gray-300 w-16">
                        Quantity
                    </th>
                    <th className="px-3 py-2 text-left border border-gray-300 w-28">
                        Subtract Stock
                    </th>
                    <th className="px-3 py-2 text-left border border-gray-300 w-32">
                        Price
                    </th>
                    <th className="px-3 py-2 text-left border border-gray-300 w-24">
                        Points
                    </th>
                    <th className="px-3 py-2 text-left border border-gray-300 w-24">
                        Weight
                    </th>
                    <th className="px-3 py-2 text-left border border-gray-300 w-16"></th>
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

                {/* Add button row */}
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
        { id: 3, label: "Large", quantity: -1, subtract: "Yes", price: "+30.0000", points: "+3", weight: "+30" },
    ];

    const checkboxRows = [
        { id: 1, label: "Checkbox 1", quantity: 0, subtract: "Yes", price: "+10.0000", points: "+0", weight: "+10" },
        { id: 2, label: "Checkbox 2", quantity: 0, subtract: "Yes", price: "+20.0000", points: "+0", weight: "+20" },
        { id: 3, label: "Checkbox 3", quantity: 2394, subtract: "Yes", price: "+30.0000", points: "+0", weight: "+30" },
        { id: 4, label: "Checkbox 4", quantity: 3914, subtract: "Yes", price: "+40.0000", points: "+0", weight: "+40" },
    ];

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

            {/* TEXT option */}
            <div className="bg-white">
                <OptionHeader title="Text" />
                <RequiredRow />
                <div className="border border-t-0 border-gray-300 bg-white text-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-3 py-2 text-left border border-gray-300 w-40">
                                    Option Value
                                </th>
                                <th className="px-3 py-2 text-left border border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-2 border border-gray-300 align-top">
                                    Option Value
                                </td>
                                <td className="px-3 py-2 border border-gray-300">
                                    <input
                                        className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                        placeholder="test"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* TEXTAREA */}
            <div className="bg-white">
                <OptionHeader title="Textarea" />
                <RequiredRow />
                <div className="border border-t-0 border-gray-300 bg-white text-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="px-3 py-2 text-left border border-gray-300 w-40">
                                    Option Value
                                </th>
                                <th className="px-3 py-2 text-left border border-gray-300"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-3 py-2 border border-gray-300 align-top">
                                    Option Value
                                </td>
                                <td className="px-3 py-2 border border-gray-300">
                                    <textarea
                                        className="h-24 w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm"
                                        placeholder="Option Value"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductOptionsTab;
