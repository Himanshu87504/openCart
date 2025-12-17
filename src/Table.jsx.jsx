import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiEdit, CiBoxList } from "react-icons/ci";

export default function Table({ data = [], headings = {}, pageSize = 10, link, Head }) {

    console.log(data)
    const [page, setPage] = useState(1);

    const totalItems = data.length;
    const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    const startIndex = (page - 1) * pageSize;
    const currentItems = data.slice(startIndex, startIndex + pageSize);

    const goToPage = (p) => {
        if (p < 1 || p > totalPages) return;
        setPage(p);
    };

    // Dynamic headings except action column
    const headingKeys = Object.keys(headings).filter(h => h !== "heading6");
    const actionHeading = headings.heading6;

    return (
        <div>

            {/* ------ TOP HEADER ------ */}
            <div className="p-1 pt-4 border border-gray-300 bg-[#F6F6F6] pb-5 flex items-center gap-3">
                <div className="text-xl text-black"><CiBoxList /></div>
                <div>{Head}</div>
            </div>

            <div className="w-full border border-gray-300 p-2 bg-[#F6F6F6]">

                <table className="w-full text-sm border-collapse mt-2 bg-white border">
                    <thead>
                        <tr className="bg-white border-b border-[#e5e5e5]">

                            {/* Checkbox */}
                            <th className="w-10 px-4 py-2 text-left border border-gray-300">
                                <input type="checkbox" className="h-4 w-4 border-2" />
                            </th>

                            {/* Dynamic Heading Columns */}
                            {headingKeys.map((key) => (
                                <th
                                    key={key}
                                    className="px-4 py-2 text-left text-[#3b8ac4] font-semibold border border-gray-300"
                                >
                                    {headings[key]}
                                </th>
                            ))}

                            {/* Action Column */}
                            {actionHeading && (
                                <th className="px-4 py-2 text-center text-black font-semibold w-24 border border-gray-300">
                                    {actionHeading}
                                </th>
                            )}
                        </tr>
                    </thead>

                    <tbody>

                        {/* Empty State */}
                        {totalItems === 0 ? (
                            <tr>
                                <td colSpan={20} className="px-4 py-6 text-sm text-[#666] text-center">
                                    No results!
                                </td>
                            </tr>
                        ) : (
                            currentItems.map((item, rowIndex) => (
                                <tr
                                    key={rowIndex}
                                    className="border-t border-[#e5e5e5] hover:bg-[#f5f5f5]"
                                >

                                    {/* Checkbox */}
                                    <td className="px-4 py-2">
                                        <input type="checkbox" className="h-4 w-4" />
                                    </td>

                                    {/* Dynamic Row Data */}
                                    {headingKeys.map((key, index) => {
                                        const headingText = headings[key];

                                        // create comparable key
                                        const processedKey = headingText
                                            .replace(/\s/g, "")        // remove spaces
                                            .replace(/[^a-zA-Z0-9]/g, "") // remove symbols
                                            .toLowerCase();

                                        // find matching key in item
                                        const itemKey = Object.keys(item).find(k =>
                                            k.toLowerCase() === processedKey
                                        );

                                        return (
                                            <td key={index} className="px-4 py-2 border border-gray-200">
                                                {item[itemKey] ?? ""}

                                                {index === 0 && item.subheading && (
                                                    <tr>
                                                        <td colSpan={5} className="text-green-400">
                                                            {item.subheading}
                                                        </td>
                                                    </tr>
                                                )}
                                            </td>
                                        );
                                    })}

                                    {/* Action Button */}
                                    {actionHeading && (
                                        <td className="px-4 py-2 flex items-center gap-2 justify-center border-gray-200">
                                            {link && (
                                                <Link to={`/${link}/${item.id || item.Id}`}>
                                                    <button className="h-8 w-8 flex items-center justify-center bg-[#1A7BB0] text-white rounded">
                                                        <CiEdit className="text-white text-[22px]" />
                                                    </button>
                                                </Link>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}

                    </tbody>
                </table>

                {/* Footer Pagination */}
                <div className="flex items-center justify-between px-4 py-3 border-t border-[#e5e5e5]">
                    <div className="flex items-center space-x-1 text-xs">
                        <button
                            className="px-3 py-1 border border-[#d7d7d7] bg-[#f8f8f8]"
                            onClick={() => goToPage(1)}
                            disabled={page === 1 || totalItems === 0}
                        >
                            {"<|"}
                        </button>

                        <button
                            className="px-3 py-1 border border-[#d7d7d7] bg-[#f8f8f8]"
                            onClick={() => goToPage(page - 1)}
                            disabled={page === 1 || totalItems === 0}
                        >
                            {"<"}
                        </button>

                        {[...Array(totalPages)].map((_, i) => {
                            const p = i + 1;
                            return (
                                <button
                                    key={p}
                                    onClick={() => goToPage(p)}
                                    disabled={totalItems === 0}
                                    className={`px-3 py-1 border ${p === page
                                        ? "bg-[#1E91CF] text-white"
                                        : "bg-white text-[#555]"
                                        }`}
                                >
                                    {p}
                                </button>
                            );
                        })}

                        <button
                            className="px-3 py-1 border border-[#d7d7d7] bg-[#f8f8f8]"
                            onClick={() => goToPage(page + 1)}
                            disabled={page === totalPages || totalItems === 0}
                        >
                            {">"}
                        </button>
                    </div>

                    <div className="text-xs text-[#777]">
                        Showing {totalItems === 0 ? 0 : startIndex + 1} to{" "}
                        {totalItems === 0 ? 0 : Math.min(startIndex + pageSize, totalItems)}{" "}
                        of {totalItems} ({totalPages} Pages)
                    </div>
                </div>

            </div>
        </div>
    );
}
