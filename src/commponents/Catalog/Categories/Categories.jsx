import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import { BiCategory } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import categories from './categories.json'


const ITEMS_PER_PAGE = 10;

const Categories = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedIds, setSelectedIds] = useState([]);

    const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = categories.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const allSelected = currentItems.every(item => selectedIds.includes(item.id));

    const toggleSelectAll = () => {
        if (allSelected) {
            setSelectedIds(prev => prev.filter(id => !currentItems.some(item => item.id === id)));
        } else {
            setSelectedIds(prev => [
                ...prev,
                ...currentItems.filter(item => !prev.includes(item.id)).map(item => item.id),
            ]);
        }
    };

    const toggleSelectItem = (id) => {
        setSelectedIds(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    return (
        <div className="w-full bg-[#F6F6F6]  p-1">
            <Breadcrumb
                title="Categories"
                paths={[
                    { name: "Home" },
                    { name: "Categories", color: "text-blue-400" },
                ]}
            />

            <div className="min-h-screen bg-gray-100 p-2">
                <div className="mx-auto max-w-8xl bg-white shadow">
                    <div className="bg-[#F8F8F8] w-full p-1 pl-3 border border-gray-300 flex items-center gap-1.5">
                        <BiCategory />
                        <h1 className="text-xl font-semibold ">Category List</h1>
                    </div>

                    <table className="min-w-full text-sm text-[#1A7BB0]">
                        <thead className="bg-gray-100">
                            <tr className="border border-gray-300">
                                <th className="px-3 py-2 text-left">
                                    <input
                                        type="checkbox"
                                        checked={allSelected}
                                        onChange={toggleSelectAll}
                                    />
                                </th>
                                <th className="px-3 py-2 text-left">Category Name</th>
                                <th className="px-3 py-2 text-left">Sort Order</th>
                                <th className="px-3 py-2 text-left">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border border-gray-300">
                            {currentItems.map((cat) => (
                                <tr key={cat.id} className="hover:bg-gray-50 border border-gray-300">
                                    <td className="px-3 py-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.includes(cat.id)}
                                            onChange={() => toggleSelectItem(cat.id)}
                                        />
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300">
                                        <div>{cat.name}</div>
                                        <div className="text-xs text-green-600">{cat.status}</div>
                                    </td>
                                    <td className="px-3 py-2 border border-gray-300">{cat.sortOrder}</td>
                                    <td className="border-gray-300 px-3 py-2">
                                        <Link
                                            to={`/categories/edit/${cat.id}`} // navigate to edit page with id
                                            className="flex items-center gap-1 rounded bg-[#1A7BB0] pl-1 text-[20px] text-white w-8 h-8"
                                        >
                                            <MdEdit />
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                    <div className="mt-2 flex items-center gap-2 p-2">
                        <button
                            className="rounded border px-3 py-1 text-sm disabled:opacity-40"
                            onClick={() => setCurrentPage(1)}
                            disabled={currentPage === 1}
                        >
                            {"<<"}
                        </button>
                        <button
                            className="rounded border px-3 py-1 text-sm disabled:opacity-40"
                            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            {"<"}
                        </button>

                        <span className="text-sm">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            className="rounded border px-3 py-1 text-sm disabled:opacity-40"
                            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            {">"}
                        </button>
                        <button
                            className="rounded border px-3 py-1 text-sm disabled:opacity-40"
                            onClick={() => setCurrentPage(totalPages)}
                            disabled={currentPage === totalPages}
                        >
                            {">>"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
