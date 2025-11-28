// SalesAnalytics.jsx
import React from "react";

const days = Array.from({ length: 30 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
);

// Example data (0 = no bar)
const data = {
    Orders: [35, 42, 60, 58, 55, 0, 56, 31, 0, 46, 45, 0, 0, 50, 45, 40, 60, 0, 0, 0, 0, 0, 0, 12, 36, 10, 0, 0, 0, 0],
    Customers: [40, 45, 57, 56, 37, 0, 52, 0, 0, 47, 44, 0, 0, 50, 43, 0, 58, 7, 0, 0, 0, 0, 0, 12, 35, 10, 0, 0, 0, 0]
};

const maxY = 70;

const SalesAnalytics = () => {
    return (
        <div className="w-full max-w-full md:max-w-3xl lg:max-w-4xl border border-gray-200 bg-white shadow-sm mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 bg-[#F8F8F8]">
                <div className="flex items-center space-x-2">
                    <span className="h-4 w-4 border border-gray-600 border-t-0 border-r-0 rotate-45" />
                    <div className="w-full">
                        <span className="text-sm font-semibold text-gray-700">
                            Sales Analytics
                        </span>
                    </div>
                </div>
                <button className="h-7 w-7 rounded border border-gray-300 text-xs text-gray-500">
                    📅
                </button>
            </div>

            {/* Chart area */}
            <div className="px-2 py-3 overflow-x-auto">
                <div className="relative h-64 w-full min-w-[700px] md:min-w-full border border-gray-400">
                    {/* Horizontal grid lines */}
                    <div className="absolute inset-0">
                        {Array.from({ length: 7 }).map((_, i) => (
                            <div
                                key={i}
                                className="absolute left-0 right-0 border-t border-gray-200"
                                style={{ top: `${(i * 100) / 7}%` }}
                            />
                        ))}
                    </div>

                    {/* Bars */}
                    <div className="absolute inset-2 flex items-end space-x-1">
                        {days.map((d, idx) => {
                            const o = data.Orders[idx] || 0;
                            const c = data.Customers[idx] || 0;
                            const oHeight = (o / maxY) * 100;
                            const cHeight = (c / maxY) * 100;

                            return (
                                <div key={d} className="flex h-full flex-col justify-end">
                                    <div className="flex items-end space-x-0.5">
                                        {o > 0 && (
                                            <div
                                                className="w-1.5 md:w-2 bg-sky-200 border border-sky-300"
                                                style={{ height: `${oHeight}%` }}
                                            />
                                        )}
                                        {c > 0 && (
                                            <div
                                                className="w-1.5 md:w-2 bg-sky-500 border border-sky-600 opacity-70"
                                                style={{ height: `${cHeight}%` }}
                                            />
                                        )}
                                    </div>
                                    <div className="mt-1 text-[8px] md:text-[10px] text-gray-500 text-center">
                                        {d}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Y-axis labels */}
                    <div className="absolute left-0 top-0 h-full w-6 md:w-8 flex flex-col justify-between text-[8px] md:text-[10px] text-gray-500 pl-1">
                        {[70, 60, 50, 40, 30, 20, 10, 0].map((v) => (
                            <span key={v}>{v}</span>
                        ))}
                    </div>

                    {/* Legend */}
                    <div className="absolute right-2 top-2 flex items-center space-x-4 text-[8px] md:text-xs text-gray-600">
                        <div className="flex items-center space-x-1">
                            <span className="h-3 w-4 bg-sky-200 border border-sky-300" />
                            <span>Orders</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="h-3 w-4 bg-sky-500 border border-sky-600 opacity-70" />
                            <span>Customers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesAnalytics;
