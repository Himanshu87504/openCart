import React, { useState } from "react";

// SAMPLE DATA (you can replace with API results)
const sampleRows = Array.from({ length: 135 }, (_, i) => ({
    ip: `190.143.247.${i}`,
    agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    date: "21/07/2024 18:42:31",
}));

const UserLoginTab = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const pageSize = 10; // rows per page
    const totalRows = sampleRows.length;
    const totalPages = Math.ceil(totalRows / pageSize);

    // Slice rows for current page
    const paginatedRows = sampleRows.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    // Generate page numbers (max 10 shown)
    const getPageNumbers = () => {
        let start = Math.max(1, currentPage - 4);
        let end = Math.min(totalPages, start + 9);

        if (end - start < 9) start = Math.max(1, end - 9);

        const pages = [];
        for (let i = start; i <= end; i++) pages.push(i);
        return pages;
    };

    return (
        <div className="rounded-md bg-white p-6 shadow">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">Login History</h2>

            <div className="overflow-x-auto border border-gray-200">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-50 text-xs font-semibold text-gray-700">
                        <tr>
                            <th className="px-3 py-2 border-b">IP</th>
                            <th className="px-3 py-2 border-b">User Agent</th>
                            <th className="px-3 py-2 border-b">Date Added</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedRows.map((row, idx) => (
                            <tr key={idx} className="odd:bg-white even:bg-gray-50">
                                <td className="px-3 py-2 border-b text-primary-600 underline">
                                    {row.ip}
                                </td>
                                <td className="px-3 py-2 border-b">{row.agent}</td>
                                <td className="px-3 py-2 border-b">{row.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="mt-3 flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-1">

                    {/* FIRST */}
                    <button
                        className="h-7 w-7 border bg-white"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(1)}
                    >
                        {"<<"}
                    </button>

                    {/* PREVIOUS */}
                    <button
                        className="h-7 w-7 border bg-white"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                    >
                        {"<"}
                    </button>

                    {/* PAGE NUMBERS */}
                    {getPageNumbers().map((num) => (
                        <button
                            key={num}
                            onClick={() => setCurrentPage(num)}
                            className={`h-7 w-7 border text-center ${currentPage === num
                                ? "bg-primary-600 text-white border-primary-600"
                                : "bg-white"
                                }`}
                        >
                            {num}
                        </button>
                    ))}

                    {/* NEXT */}
                    <button
                        className="h-7 w-7 border bg-white"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                    >
                        {">"}
                    </button>

                    {/* LAST */}
                    <button
                        className="h-7 w-7 border bg-white"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(totalPages)}
                    >
                        {">>"}
                    </button>
                </div>

                {/* TEXT */}
                <span>
                    Showing {(currentPage - 1) * pageSize + 1} to{" "}
                    {Math.min(currentPage * pageSize, totalRows)} of {totalRows} (
                    {totalPages} Pages)
                </span>
            </div>
        </div>
    );
};

export default UserLoginTab;
