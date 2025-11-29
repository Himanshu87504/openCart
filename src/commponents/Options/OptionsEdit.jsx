// EditOption.jsx
import { useState } from "react";

const optionValues = [
    { id: 1, name: "Checkbox 1", sortOrder: 1 },
    { id: 2, name: "Checkbox 2", sortOrder: 2 },
    { id: 3, name: "Checkbox 3", sortOrder: 3 },
    { id: 4, name: "Checkbox 4", sortOrder: 4 },
];

const minimumValue = 3;

export default function EditOption() {
    const [visibleCount, setVisibleCount] = useState(minimumValue);

    const visibleRows = optionValues.slice(0, visibleCount);

    const handleInc = () => {
        if (visibleCount < optionValues.length) {
            setVisibleCount((c) => c + 1);
        }
    };

    const handleDec = () => {
        if (visibleCount > 1) {
            setVisibleCount((c) => c - 1);
        }
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] py-6">
            <div className="mx-auto w-[96%] max-w-6xl bg-white border border-[#e5e5e5]">
                {/* Header */}
                <div className="flex items-center px-6 py-3 border-b border-[#e5e5e5] bg-[#f8f8f8]">
                    <span className="mr-2 text-lg">✏️</span>
                    <span className="text-lg font-semibold text-[#444]">Edit Option</span>
                </div>

                {/* Top Form */}
                <div className="px-6 py-6 space-y-4">
                    <div className="flex gap-5 items-center">
                        <label className="text-sm font-semibold text-[#555] w-30">
                            <span className="text-red-500 mr-1">*</span>
                            Option Name
                        </label>
                        <div className="flex w-full">
                            <div className="flex items-center justify-center px-3 border border-r-0 border-[#d7d7d7] bg-[#f8f8f8] rounded-l-md text-xs">
                                🇬🇧
                            </div>
                            <input
                                type="text"
                                defaultValue="Checkbox"
                                className="flex-1 border border-[#d7d7d7] rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>

                    <div className="flex gap-5 items-center">
                        <label className="text-sm font-semibold text-[#555] w-30">
                            <span className="text-red-500 mr-1">*</span>
                            Type
                        </label>
                        <select className="w-full border border-[#d7d7d7] rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-0">
                            <option>Checkbox</option>
                            <option>Radio</option>
                        </select>
                    </div>

                    <div className="flex items-center">
                        <label className="text-sm font-semibold text-[#555] w-35">
                            Sort Order
                        </label>
                        <input
                            type="number"
                            defaultValue={2}
                            className="w-full border border-[#d7d7d7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>

                {/* Option Values title */}
                <div className="px-6 pb-2 text-base font-semibold text-[#444]">
                    Option Values
                </div>

                {/* Option Values table */}
                <div className="px-6 pb-6">
                    <table className="w-full border border-[#e5e5e5] text-sm border-collapse">
                        <thead className="bg-[#f8f8f8] border-b border-[#e5e5e5]">
                            <tr>
                                <th className="text-left px-4 py-2">
                                    <span className="text-red-500 mr-1">*</span>
                                    Option Value Name
                                </th>
                                <th className="text-left px-4 py-2">Image</th>
                                <th className="text-left px-4 py-2">Sort Order</th>

                            </tr>
                        </thead>

                        <tbody>
                            {visibleRows.map((item) => (
                                <tr key={item.id} className="border-b border-[#f0f0f0]">
                                    <td className="px-4 py-3">{item.name}</td>
                                    <td className="px-4 py-3">
                                        <img
                                            src="/images/opencart-logo.png"
                                            alt={item.name}
                                            className="h-16 object-contain"
                                        />
                                    </td>
                                    <td className="px-4 py-3">{item.sortOrder}</td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={handleDec}
                                            className="px-3 py-1 rounded bg-red-500 text-white text-xs"
                                        >
                                            -
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-3 flex justify-end">
                        <button
                            onClick={handleInc}
                            className="px-4 py-2 rounded bg-green-500 text-white text-sm"
                        >
                            + Add row
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
