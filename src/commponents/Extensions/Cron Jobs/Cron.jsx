import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import Breadcrumb from "../../Breadcrumb";

/* -------------------------
   JSON DATA
--------------------------*/
const CRON_DATA = [
    {
        code: "currency",
        cycle: "Day",
        action: "cron/currency",
        added: "25/09/2014 14:40:00",
        modified: "29/10/2025 21:13:10",
        description: "Updates currency rates automatically.",
    },
    {
        code: "gdpr",
        cycle: "Day",
        action: "cron/gdpr",
        added: "25/09/2014 14:40:00",
        modified: "29/10/2025 21:13:10",
        description: "GDPR cleanup and customer privacy tasks.",
    },
    {
        code: "subscription",
        cycle: "Day",
        action: "cron/subscription",
        added: "25/09/2014 14:40:00",
        modified: "25/09/2014 14:40:00",
        description: "Subscription renewals and reminders.",
    },
];

export default function Cron() {
    const [modalData, setModalData] = useState(null);

    return (
        <div className="bg-[#F3F4F6] min-h-screen p-4 sm:p-6">

            {/* Breadcrumb */}
            <Breadcrumb
                title="Cron Jobs"
                paths={[
                    { name: "Home" },
                    { name: "Cron Jobs", color: "text-blue-400" },
                ]}
            />

            {/* CRON Instructions */}
            <div className="bg-white border border-gray-300 shadow mb-4 rounded">
                <div className="border-b border-gray-300 pt-2 bg-[#F3F4F6]">
                    <h2 className="font-semibold text-md mb-2 flex items-center gap-2">
                        ❔ CRON Instructions
                    </h2>
                </div>
                <div className="p-4 text-sm sm:text-base">
                    <p className="text-gray-600 mb-2">
                        Cron Job's are scheduled tasks that run periodically.
                    </p>
                    <p className="text-gray-600 mb-4">
                        You need to set your Cron task to run every hour.
                    </p>

                    {/* Copy URL */}
                    <div className="flex flex-col sm:flex-row mb-5 items-stretch border border-gray-300 rounded-md overflow-hidden">
                        <div className="px-4 py-2 bg-[#F8F9FA] text-gray-700 font-medium border-b sm:border-b-0 sm:border-r border-gray-300">
                            Copy-Url
                        </div>

                        <input
                            className="flex-1 p-2 border-none focus:ring-0 focus:outline-none"
                            value='wget "https://demo.opencart.com/index.php?route=cron/cron" --read-timeout=5400'
                            readOnly
                        />

                        <button
                            className="px-4 py-2 bg-[#F8F9FA] hover:bg-gray-200 text-gray-700 border-t sm:border-t-0 sm:border-l border-gray-300"
                            onClick={() =>
                                navigator.clipboard.writeText(
                                    'wget "https://demo.opencart.com/index.php?route=cron/cron" --read-timeout=5400'
                                )
                            }
                            title="Copy to clipboard"
                        >
                            📋
                        </button>
                    </div>
                </div>
            </div>

            {/* CRON List */}
            <div className="bg-white border border-gray-300 shadow rounded overflow-x-auto">
                <div className="px-4 py-3 border-b border-gray-300 flex items-center gap-2 font-semibold">
                    ☰ Cron List
                </div>

                <table className="w-full min-w-[600px] border-collapse border border-gray-300 text-sm sm:text-base">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="p-2 sm:p-3 border border-gray-300">
                                <input type="checkbox" />
                            </th>
                            {["Cron Code", "Cycle", "Action", "Date Added", "Date Modified"].map((head, i) => (
                                <th
                                    key={i}
                                    className="p-2 sm:p-3 text-left text-blue-600 font-semibold border border-gray-300"
                                >
                                    {head}
                                </th>
                            ))}
                            <th className="p-2 sm:p-3 text-blue-600 font-semibold text-center border border-gray-300">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {CRON_DATA.length > 0 ? (
                            CRON_DATA.map((item, index) => (
                                <tr key={index} className="border border-gray-300">
                                    <td className="p-2 sm:p-3 border border-gray-300">
                                        <input type="checkbox" />
                                    </td>
                                    {["code", "cycle", "action", "added", "modified"].map((key) => (
                                        <td key={key} className="p-2 sm:p-3 border border-gray-300">
                                            {item[key]}
                                        </td>
                                    ))}
                                    <td className="p-2 sm:p-3 flex justify-center gap-1 sm:gap-2 border border-gray-300">
                                        <button
                                            className="p-1 sm:p-2 bg-sky-500 text-white rounded hover:bg-sky-600"
                                            onClick={() => setModalData(item)}
                                        >
                                            <FiInfo size={18} />
                                        </button>
                                        <button className="p-1 sm:p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                            <FaPlay size={18} />
                                        </button>
                                        <button className="p-1 sm:p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                            <RiDeleteBin5Line size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="p-4 text-center text-gray-500 border border-gray-300">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="p-4 text-right text-gray-600 text-sm sm:text-base border-t border-gray-300">
                    Showing 1 to {CRON_DATA.length} of {CRON_DATA.length} (1 Pages)
                </div>
            </div>
        </div>
    );
}
