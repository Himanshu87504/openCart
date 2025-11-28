// ProductImageTab.jsx
import React, { useState } from "react";

const ImagePreview = ({ src, alt = "Image" }) => (
    <div className="flex h-40 w-40 items-center justify-center overflow-hidden border bg-gray-50">
        <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
);

const ProductImageTab = () => {
    // dummy additional images
    const [rows, setRows] = useState([
        { id: 1, src: "/img/camera-1.png", sortOrder: 0 },
        { id: 2, src: "/img/camera-2.png", sortOrder: 0 },
        { id: 3, src: "/img/logo-canon.png", sortOrder: 0 },
    ]);

    const updateRow = (id, value) => {
        setRows((prev) =>
            prev.map((r) => (r.id === id ? { ...r, sortOrder: value } : r))
        );
    };

    const removeRow = (id) => {
        setRows((prev) => prev.filter((r) => r.id !== id));
    };

    const addRow = () => {
        setRows((prev) => [
            ...prev,
            { id: Date.now(), src: "/img/placeholder.png", sortOrder: 0 },
        ]);
    };

    return (
        <div className="space-y-8 text-sm">
            {/* Main image */}
            <div>
                <h2 className="mb-4 text-xl font-semibold">Image</h2>
                <div className="border border-gray-200 bg-white p-4">
                    <ImagePreview src="/img/main-product.png" />
                    <div className="mt-3 flex gap-2">
                        <button className="rounded bg-blue-500 px-3 py-1 text-xs text-white">
                            Edit
                        </button>
                        <button className="rounded bg-orange-500 px-3 py-1 text-xs text-white">
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            {/* Additional images */}
            <div>
                <h2 className="mb-4 text-xl font-semibold">Additional Images</h2>

                <div className="border border-gray-200 bg-white text-sm">
                    {/* header */}
                    <div className="grid grid-cols-[2fr,1fr,auto] bg-gray-100 px-4 py-2 font-medium">
                        <div>Image</div>
                        <div>Sort Order</div>
                        <div />
                    </div>

                    {/* rows */}
                    {rows.map((r) => (
                        <div
                            key={r.id}
                            className="grid grid-cols-[2fr,1fr,auto] items-center border-t px-4 py-3"
                        >
                            {/* image + buttons */}
                            <div className="flex items-center gap-4">
                                <ImagePreview src={r.src} />
                                <div className="flex flex-col gap-2">
                                    <button className="rounded bg-blue-500 px-3 py-1 text-xs text-white">
                                        Edit
                                    </button>
                                    <button className="rounded bg-orange-500 px-3 py-1 text-xs text-white">
                                        Clear
                                    </button>
                                </div>
                            </div>

                            {/* sort order */}
                            <div className="px-4">
                                <input
                                    type="number"
                                    className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                    value={r.sortOrder}
                                    onChange={(e) =>
                                        updateRow(r.id, Number(e.target.value))
                                    }
                                />
                            </div>

                            {/* delete button */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={() => removeRow(r.id)}
                                    className="h-8 w-8 rounded bg-red-500 text-lg text-white"
                                >
                                    ×
                                </button>
                            </div>
                        </div>
                    ))}

                    {/* add button */}
                    <div className="border-t px-4 py-3">
                        <button
                            type="button"
                            onClick={addRow}
                            className="h-8 w-8 rounded bg-blue-500 text-lg text-white"
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductImageTab;
