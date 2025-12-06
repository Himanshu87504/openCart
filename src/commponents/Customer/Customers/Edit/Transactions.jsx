import React from "react";

export default function Transactions() {
    return (
        <div className="w-full bg-white p-6 border rounded shadow">

            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4">Transactions</h2>

            {/* Table */}
            <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border">
                            <th className="p-3 border text-left font-semibold">Date Added</th>
                            <th className="p-3 border text-left font-semibold">Description</th>
                            <th className="p-3 border text-left font-semibold">Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="p-3 border text-center text-gray-500" colSpan={3}>
                                No results!
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Footer */}
                <div className="mt-3 text-right text-sm text-gray-600">
                    Showing 0 to 0 of 0 (0 Pages)
                </div>
            </div>

            {/* Add Transaction Title */}
            <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>

            {/* Form */}
            <div className="w-full border-t pt-4">

                {/* Description */}
                <div className="flex items-center mb-6">
                    <label className="w-48 font-medium">Description</label>
                    <input
                        type="text"
                        placeholder="Description"
                        className="flex-1 border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                {/* Amount */}
                <div className="flex items-center mb-6">
                    <label className="w-48 font-medium">Amount</label>
                    <input
                        type="number"
                        placeholder="Amount"
                        className="flex-1 border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                {/* Button */}
                <div className="text-right">
                    <button className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded flex items-center gap-2">
                        <span className="text-lg font-bold">+</span>
                        Add Transaction
                    </button>
                </div>
            </div>
        </div>
    );
}
