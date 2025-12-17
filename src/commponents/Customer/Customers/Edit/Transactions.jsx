import React from "react";

export default function Transactions() {
    return (
        <div className="pl-5">
            <div className="w-full bg-white p-4 border-t-0 border border-gray-300">

                {/* Title */}
                <h2 className="text-xl font-bold mb-3">Transactions</h2>

                {/* Table */}
                <div className="overflow-x-auto mb-4 border border-gray-300">
                    <table className="min-w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-gray-100 border-b border-gray-300">
                                <th className="p-2 border-r border-gray-300 text-left font-semibold">Date Added</th>
                                <th className="p-2 border-r border-gray-300 text-left font-semibold">Description</th>
                                <th className="p-2 text-left font-semibold">Amount</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td
                                    className="p-4 text-center text-gray-500 border-t border-gray-300"
                                    colSpan={3}
                                >
                                    No results!
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="text-gray-600 text-sm mb-6">
                    Showing 0 to 0 of 0 (0 Pages)
                </div>

                {/* Add Transaction Title */}
                <h2 className="text-xl font-bold mb-3">Add Transaction</h2>

                {/* Form */}
                <div className="w-full border-t border-gray-300 pt-4">

                    {/* Description */}
                    <div className="flex items-center mb-4">
                        <label className="w-48 font-medium">Description</label>
                        <input
                            type="text"
                            placeholder="Description"
                            className="flex-1 border border-gray-300 px-3 py-2"
                        />
                    </div>

                    {/* Amount */}
                    <div className="flex items-center mb-4">
                        <label className="w-48 font-medium">Amount</label>
                        <input
                            type="number"
                            placeholder="Amount"
                            className="flex-1 border border-gray-300 px-3 py-2"
                        />
                    </div>

                    {/* Button */}
                    <div className="text-right">
                        <button className="bg-blue-600 border border-blue-700 text-white px-4 py-2 text-sm">
                            + Add Transaction
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
