import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

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
                            <th className="p-3 text-left text-blue-600 font-semibold border-r">Cron Code ↑</th>
                            <th className="p-3 text-left text-blue-600 font-semibold border-r">Cycle</th>
                            <th className="p-3 text-left text-blue-600 font-semibold border-r">Action</th>
                            <th className="p-3 text-left text-blue-600 font-semibold border-r">Date Added</th>
                            <th className="p-3 text-left text-blue-600 font-semibold border-r">Date Modified</th>
                            <th className="p-3 text-blue-600 font-semibold text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {CRON_DATA.map((item, i) => (
                            <tr key={i} className="border-b">
                                <td className="p-3"><input type="checkbox" /></td>
                                <td className="p-3 border-r">{item.code}</td>
                                <td className="p-3 border-r">{item.cycle}</td>
                                <td className="p-3 border-r">{item.action}</td>
                                <td className="p-3 border-r">{item.added}</td>
                                <td className="p-3 border-r">{item.modified}</td>

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
                        ))}
                    </tbody>
                </table>

                {/* Footer */}
                <div className="p-4 text-right text-gray-600 text-sm">
                    Showing 1 to 3 of 3 (1 Pages)
                </div>
            </div>

            {/* MODAL */}
            {modalData && (
                <div
                    className="fixed inset-0 bg-black/40 flex items-center justify-center"
                    onClick={() => setModalData(null)}
                >
                    <div
                        className="bg-white w-2/3 max-w-lg rounded shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b p-4">
                            <h3 className="text-xl font-semibold">CRON Information</h3>
                            <button onClick={() => setModalData(null)}>
                                <AiOutlineClose size={22} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-4">
                            <label className="font-medium">Description</label>
                            <textarea
                                className="w-full border p-3 rounded bg-gray-100 mt-2"
                                rows="6"
                                value={modalData.description}
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
