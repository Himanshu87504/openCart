// ImageTab.jsx
import React from "react";

const labelClass = "w-full max-w-xs text-sm font-medium text-gray-700";
const fieldWrap = "flex-1 max-w-xl";
const inputClass =
    "block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

const sizeRows = [
    {
        key: "category",
        label: "Category Image Size (W x H)",
        left: "80",
        right: "80",
    },
    {
        key: "productThumb",
        label: "Product Image Thumb Size (W x H)",
        left: "500",
        right: "500",
    },
    {
        key: "productPopup",
        label: "Product Image Popup Size (W x H)",
        left: "800",
        right: "800",
    },
    {
        key: "productList",
        label: "Product Image List Size (W x H)",
        left: "250",
        right: "250",
    },
    {
        key: "additionalProduct",
        label: "Additional Product Image Size (W x H)",
        left: "74",
        right: "74",
    },
    {
        key: "relatedProduct",
        label: "Related Product Image Size (W x H)",
        left: "250",
        right: "250",
    },
    {
        key: "blogImage",
        label: "Blog Image Size (W x H)",
        left: "90",
        right: "90",
    },
    {
        key: "compareImage",
        label: "Compare Image Size (W x H)",
        left: "90",
        right: "90",
    },
    {
        key: "wishListImage",
        label: "Wish List Image Size (W x H)",
        left: "47",
        right: "47",
    },
    {
        key: "cartImage",
        label: "Cart Image Size (W x H)",
        left: "47",
        right: "47",
    },
    {
        key: "storeImage",
        label: "Store Image Size (W x H)",
        left: "268",
        right: "50",
    },
];

const ImageTab = () => {
    return (
        <div className=" bg-white ">
            <h2 className="mb-6 text-lg font-semibold text-gray-800">Image Sizes</h2>

            <div className="space-y-4">
                {sizeRows.map((row) => (
                    <div
                        key={row.key}
                        className="flex flex-col gap-2 sm:flex-row sm:items-center"
                    >
                        <label className={labelClass}>
                            <span className="text-red-500">*</span> {row.label}
                        </label>

                        <div className={`${fieldWrap} grid grid-cols-2 gap-4`}>
                            <input
                                className={inputClass}
                                defaultValue={row.left}
                                aria-label={`${row.label} width`}
                            />
                            <input
                                className={inputClass}
                                defaultValue={row.right}
                                aria-label={`${row.label} height`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageTab;
