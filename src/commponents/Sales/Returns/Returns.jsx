import React, { useState } from "react";
import Table from "../../../Table.jsx";
import { CiFilter } from "react-icons/ci";
import Breadcrumb from "../../Breadcrumb.jsx";

const Headings = {
    heading1: "Return ID",
    heading2: "Order ID",
    heading3: "Customer",
    heading4: "Product",
    heading5: "Date Added",
    heading7: "Date Modified",
    heading6: "Action"
};

const Data = [
    {
        id: 1,
        ReturnID: 1,
        OrderID: 1,
        Customer: "Himanshu",
        Product: "Apple",
        DateAdded: "02/01/2003",
        DateModified: "02/01/2004",
    }
];

const Returns = () => {
    const [filters, setFilters] = useState({
        returnId: "",
        orderId: "",
        customer: "",
        product: "",
        model: "",
        status: "",
        dateFrom: "",
        dateTo: "",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const handleFilter = () => {
        console.log("Applied Filters:", filters);
    };

    return (
        <div className="bg-[#F6F6F6]">
            <Breadcrumb
                title="Seo Url"
                paths={[
                    { name: "Home" },
                    { name: "Seo Url", color: "text-blue-400" },
                ]}
            />

            <div className="flex gap-4 p-4">
                <div className="flex-1">
                    <Table
                        data={Data}
                        headings={Headings}
                        pageSize={5}
                        link={"Returns"}
                        Head="Return List"
                    />
                </div>

                {/* RIGHT : FILTER SIDEBAR */}
                <div className="w-72 border border-gray-300 bg-white p-4 rounded">

                    <h2 className="text-lg font-semibold mb-4">Filter Returns</h2>

                    {/* Return ID */}
                    <label className="text-sm font-medium">Return ID</label>
                    <input
                        name="returnId"
                        placeholder="Return ID"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    {/* Order ID */}
                    <label className="text-sm font-medium">Order ID</label>
                    <input
                        name="orderId"
                        placeholder="Order ID"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    {/* Customer */}
                    <label className="text-sm font-medium">Customer</label>
                    <input
                        name="customer"
                        placeholder="Customer"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    {/* Product */}
                    <label className="text-sm font-medium">Product</label>
                    <input
                        name="product"
                        placeholder="Product"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    {/* Model */}
                    <label className="text-sm font-medium">Model</label>
                    <input
                        name="model"
                        placeholder="Model"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    {/* Return Status */}
                    <label className="text-sm font-medium">Return Status</label>
                    <select
                        name="status"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    >
                        <option value="">Select Status</option>
                        <option value="Pending">Pending</option>
                        <option value="Complete">Complete</option>
                    </select>

                    {/* Date From */}
                    <label className="text-sm font-medium">Date From</label>
                    <input
                        type="date"
                        name="dateFrom"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    {/* Date To */}
                    <label className="text-sm font-medium">Date To</label>
                    <input
                        type="date"
                        name="dateTo"
                        className="w-full border p-2 rounded mb-3"
                        onChange={handleChange}
                    />

                    {/* Filter Button */}
                    <button
                        onClick={handleFilter}
                        className="w-full bg-black text-white py-2 rounded flex items-center justify-center gap-2"
                    >
                        <CiFilter /> Filter
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Returns;
