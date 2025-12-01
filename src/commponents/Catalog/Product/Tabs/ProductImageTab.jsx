// ProductImageTab.jsx
import React, { useState } from "react";

const ImagePreview = ({ src, alt = "Image" }) => (
    <div className="flex h-45 w-40 items-center justify-center overflow-hidden border bg-gray-50">
        <img src={src} alt={alt} className="h-full w-full object-contain" />
    </div>
);

const ProductImageTab = () => {
    const [rows, setRows] = useState([
        { id: 1, src: "/img/camera-1.png", sortOrder: 0 },
        { id: 2, src: "/img/camera-2.png", sortOrder: 0 },
        { id: 3, src: "/img/logo-canon.png", sortOrder: 0 }
    ]);

    const updateRow = (id, value) => {
        setRows(prev =>
            prev.map(r => (r.id === id ? { ...r, sortOrder: value } : r))
        );
    };

    const removeRow = id => {
        setRows(prev => prev.filter(r => r.id !== id));
    };

    const addRow = () => {
        setRows(prev => [
            ...prev,
            { id: Date.now(), src: "/img/placeholder.png", sortOrder: 0 }
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

            {/* Additional images as table */}
            <div>
                <h2 className="mb-4 text-xl font-semibold">Additional Images</h2>

                <div className="border border-gray-200 bg-white text-sm">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-200 px-4 py-2 text-left w-1/2">
                                    Image
                                </th>
                                <th className="border border-gray-200 px-4 py-2 text-left w-1/4">
                                    Sort Order
                                </th>
                                <th className="border border-gray-200 px-4 py-2 w-16" />
                            </tr>
                        </thead>

                        <tbody>
                            {rows.map(r => (
                                <tr key={r.id}>
                                    {/* image + buttons */}
                                    <td className="border border-gray-200 px-4 py-3 align-top">
                                        <div className="flex flex-col  gap-2">
                                            <ImagePreview src={r.src} />
                                            <div className="flex  gap-2">
                                                <button className="rounded bg-blue-500 px-3 py-1 text-xs text-white">
                                                    Edit
                                                </button>
                                                <button className="rounded bg-orange-500 px-3 py-1 text-xs text-white">
                                                    Clear
                                                </button>
                                            </div>
                                        </div>
                                    </td>

                                    {/* sort order */}
                                    <td className="border border-gray-200 px-4 py-3 align-top">
                                        <input
                                            type="number"
                                            className="w-24 rounded border border-gray-300 px-3 py-2 text-sm"
                                            value={r.sortOrder}
                                            onChange={e => updateRow(r.id, Number(e.target.value))}
                                        />
                                    </td>

                                    {/* delete */}
                                    <td className="border border-gray-200 px-4 py-3 align-top">
                                        <button
                                            type="button"
                                            onClick={() => removeRow(r.id)}
                                            className="h-8 w-8 rounded bg-red-500 text-lg text-white"
                                        >
                                            -
                                        </button>
                                    </td>
                                </tr>
                            ))}

                            {/* add button row */}
                            <tr>
                                <td
                                    className="border border-gray-200 px-4 py-3 text-left flex justify-end"
                                    colSpan={3}
                                >
                                    <button
                                        type="button"
                                        onClick={addRow}
                                        className="h-8 w-8 rounded bg-blue-500 text-lg text-white"
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductImageTab;
