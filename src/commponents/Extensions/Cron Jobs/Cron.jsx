import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

/* -------------------------
   JSON DATA (Use anywhere)
--------------------------*/
const CRON_DATA = [
    {
        code: "currency",
        cycle: "Day",
        action: "cron/currency",
        added: "25/09/2014 14:40:00",
        modified: "29/10/2025 21:13:10",
        description: "Updates currency rates automatically."
    },
    {
        code: "gdpr",
        cycle: "Day",
        action: "cron/gdpr",
        added: "25/09/2014 14:40:00",
        modified: "29/10/2025 21:13:10",
        description: "GDPR cleanup and customer privacy tasks."
    },
    {
        code: "subscription",
        cycle: "Day",
        action: "cron/subscription",
        added: "25/09/2014 14:40:00",
        modified: "25/09/2014 14:40:00",
        description: "Subscription renewals and reminders."
    }
];

export default function Cron() {
    const [modalData, setModalData] = useState(null);

    return (
        <div className="bg-gray-100 min-h-screen p-6">

            {/* CRON INSTRUCTIONS */}
            <div className="bg-white p-5 border rounded shadow mb-6">
                <h2 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    ❔ CRON Instructions
                </h2>
                <p className="text-gray-600 mb-2">
                    Cron Job's are scheduled tasks that run periodically.
                </p>
                <p className="text-gray-600 mb-4">
                    You need to set your Cron task to run every hour.
                </p>

                <div className="flex">
                    <input
                        className="border p-2 w-full rounded-l"
                        value='wget "https://demo.opencart.com/index.php?route=cron/cron" --read-timeout=5400'
                        readOnly
                    />
                    <button className="border px-3 rounded-r bg-gray-100">
                        📋
                    </button>
                </div>
            </div>

            {/* CRON LIST */}
            <div className="bg-white rounded border shadow">
                <div className="px-4 py-3 border-b flex items-center gap-2 font-semibold">
                    ☰ Cron List
                </div>





                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="p-3"><input type="checkbox" /></th>

                            {["Cron Code", "Cycle", "Action", "Date Added", "Date Modified"].map((head, i) => (
                                <th
                                    key={i}
                                    className="p-3 text-left text-blue-600 font-semibold border-r"
                                >
                                    {head}
                                </th>
                            ))}

                            <th className="p-3 text-blue-600 font-semibold text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {CRON_DATA.length > 0 ? (
                            CRON_DATA.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className="p-3"><input type="checkbox" /></td>

                                    {/* Auto print JSON values */}
                                    {["code", "cycle", "action", "added", "modified"].map((key) => (
                                        <td key={key} className="p-3 border-r">
                                            {item[key]}
                                        </td>
                                    ))}


                                    <td className="p-3 flex justify-center gap-2">
                                        <button
                                            className="p-2 bg-sky-500 text-white rounded hover:bg-sky-600"
                                            onClick={() => setModalData(item)}
                                        >
                                            <FiInfo size={18} />
                                        </button>

                                        <button className="p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                                            <FaPlay size={18} />
                                        </button>

                                        <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600">
                                            <RiDeleteBin5Line size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="p-4 text-center text-gray-500">
                                    No records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>


                <div className="p-4 text-right text-gray-600 text-sm">
                    Showing 1 to {CRON_DATA.length} of {CRON_DATA.length} (1 Pages)
                </div>
            </div>

        </div>
    );
}
