import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { IoAdd } from "react-icons/io5";

export default function IpAddress() {
    const [rows, setRows] = useState([{ id: Date.now(), ip: "" }]);

    const addRow = () => {
        setRows([...rows, { id: Date.now(), ip: "" }]);
    };

    return (
        <div className="bg-white p-4">

            {/* INFO BOX */}
            <div className="bg-[#e7f5fb] text-[#31708f] border border-[#bcdff1] p-3 rounded mb-4 flex items-start gap-2">
                <FiInfo className="mt-0.5" />
                <p className="text-sm">
                    Below you can create a list of IP's allowed to access the API.
                    Your current IP is
                    <span className="font-medium"> 2402:8100:26d9:997e:2d5e:d39:4ced:1604</span>
                </p>
            </div>

            {/* TABLE */}
            <div className="border border-gray-300">
                <table className="w-full border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 bg-gray-100 px-3 py-2 text-left font-medium">
                                IP
                            </th>
                            <th className="border border-gray-300 w-16"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="border border-gray-300 px-3 py-2">
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded px-2 py-1"
                                    placeholder=""
                                />
                            </td>

                            {/* ADD BUTTON */}
                            <td className="border border-gray-300 px-3 py-2 text-center">
                                <button
                                    onClick={addRow}
                                    className="bg-[#1e91cf] hover:bg-[#0f6cad] text-white px-3 py-1 rounded"
                                >
                                    <IoAdd size={18} />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
