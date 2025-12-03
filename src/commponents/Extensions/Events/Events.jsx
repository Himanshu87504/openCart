import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const EVENT_DATA = [
    "activity_address_add",
    "activity_address_delete",
    "activity_address_edit",
    "activity_affiliate_add",
    "activity_affiliate_edit",
    "activity_customer_add",
    "activity_customer_edit",
    "activity_customer_forgotten",
    "activity_customer_login",
    "activity_customer_password",
    "activity_address_add",
    "activity_address_delete",
    "activity_address_edit",
    "activity_affiliate_add",
    "activity_affiliate_edit",
    "activity_customer_add",
    "activity_customer_edit",
    "activity_customer_forgotten",
    "activity_customer_login",
    "activity_customer_password-",
];

export default function EventList() {
    const [selected, setSelected] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;
    const totalPages = Math.ceil(EVENT_DATA.length / itemsPerPage);

    // Slice data for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = EVENT_DATA.slice(startIndex, startIndex + itemsPerPage);

    // Select all logic for **current page only**
    const allSelected = selected.length === currentData.length && currentData.length > 0;

    const toggleSelect = (item) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    const toggleSelectAll = () => {
        if (allSelected) {
            // Unselect all from current page
            setSelected(selected.filter((x) => !currentData.includes(x)));
        } else {
            // Add all from current page
            const pageItems = currentData.filter((x) => !selected.includes(x));
            setSelected([...selected, ...pageItems]);
        }
    };

    const goToPage = (page) => {
        setCurrentPage(page);
        setSelected([]); // reset checkboxes on page change
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <div className="bg-white rounded border shadow">

                {/* Title */}
                <div className="px-4 py-3 border-b flex items-center gap-2 text-gray-700 font-semibold text-lg">
                    <span className="text-xl">☰</span> Event List
                </div>

                {/* TABLE */}
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-50 border-b">
                            <th className="px-3 py-3 w-10">
                                <input type="checkbox" checked={allSelected} onChange={toggleSelectAll} />
                            </th>

                            <th className="px-3 py-3 text-blue-600 font-semibold text-left border-r">
                                Event Code <span className="text-gray-500">↑</span>
                            </th>

                            <th className="px-3 py-3 text-blue-600 font-semibold border-r text-center">
                                Sort Order
                            </th>

                            <th className="px-3 py-3 text-blue-600 font-semibold text-center">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentData.map((event, index) => (
                            <tr key={index} className="border-b">
                                {/* Checkbox */}
                                <td className="px-3 py-3 text-center">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(event)}
                                        onChange={() => toggleSelect(event)}
                                    />
                                </td>

                                {/* Event Code */}
                                <td className="px-3 py-3 border-r text-gray-700">
                                    {event}
                                </td>

                                {/* Sort Order */}
                                <td className="px-3 py-3 border-r text-center">1</td>

                                {/* Actions */}
                                <td className="px-3 py-3 flex items-center justify-center gap-2">
                                    <button className="p-2 rounded bg-sky-500 text-white hover:bg-sky-600">
                                        <FiInfo size={18} />
                                    </button>
                                    <button className="p-2 rounded bg-red-500 text-white hover:bg-red-600">
                                        <RiDeleteBin5Line size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex justify-between p-4 text-gray-600 text-sm">

                    {/* Page Numbers */}
                    <div className="flex gap-1">
                        {/* First */}
                        <button
                            className="px-3 py-1 border bg-white rounded hover:bg-gray-100"
                            onClick={() => goToPage(1)}
                        >
                            |&lt;
                        </button>

                        {/* Prev */}
                        <button
                            className="px-3 py-1 border bg-white rounded hover:bg-gray-100"
                            disabled={currentPage === 1}
                            onClick={() => goToPage(currentPage - 1)}
                        >
                            &lt;
                        </button>

                        {/* Numbered pages */}
                        {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                className={`px-3 py-1 border rounded ${currentPage === page
                                    ? "bg-blue-600 text-white"
                                    : "bg-white hover:bg-gray-100"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}

                        {/* Next */}
                        <button
                            className="px-3 py-1 border bg-white rounded hover:bg-gray-100"
                            disabled={currentPage === totalPages}
                            onClick={() => goToPage(currentPage + 1)}
                        >
                            &gt;
                        </button>

                        {/* Last */}
                        <button
                            className="px-3 py-1 border bg-white rounded hover:bg-gray-100"
                            onClick={() => goToPage(totalPages)}
                        >
                            &gt;|
                        </button>
                    </div>

                    {/* Showing count */}
                    <div>
                        Showing {startIndex + 1} to{" "}
                        {Math.min(startIndex + itemsPerPage, EVENT_DATA.length)} of{" "}
                        {EVENT_DATA.length} ({totalPages} Pages)
                    </div>
                </div>
            </div>
        </div>
    );
}
