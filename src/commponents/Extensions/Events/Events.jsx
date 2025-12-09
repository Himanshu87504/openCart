import React, { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Breadcrumb from "../../Breadcrumb";

const EVENT_DATA = [
    {
        code: "activity_address_add",
        description: "Description for address add",
        trigger: "catalog/model/account/address/addAddress/after",
        action: "event/activity.addAddress",
    },
    {
        code: "activity_address_delete",
        description: "Description for address delete",
        trigger: "catalog/model/account/address/deleteAddress/after",
        action: "event/activity.deleteAddress",
    },
    {
        code: "activity_address_edit",
        description: "Description for address edit",
        trigger: "catalog/model/account/address/editAddress/after",
        action: "event/activity.editAddress",
    },
];

export default function EventList() {
    const [events, setEvents] = useState(EVENT_DATA);
    const [selectedInfo, setSelectedInfo] = useState(null); // for modal
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(events.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = events.slice(startIndex, startIndex + itemsPerPage);

    const deleteEvent = (code) => {
        const updated = events.filter((e) => e.code !== code);
        setEvents(updated);
    };

    return (
        <div className="bg-[#F6F6F6] min-h-screen p-6">
            <Breadcrumb
                title="Event"
                paths={[
                    { name: "Home" },
                    { name: "Event", color: "text-blue-400" },
                ]}
            />
            <div className="bg-white border border-gray-300 rounded">

                <div className="px-4 py-3 flex items-center gap-2 text-gray-700 font-semibold text-lg bg-[#F8F8F8] border-b border-gray-300">
                    <span className="text-xl">☰</span> Event List
                </div>

                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className=" border border-gray-300">
                            <th className="px-3 py-3 text-blue-600 font-semibold text-left border border-gray-200">
                                Event Code ↑
                            </th>
                            <th className="px-3 py-3 text-blue-600 font-semibold text-center border border-gray-200">
                                Sort Order
                            </th>
                            <th className="px-3 py-3 text-blue-600 font-semibold text-center border border-gray-100">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentData.map((event, index) => (
                            <tr key={index} className="border border-gray-300">
                                <td className="px-3 py-3 text-gray-700 border border-gray-200">
                                    {event.code}
                                </td>
                                <td className="px-3 py-3 text-center border border-gray-200">
                                    1
                                </td>
                                <td className="px-3 py-3 flex items-center justify-center gap-2 border border-gray-100">
                                    <button
                                        className="p-2 rounded bg-sky-500 text-white hover:bg-sky-600"
                                        onClick={() => setSelectedInfo(event)}
                                    >
                                        <FiInfo size={18} />
                                    </button>
                                    <button
                                        className="p-2 rounded bg-red-500 text-white hover:bg-red-600"
                                        onClick={() => deleteEvent(event.code)}
                                    >
                                        <RiDeleteBin5Line size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between p-4 text-gray-600 text-sm border-t border-gray-300">
                    <div>
                        Showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + itemsPerPage, events.length)} of{" "}
                        {events.length} ({totalPages} Pages)
                    </div>
                </div>
            </div>

            {selectedInfo && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
                    <div className="bg-white w-[450px] border border-gray-300 shadow-lg p-4 relative rounded bottom-20">
                        <button
                            className="absolute top-4 right-4 text-gray-700 text-2xl"
                            onClick={() => setSelectedInfo(null)}
                        >
                            <IoClose />
                        </button>

                        <h2 className="text-xl font-semibold text-gray-800 mb-4">
                            Event Information
                        </h2>

                        <label className="font-semibold text-gray-700">
                            Description
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded p-3 bg-gray-100 my-2"
                            rows="2"
                            value={selectedInfo.description}
                            readOnly
                        />

                        <label className="font-semibold text-gray-700">
                            Trigger
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded p-3 bg-gray-100 my-2"
                            rows="2"
                            value={selectedInfo.trigger}
                            readOnly
                        />

                        <label className="font-semibold text-gray-700">
                            Action
                        </label>
                        <textarea
                            className="w-full border border-gray-300 rounded p-3 bg-gray-100 my-2"
                            rows="2"
                            value={selectedInfo.action}
                            readOnly
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
