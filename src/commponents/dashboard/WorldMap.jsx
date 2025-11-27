// src/commponents/WorldMap.jsx
import React, { useState } from "react";
import { WorldMap } from "react-svg-worldmap";

export default function WorldMapComponent() {
    const [zoom, setZoom] = useState(1);

    const zoomIn = () => setZoom((z) => Math.min(z + 0.1, 3));
    const zoomOut = () => setZoom((z) => Math.max(z - 0.1, 1));

    return (
        <div className="bg-white border border-gray-300 shadow-md relative overflow-hidden w-md h-80 md:w-xl ">
            <h2 className="text-sm font-semibold mb-4 flex items-center gap-2 bg-[#F8F8F8] border border-gray-300 p-3">
                🌍 World Map
            </h2>

            {/* Zoom Buttons */}
            <div className="absolute left-6 top-20 flex flex-col gap-2 z-20">
                <button
                    onClick={zoomIn}
                    className="bg-white border rounded-md shadow px-3 py-1 hover:bg-gray-100"
                >
                    ➕
                </button>
                <button
                    onClick={zoomOut}
                    className="bg-blue-100 border rounded-md shadow px-3 py-1 hover:bg-gray-100"
                >
                    ➖
                </button>
            </div>

            <div className="w-full flex justify-center items-center mt-5 text-blue-300">
                <div
                    style={{
                        transform: `scale(${zoom})`,
                        transition: "transform 0.3s",
                        transformOrigin: "center",
                    }}
                >
                    <WorldMap
                        color="rgb(0 0 255)" // sky-300
                        // color=""
                        size="md"
                        data={[]}
                    />
                </div>
            </div>
        </div>
    );
}
