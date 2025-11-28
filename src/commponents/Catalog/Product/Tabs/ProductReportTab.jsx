// ProductReportTab.jsx
import React from "react";

const ProductReportTab = () => {
    return (
        <div className="border border-gray-200 bg-white text-sm">
            {/* table header */}
            <div className="grid grid-cols-[2fr,2fr,2fr,2fr] bg-gray-100 px-4 py-2 font-medium">
                <div>IP</div>
                <div>Store</div>
                <div>Country</div>
                <div>Date Added</div>
            </div>

            {/* empty row */}
            <div className="px-4 py-10 text-center text-sm text-gray-500">
                No results!
            </div>

            {/* footer / pagination info */}
            <div className="border-t px-4 py-2 text-right text-xs text-gray-500">
                Showing 0 to 0 of 0 (0 Pages)
            </div>
        </div>
    );
};

export default ProductReportTab;
