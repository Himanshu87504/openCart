// components/ProductGeneralTab.jsx
import React from "react";

const ProductGeneralTab = () => {
    return (
        <div>
            {/* Language pill */}
            <div className="mb-4 inline-flex rounded-t border border-b-0 bg-gray-100 px-3 py-2 text-xs">
                English
            </div>

            <div className="space-y-5 border-t pt-4">
                {/* Product Name */}
                <div className="flex gap-6">
                    <div className="w-40 text-right text-sm font-medium">
                        <span className="text-red-500">*</span> Product Name
                    </div>
                    <div className="flex-1">
                        <input
                            className="w-full rounded border px-3 py-2 text-sm"
                            placeholder='Apple Cinema 30"'
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex gap-6">
                    <div className="w-40 text-right text-sm font-medium">Description</div>
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 border border-b-0 bg-gray-100 px-2 py-1 text-xs">
                            <button className="px-1 font-semibold">B</button>
                            <button className="px-1 italic">I</button>
                            <button className="px-1 underline">U</button>
                            <span className="h-4 border-l" />
                            <span className="text-gray-500">Format</span>
                            <span className="text-gray-500">Font</span>
                            <span className="text-gray-500">Size</span>
                        </div>
                        <textarea
                            className="h-40 w-full resize-none rounded-b border px-3 py-2 text-sm"
                            placeholder="Description"
                        />
                    </div>
                </div>

                {/* Meta Tag Title */}
                <div className="flex gap-6">
                    <div className="w-40 text-right text-sm font-medium">
                        <span className="text-red-500">*</span> Meta Tag Title
                    </div>
                    <div className="flex-1">
                        <input
                            className="w-full rounded border px-3 py-2 text-sm"
                            placeholder="Apple Cinema 30"
                        />
                    </div>
                </div>

                {/* Meta Tag Description */}
                <div className="flex gap-6">
                    <div className="w-40 text-right text-sm font-medium">
                        Meta Tag Description
                    </div>
                    <div className="flex-1">
                        <textarea
                            className="h-24 w-full resize-none rounded border px-3 py-2 text-sm"
                            placeholder="Meta Tag Description"
                        />
                    </div>
                </div>

                {/* Meta Tag Keywords */}
                <div className="flex gap-6">
                    <div className="w-40 text-right text-sm font-medium">
                        Meta Tag Keywords
                    </div>
                    <div className="flex-1">
                        <textarea
                            className="h-24 w-full resize-none rounded border px-3 py-2 text-sm"
                            placeholder="Meta Tag Keywords"
                        />
                    </div>
                </div>

                {/* Product Tags */}
                <div className="flex gap-6 pb-4">
                    <div className="w-40 text-right text-sm font-medium">Product Tags</div>
                    <div className="flex-1">
                        <input
                            className="w-full rounded border px-3 py-2 text-sm"
                            placeholder="Product Tags"
                        />
                        <p className="mt-1 text-xs text-gray-500">Comma separated</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductGeneralTab;
