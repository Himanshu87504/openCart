// ProductLinksTab.jsx
import React from "react";

const Row = ({ label, children, helper }) => (
    <div className="flex items-start gap-6 border-b border-gray-100 py-3">
        <div className="w-40 text-right text-sm font-medium">{label}</div>
        <div className="flex-1">
            {children}
            {helper && (
                <p className="mt-1 text-xs text-gray-500">{helper}</p>
            )}
        </div>
    </div>
);

const PillRow = ({ text }) => (
    <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2 text-sm">
        <span>{text}</span>
        <button className="h-6 w-6 rounded bg-red-500 text-xs font-bold text-white">
            ×
        </button>
    </div>
);

const ProductLinksTab = () => {
    return (
        <div className="border border-gray-200 bg-white text-sm">
            {/* Manufacturer */}
            <Row label="Manufacturer" helper="(Autocomplete)">
                <input
                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Apple"
                />
            </Row>

            {/* Categories */}
            <Row label="Categories" helper="(Autocomplete)">
                <div className="border border-gray-300">
                    <div className="border-b bg-gray-50 px-3 py-2 text-sm font-medium">
                        Categories
                    </div>
                    <PillRow text="Desktops" />
                    <PillRow text="Components > Monitors" />
                </div>
            </Row>

            {/* Filters */}
            <Row label="Filters" helper="(Autocomplete)">
                <textarea
                    className="h-24 w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Filters"
                />
            </Row>

            {/* Stores */}
            <Row label="Stores">
                <div className="border border-gray-300 px-3 py-3">
                    <label className="inline-flex items-center gap-2 text-sm">
                        <input type="checkbox" defaultChecked />
                        <span>Default</span>
                    </label>
                </div>
            </Row>

            {/* Downloads */}
            <Row label="Downloads" helper="(Autocomplete)">
                <textarea
                    className="h-24 w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm"
                    placeholder="Downloads"
                />
            </Row>

            {/* Related Products */}
            <Row label="Related Products" helper="(Autocomplete)">
                <div className="border border-gray-300">
                    <div className="border-b bg-gray-50 px-3 py-2 text-sm font-medium">
                        Related Products
                    </div>
                    <PillRow text="iPhone" />
                    <PillRow text="iMac" />
                </div>
            </Row>
        </div>
    );
};

export default ProductLinksTab;
