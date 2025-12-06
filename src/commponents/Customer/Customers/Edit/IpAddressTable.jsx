import React from "react";

export default function IpAddressTable() {
    return (
        <div className="w-full bg-white shadow border rounded p-6">
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4">IP Address</h2>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 border">
                            <th className="text-left font-semibold p-3 border">IP</th>
                            <th className="text-left font-semibold p-3 border">Accounts</th>
                            <th className="text-left font-semibold p-3 border">Store</th>
                            <th className="text-left font-semibold p-3 border">Country</th>
                            <th className="text-left font-semibold p-3 border">Date Added</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border hover:bg-gray-50">
                            <td className="p-3 border text-blue-600 cursor-pointer">
                                39.49.144.72
                            </td>
                            <td className="p-3 border text-blue-600 cursor-pointer">
                                3
                            </td>
                            <td className="p-3 border">Your Store</td>
                            <td className="p-3 border">—</td>
                            <td className="p-3 border">04/08/2025 16:11:34</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Footer */}
            <div className="mt-3 text-right text-sm text-gray-600">
                Showing 1 to 1 of 1 (1 Pages)
            </div>
        </div>
    );
}
