import { useState } from "react";
import { FiFilter, FiEdit, FiPlus } from "react-icons/fi";
import { EXTENSION_DATA } from "./extensionData";

export default function Extension() {

    const EXTENSION_TYPES = Object.keys(EXTENSION_DATA).map(key => {
        const count = EXTENSION_DATA[key].length;
        return `${key} (${count})`;
    });

    const [selectedType, setSelectedType] = useState(EXTENSION_TYPES[1]); // Default Captchas (1)

    const selectedCategory = selectedType.split(" (")[0];
    const tableData = EXTENSION_DATA[selectedCategory];

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-xl font-semibold mb-4">Extension List</h2>

            {/* Filter Section */}
            <div className="bg-white p-5 shadow rounded border mb-6">
                <h3 className="text-xl font-semibold">Choose the extension type</h3>

                <div className="flex items-center gap-3 mt-4">
                    <select
                        className="w-full border px-3 py-2 rounded focus:ring focus:outline-none"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                    >
                        {EXTENSION_TYPES.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>

                    <button className="flex items-center gap-1 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
                        <FiFilter /> Filter
                    </button>
                </div>
            </div>

            {/* Table Section */}
            <div className="bg-white p-5 shadow rounded border">
                <h3 className="text-xl font-semibold mb-4">{selectedCategory}</h3>

                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b bg-gray-50">
                            <th className="text-left px-3 py-2 border-r">Name</th>
                            <th className="text-left px-3 py-2 border-r">Status</th>
                            <th className="text-left px-3 py-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {tableData.length > 0 ? (
                            tableData.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-3 py-3 border-r">{item.name}</td>
                                    <td className="px-3 py-3 border-r">{item.status}</td>
                                    <td className="px-3 py-3 flex gap-2">
                                        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                            <FiEdit />
                                        </button>
                                        <button className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
                                            <FiPlus />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="text-center py-4 text-gray-500">
                                    No results!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
