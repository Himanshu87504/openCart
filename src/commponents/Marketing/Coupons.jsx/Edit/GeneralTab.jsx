import React, { useState } from "react";

export default function GeneralTab() {
    const [form, setForm] = useState({
        couponName: "",
        code: "",
        type: "Percentage",
        discount: "0",
        totalAmount: "0",
        customerLogin: false,
        freeShipping: false,
        products: "",
        category: "",
        dateStart: "",
        dateEnd: "",
        usesPerCoupon: "",
        usesPerCustomer: "",
        status: false,
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="w-full p-6 bg-white shadow-sm">

            {/* ================= IMAGE 33 FIELDS ================= */}
            {/* Coupon Name */}
            <div className="mb-6">
                <label className="font-semibold block mb-1">
                    <span className="text-red-500">*</span> Coupon Name
                </label>
                <input
                    type="text"
                    name="couponName"
                    value={form.couponName}
                    onChange={handleChange}
                    placeholder="-10% Discount"
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* Code */}
            <div className="mb-6">
                <label className="font-semibold block mb-1">
                    <span className="text-red-500">*</span> Code
                </label>
                <input
                    type="text"
                    name="code"
                    value={form.code}
                    onChange={handleChange}
                    placeholder="2222"
                    className="w-full border p-2 rounded"
                />
                <p className="text-gray-500 text-sm mt-1">
                    The code the customer enters to get the discount.
                </p>
            </div>

            {/* Type */}
            <div className="mb-6">
                <label className="block font-semibold mb-1">Type</label>
                <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                >
                    <option value="Percentage">Percentage</option>
                    <option value="Fixed Amount">Fixed Amount</option>
                </select>
                <p className="text-gray-500 text-sm">Percentage or Fixed Amount.</p>
            </div>

            {/* Discount */}
            <div className="mb-6">
                <label className="block font-semibold mb-1">Discount</label>
                <input
                    type="number"
                    name="discount"
                    value={form.discount}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
            </div>

            {/* Total Amount */}
            <div className="mb-6">
                <label className="block font-semibold mb-1">Total Amount</label>
                <input
                    type="number"
                    name="totalAmount"
                    value={form.totalAmount}
                    onChange={handleChange}
                    className="w-full border p-2 rounded"
                />
                <p className="text-gray-500 text-sm">
                    The total amount that must be reached before the coupon is valid.
                </p>
            </div>

            {/* Customer Login Toggle */}
            <div className="flex items-center justify-between mb-6">
                <label className="font-semibold">Customer Login</label>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        onChange={() =>
                            setForm({ ...form, customerLogin: !form.customerLogin })
                        }
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-focus:ring-4 rounded-full peer-checked:bg-blue-600 transition"></div>
                </label>
            </div>
            <p className="text-gray-500 text-sm mb-6">
                Customer must be logged in to use the coupon.
            </p>

            {/* Free Shipping Toggle */}
            <div className="flex items-center justify-between mb-6">
                <label className="font-semibold">Free Shipping</label>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        onChange={() =>
                            setForm({ ...form, freeShipping: !form.freeShipping })
                        }
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition"></div>
                </label>
            </div>

            {/* Products */}
            <div className="mb-10">
                <label className="font-semibold block mb-1">Products</label>
                <textarea
                    name="products"
                    rows="4"
                    className="w-full border p-2 rounded"
                    placeholder="Products"
                    onChange={handleChange}
                ></textarea>
                <p className="text-gray-500 text-sm">
                    Choose specific products the coupon applies to.
                </p>
            </div>

            {/* ================= IMAGE 34 FIELDS ================= */}

            {/* Category */}
            <div className="mb-6">
                <label className="font-semibold block mb-1">Category</label>
                <textarea
                    name="category"
                    rows="4"
                    className="w-full border p-2 rounded"
                    placeholder="Category"
                    onChange={handleChange}
                ></textarea>
                <p className="text-gray-500 text-sm">
                    Choose all products under selected category.
                </p>
            </div>

            {/* Date Start */}
            <div className="mb-6">
                <label className="font-semibold block mb-1">Date Start</label>
                <input
                    type="date"
                    name="dateStart"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                />
            </div>

            {/* Date End */}
            <div className="mb-6">
                <label className="font-semibold block mb-1">Date End</label>
                <input
                    type="date"
                    name="dateEnd"
                    className="w-full border p-2 rounded"
                    onChange={handleChange}
                />
            </div>

            {/* Uses Per Coupon */}
            <div className="mb-6">
                <label className="block font-semibold mb-1">Uses Per Coupon</label>
                <input
                    type="number"
                    name="usesPerCoupon"
                    className="w-full border p-2 rounded"
                    placeholder="10"
                    onChange={handleChange}
                />
                <p className="text-gray-500 text-sm">
                    Maximum times the coupon can be used. Leave blank for unlimited.
                </p>
            </div>

            {/* Uses Per Customer */}
            <div className="mb-6">
                <label className="block font-semibold mb-1">Uses Per Customer</label>
                <input
                    type="number"
                    name="usesPerCustomer"
                    className="w-full border p-2 rounded"
                    placeholder="10"
                    onChange={handleChange}
                />
                <p className="text-gray-500 text-sm">
                    Maximum times a customer can use it. Leave blank for unlimited.
                </p>
            </div>

            {/* Status Toggle */}
            <div className="flex items-center justify-between mt-8">
                <label className="font-semibold">Status</label>
                <label className="inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        onChange={() =>
                            setForm({ ...form, status: !form.status })
                        }
                    />
                    <div className="w-11 h-6 bg-gray-300 peer-checked:bg-blue-600 rounded-full transition"></div>
                </label>
            </div>
        </div>
    );
}
