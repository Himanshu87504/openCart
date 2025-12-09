import React from "react";

export default function IpAddressTable() {
    return (
        <div className="p-2 pl-6">
            <div className="w-full bg-white  border border-gray-300 p-6">

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-4">IP Address</h2>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 border border-gray-300 text-left font-semibold">IP</th>
                                <th className="p-3 border border-gray-300 text-left font-semibold">Accounts</th>
                                <th className="p-3 border border-gray-300 text-left font-semibold">Store</th>
                                <th className="p-3 border border-gray-300 text-left font-semibold">Country</th>
                                <th className="p-3 border border-gray-300 text-left font-semibold">Date Added</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr className="border border-gray-300 hover:bg-gray-50 transition">
                                <td className="p-3 border border-gray-300 text-blue-600 hover:underline cursor-pointer">
                                    39.49.144.72
                                </td>

                                <td className="p-3 border border-gray-300 text-blue-600 hover:underline cursor-pointer">
                                    3
                                </td>

                                <td className="p-3 border border-gray-300">Your Store</td>
                                <td className="p-3 border border-gray-300">—</td>

                                <td className="p-3 border border-gray-300">04/08/2025 16:11:34</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Pagination Footer */}
                <div className="mt-3 text-right text-sm text-gray-600">
                    Showing 1 to 1 of 1 (1 Pages)
                </div>
            </div>
        </div>
    );
}
