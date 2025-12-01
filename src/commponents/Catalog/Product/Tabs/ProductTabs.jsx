// components/ProductTabs.jsx
import React from "react";

const productTabs = [
    "General",
    "Data",
    "Links",
    "Attribute",
    "Option",
    "Subscription",
    "Discount",
    "Special",
    "Image",
    "Reward Points",
    "SEO",
    "Design",
    "Report",
];

const ProductTabs = ({ activeTab, onChange }) => {
    return (
        <div className="px-2 bg-white p-4">
            <div className="w-full border-gray-200 bg-white" />

            {/* Allow wrapping on small screens */}
            <div className="flex flex-wrap gap-1 text-sm">
                {productTabs.map((tab) => {
                    const isActive = activeTab === tab;
                    return (
                        <button
                            key={tab}
                            onClick={() => onChange(tab)}
                            className={`rounded-t border-x border-t px-4 py-2 ${isActive
                                ? "border-gray-300 border-b-white bg-white text-gray-900"
                                : "border-transparent border-b-transparent bg-transparent text-gray-500 hover:text-gray-700"
                                }`}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default ProductTabs;
