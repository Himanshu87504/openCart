import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import { products } from "./productsData";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";

const ITEMS_PER_PAGE = 10;

const Product = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState([]);
    const [showFilter, setShowFilter] = useState(false); // toggle for mobile

    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentItems = products.slice(start, start + ITEMS_PER_PAGE);

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelected(currentItems.map((item) => item.id));
        } else {
            setSelected([]);
        }
    };

    const handleSelectOne = (id) => {
        setSelected((prev) =>
            prev.includes(id)
                ? prev.filter((itemId) => itemId !== id)
                : [...prev, id]
        );
    };

    const allSelected =
        currentItems.length > 0 && selected.length === currentItems.length;

    return (
        <div className="w-full bg-[#F6F6F6] p-4 min-h-screen">
            <Breadcrumb
                title="Products"
                paths={[
                    { name: "Home" },
                    { name: "Products", color: "text-blue-400" },
                ]}
            />


            <div className="mb-4 flex justify-end lg:hidden">
                <button
                    onClick={() => setShowFilter(!showFilter)}
                    className="rounded bg-blue-500 px-3 py-2 text-white text-sm"
                >
                    {showFilter ? "Hide Filters" : "Show Filters"}
                </button>
            </div>

            {/* Main layout: table left, filter right */}
            <div className="flex flex-col lg:flex-row gap-4">
                {(showFilter || window.innerWidth >= 1024) && (
                    <div className="w-full lg:w-72 rounded bg-white  shadow mb-4 lg:mb-0 order-1 lg:order-2 h-123">
                        <div className="w-full">
                            <h2 className="mb-1 flex items-center gap-2 text-base font-semibold border border-gray-300 p-3 bg-[#F8F8F8]">
                                <CiFilter />
                                <span>Filter</span>
                            </h2>
                        </div>
                        <div className="space-y-3 text-sm p-3">
                            <div>
                                <label className="mb-1 block font-medium">Product Name</label>
                                <input
                                    className="w-full rounded border px-3 py-2 text-sm"
                                    placeholder="Product Name"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block font-medium">Model</label>
                                <input
                                    className="w-full rounded border px-3 py-2 text-sm"
                                    placeholder="Model"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block font-medium">Price</label>
                                <input
                                    className="w-full rounded border px-3 py-2 text-sm"
                                    placeholder="Price"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block font-medium">Quantity</label>
                                <input
                                    className="w-full rounded border px-3 py-2 text-sm"
                                    placeholder="Quantity"
                                />
                            </div>
                            <div>
                                <label className="mb-1 block font-medium">Status</label>
                                <select className="w-full rounded border px-3 py-2 text-sm">
                                    <option value=""> </option>
                                    <option value="enabled">Enabled</option>
                                    <option value="disabled">Disabled</option>
                                </select>
                            </div>
                            <div className="w-full flex justify-end">

                                <button className="mt-2 flex w-30 items-center justify-center gap-1 rounded  px-3 py-2 text-sm text-black border mb-3">
                                    <FaEdit />
                                    Filter
                                </button>
                            </div>
                        </div>
                    </div>
                )}


                <div className="flex-1 order-2 lg:order-1">
                    <div className="w-full flex gap-2 items-center bg-[#F8F8F8] border border-gray-200 pt-2 pl-5">
                        <FaEdit />
                        <h1 className="mb-2 text-lg font-semibold pt-2">Product List</h1>
                    </div>

                    <div className="bg-white p-4 shadow overflow-x-auto">
                        <table className="min-w-full table-auto border text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="w-10 border border-gray-300 px-2 py-2">
                                        <input
                                            type="checkbox"
                                            checked={allSelected}
                                            onChange={handleSelectAll}
                                        />
                                    </th>
                                    <th className="border border-gray-300 px-2 py-2 text-left">Image</th>
                                    <th className="border  border-gray-300 px-2 py-2 text-left">Product Name</th>
                                    <th className="border  border-gray-300 px-2 py-2 text-left">Model</th>
                                    <th className="border  border-gray-300 px-2 py-2 text-left">Price</th>
                                    <th className="border  border-gray-300 px-2 py-2 text-left">Quantity</th>
                                    <th className="border  border-gray-300 px-2 py-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((p) => (
                                    <tr key={p.id} className="hover:bg-gray-50">
                                        <td className="border  border-gray-300 px-2 py-2">
                                            <input
                                                type="checkbox"
                                                checked={selected.includes(p.id)}
                                                onChange={() => handleSelectOne(p.id)}
                                            />
                                        </td>
                                        <td className="border  border-gray-300 px-2 py-2">
                                            <img
                                                src={p.image}
                                                alt={p.name}
                                                className="h-10 w-10 rounded object-cover"
                                            />
                                        </td>
                                        <td className="border  border-gray-300 px-2 py-2">
                                            <div>{p.name}</div>
                                            <div className="text-xs text-green-600">{p.status}</div>
                                        </td>
                                        <td className="border border-gray-300 px-2 py-2">{p.model}</td>
                                        <td className="border border-gray-300 px-2 py-2">
                                            {p.priceOld !== p.priceNew && (
                                                <div className="text-xs text-gray-400 line-through">
                                                    ${p.priceOld.toFixed(2)}
                                                </div>
                                            )}
                                            <div className="text-red-500">${p.priceNew.toFixed(2)}</div>
                                        </td>
                                        <td className="border  border-gray-300 px-2 py-2">
                                            <span
                                                className={`inline-block rounded px-2 py-0.5 text-xs text-white ${p.quantity > 0 ? "bg-green-500" : "bg-orange-400"
                                                    }`}
                                            >
                                                {p.quantity}
                                            </span>
                                        </td>
                                        <td className="border  border-gray-300 px-2 py-2">
                                            <Link
                                                to={`/products/edit/${p.id}`}
                                                className="rounded bg-blue-500  text-xs text-white"
                                            >
                                                <button className="h-8 w-8 flex items-center justify-center bg-[#1A7BB0] text-white rounded">
                                                    <CiEdit className="text-white text-[22px]" />
                                                </button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="mt-4 flex flex-wrap items-center justify-end gap-2 text-sm">
                            <button
                                className="rounded border px-2 py-1 disabled:opacity-40"
                                onClick={() => setCurrentPage(1)}
                                disabled={currentPage === 1}
                            >
                                {"<<"}
                            </button>
                            <button
                                className="rounded border px-2 py-1 disabled:opacity-40"
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                {"<"}
                            </button>
                            <span>
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="rounded border px-2 py-1 disabled:opacity-40"
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                {">"}
                            </button>
                            <button
                                className="rounded border px-2 py-1 disabled:opacity-40"
                                onClick={() => setCurrentPage(totalPages)}
                                disabled={currentPage === totalPages}
                            >
                                {">>"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
