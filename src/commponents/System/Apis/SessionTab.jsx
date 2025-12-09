import React from "react";

export default function SessionTab() {
    return (
        <div className="border border-gray-300 bg-white">

            {/* TABLE */}
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold">
                            Token
                        </th>
                        <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold">
                            IP
                        </th>
                        <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold">
                            Date Added
                        </th>
                        <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold">
                            Date Modified
                        </th>
                        <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-semibold w-24">
                            Action
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td
                            colSpan={5}
                            className="border border-gray-300 px-3 py-4 text-center text-gray-600"
                        >
                            No results!
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
