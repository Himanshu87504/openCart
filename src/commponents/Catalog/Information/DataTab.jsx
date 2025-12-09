// DataTab.jsx
import React, { useState } from "react";

const DataTab = () => {
    const [bottom, setBottom] = useState(true);
    const [status, setStatus] = useState(true);

    return (
        <div className=" bg-white p-6 pl-10">


            <div className="mb-8 flex gap-4">
                <label className="block text-sm font-semibold mb-2">Stores</label>

                <div className="border border-gray-300 rounded p-4 w-full">
                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            defaultChecked
                            className="w-4 h-4"
                        />
                        Default
                    </label>
                </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* -------- Bottom Toggle -------- */}
            <div className="mb-6 flex gap-4 items-center">
                <label className="text-sm font-semibold">Bottom</label>

                <div className="mt-2 flex items-center gap-3">
                    <button
                        onClick={() => setBottom(!bottom)}
                        className={`relative w-12 h-6 rounded-full transition ${bottom ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${bottom ? "translate-x-6" : ""
                                }`}
                        ></span>
                    </button>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                    Display in the bottom footer.
                </p>
            </div>

            <hr className="my-6 border-gray-200" />

            <div className="mb-8 flex gap-4 items-center">
                <label className="text-sm font-semibold">Status</label>

                <div className="mt-2 flex items-center gap-3">
                    <button
                        onClick={() => setStatus(!status)}
                        className={`relative w-12 h-6 rounded-full transition ${status ? "bg-blue-500" : "bg-gray-300"
                            }`}
                    >
                        <span
                            className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${status ? "translate-x-6" : ""
                                }`}
                        ></span>
                    </button>
                </div>
            </div>

            <hr className="my-6 border-gray-200" />

            {/* -------- Sort Order -------- */}
            <div className="mb-4 flex gap-4 items-center">
                <label className="block text-sm font-semibold mb-1">
                    Sort Order
                </label>
                <input
                    type="number"
                    defaultValue={3}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                />
            </div>
        </div>
    );
};

export default DataTab;
