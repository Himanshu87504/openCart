// EditOption.jsx
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import Breadcrumb from "../../Breadcrumb";

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
            <Breadcrumb
                title="Option"
                paths={[
                    { name: "Home" },
                    { name: "Option", color: "text-blue-400" },
                ]}
            />
            <div className="mx-auto w-[96%] max-w-6xl bg-white border border-[#e5e5e5]">
                {/* Header */}
                <div className="flex items-center px-6 py-3 border-b border-[#e5e5e5] bg-[#f8f8f8]">
                    <span className="mr-2 text-lg"><FaEdit /></span>
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
                {/* --------------------------------------------------------------------------------------------------------- */}
                <div className="px-6 pb-6">
                    <table className="w-full border border-[#e5e5e5] text-sm border-collapse">
                        <thead className="bg-[#f8f8f8] border-b border-[#e5e5e5]">
                            <tr>
                                <th className="px-4 py-2 text-left align-middle">
                                    <span className="text-red-500 mr-1">*</span>
                                    Option Value Name
                                </th>
                                <th className="px-4 py-2 text-center align-middle">Image</th>
                                <th className="px-4 py-2 text-left align-middle">Sort Order</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>

                        <tbody>
                            {visibleRows.map((item) => (
                                <tr key={item.id} className="border-b border-[#f0f0f0]">
                                    {/* Option Value Name */}
                                    <td className="px-4 py-4 align-middle">
                                        <div className="flex flex-col sm:flex-row items-center w-full md:max-w-xs">

                                            <div className="w-10 h-9 border border-[#ddd] bg-[#f8f8f8] flex items-center justify-center text-[12px] text-gray-500">
                                                Img
                                            </div>
                                            <input
                                                type="text"
                                                value={item.name}
                                                onChange={(e) => handleNameChange(item.id, e.target.value)}
                                                className="w-full border border-[#ccc] px-3 py-2 text-sm rounded-none focus:outline-none focus:border-[#66afe9]"
                                            />
                                        </div>
                                    </td>

                                    {/* Image preview + buttons */}
                                    <td className="px-4 py-4 align-middle">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="border border-[#ddd] bg-white w-40 h-48 flex items-center justify-center mb-2">
                                                <img
                                                    src="/images/opencart-logo.png"
                                                    alt={item.name}
                                                    className="max-h-full max-w-full object-contain"
                                                />
                                            </div>
                                            <div className="flex gap-1">
                                                <button className="px-3 py-1 text-xs bg-[#1E91CF] text-white rounded">
                                                    Edit
                                                </button>
                                                <button className="px-3 py-1 text-xs bg-[#F0AD4E] text-white rounded">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Sort Order input */}
                                    <td className="px-4 py-4 align-middle">
                                        <div className="w-20">
                                            <input
                                                type="number"
                                                value={item.sortOrder}
                                                onChange={(e) => handleSortChange(item.id, e.target.value)}
                                                className="w-full border border-[#ccc] px-3 py-2 text-sm rounded-none focus:outline-none focus:border-[#66afe9]"
                                            />
                                        </div>
                                    </td>

                                    {/* Delete button (red square with white minus) */}
                                    <td className="px-4 py-4 align-middle text-center ">
                                        <div className="w-8 h-8 bg-[#d9534f] flex items-center pl-2">
                                            <button
                                                onClick={() => handleDec(item.id)}
                                                className="w-4 h-4 flex items-center justify-center rounded-full bg-white text-red-300 text-lg leading-none"
                                            >
                                                &minus;
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mt-3 flex justify-end">
                        <div className="w-8 h-8 bg-[#1A7BB0]">
                            <button
                                onClick={handleInc}
                                className="flex items-center ml-2 mt-2 w-4 pl-1 bg-white text-[#1A7BB0] text-sm rounded-full"
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
