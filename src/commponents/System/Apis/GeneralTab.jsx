import React, { useState } from "react";

export default function GeneralTab() {
    const [apiKey, setApiKey] = useState(
        "52db8d90ac7ece554e970845dddf8cdf92abf144f4f4348766803db2e3a4b96222c0eea3faa677daee41a6350707ab9c1e2cee156b62adda618c5014142bf095d76050454fdb3beb3098a878882a4e988d392d282c0f791b72c084fa9a19ed82f5af22098ba994d1fa3fed99b82dbae5d5f1324c9afa41faa2c9c71634d10f7e"
    );

    const [status, setStatus] = useState(true);

    const generateKey = () => {
        const newKey = crypto.randomUUID().replace(/-/g, "") + crypto.randomUUID().replace(/-/g, "");
        setApiKey(newKey);
    };

    return (
        <div className="p-6 bg-white  rounded-md space-y-4">

            <div>
                <label className="text-sm font-medium text-gray-700">
                    * API Username
                </label>
                <input
                    type="text"
                    defaultValue="Default"
                    className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500"
                />
            </div>

            {/* API Key */}
            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                    * API Key
                </label>
                <textarea
                    rows="5"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    className="w-full border rounded-md px-3 py-2 focus:ring focus:border-blue-500"
                ></textarea>

                <button
                    onClick={generateKey}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
                >
                    🔄 Generate
                </button>
            </div>

            {/* Status Toggle */}
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Status</span>

                <label className="relative inline-block w-12 h-6">
                    <input
                        type="checkbox"
                        checked={status}
                        onChange={() => setStatus(!status)}
                        className="peer sr-only"
                    />
                    <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition"></span>
                    <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
                </label>
            </div>
        </div>
    );
}
