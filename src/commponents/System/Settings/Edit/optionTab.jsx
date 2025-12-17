// OptionTab.jsx
import React from "react";

const labelClass = "w-full max-w-xs text-sm font-medium text-gray-700";
const fieldWrap = "flex-1 max-w-xl";
const inputClass =
    "block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

const OptionTab = () => {
    return (
        <div className="space-y-4">

            {/* Products accordion (open) */}
            <div className="overflow-hidden  bg-white">
                <button
                    type="button"
                    className="flex w-full items-center justify-between bg-primary-50 px-4 py-2 text-left text-sm font-semibold text-gray-800"
                >
                    <span>Products</span>
                    <span className="text-xs text-gray-500">▾</span>
                </button>

                <div className="space-y-4 border-t border-gray-200 p-6">
                    {/* List Description Limit */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                        <label className={labelClass}>
                            <span className="text-red-500">*</span> List Description Limit
                        </label>
                        <div className={fieldWrap}>
                            <input className={inputClass} defaultValue="100" />
                            <p className="mt-1 text-xs text-gray-500">
                                In the list view, short description character limit (categories, special etc).
                            </p>
                        </div>
                    </div>

                    {/* Default Items Per Page (catalog) */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                        <label className={labelClass}>
                            <span className="text-red-500">*</span> Default Items Per Page
                        </label>
                        <div className={fieldWrap}>
                            <input className={inputClass} defaultValue="10" />
                            <p className="mt-1 text-xs text-gray-500">
                                Determines how many catalog items are shown per page (products, categories, etc).
                            </p>
                        </div>
                    </div>

                    {/* Category Product Count (toggle) */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                        <label className={labelClass}>Category Product Count</label>
                        <div className={fieldWrap}>
                            <button
                                type="button"
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600 transition"
                            >
                                <span className="inline-block h-5 w-5 translate-x-5 rounded-full bg-white shadow transition" />
                            </button>
                            <p className="mt-1 text-xs text-gray-500">
                                Show the number of products inside the subcategories in the storefront header category menu. Be warned, this may affect performance with many subcategories.
                            </p>
                        </div>
                    </div>

                    {/* Default Items Per Page (Admin) */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                        <label className={labelClass}>
                            <span className="text-red-500">*</span> Default Items Per Page (Admin)
                        </label>
                        <div className={fieldWrap}>
                            <input className={inputClass} defaultValue="10" />
                            <p className="mt-1 text-xs text-gray-500">
                                Determines how many catalog items are shown per page in the admin panel (products, categories, etc).
                            </p>
                        </div>
                    </div>

                    {/* Product Report Status (toggle) */}
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                        <label className={labelClass}>
                            <span className="text-red-500">*</span> Product Report Status
                        </label>
                        <div className={fieldWrap}>
                            <button
                                type="button"
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-300 transition"
                            >
                                <span className="inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow transition" />
                            </button>
                            <p className="mt-1 text-xs text-gray-500">
                                Report how many times a product is viewed. This can use a lot of storage on high traffic sites.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Other sections (collapsed rows) */}
            {[
                "Reviews",
                "CMS",
                "Voucher",
                "Legal",
                "Taxes",
                "Account",
                "Checkout",
                "Subscription",
                "Stock",
                "Affiliate",
                "Return",
                "Captcha",
            ].map((title) => (
                <div
                    key={title}
                    className="flex items-center justify-between rounded-md border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-800"
                >
                    <span>{title}</span>
                    <span className="text-xs text-gray-500">▾</span>
                </div>
            ))}
        </div>
    );
};

export default OptionTab;
