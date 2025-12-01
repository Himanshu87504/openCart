// ProductRewardPointsTab.jsx
import React from "react";

const ProductRewardPointsTab = () => {
    return (
        <div className="space-y-8 text-sm">
            {/* Buy Points */}
            <div className="border border-gray-200 bg-white">
                <div className="border-b px-6 py-3 text-lg font-semibold">
                    Buy Points
                </div>

                <div className="px-6 py-4">
                    <table className="border-collapse">
                        <tbody>
                            <tr>
                                <td className="w-40 pb-2 pr-4 text-right align-top font-medium">
                                    Points
                                </td>
                                <td className="pb-2">
                                    <input
                                        className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                                        defaultValue={400}
                                    />
                                    <p className="mt-1 max-w-xl text-xs text-gray-500">
                                        Number of points needed to buy this item. If you don&apos;t
                                        want this product to be purchased with points leave as 0.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Reward Points per customer group */}
            <div className="border border-gray-200 bg-white">
                <div className="border-b px-6 py-3 text-lg font-semibold">
                    Reward Points
                </div>

                <div className="px-6 py-3">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-200 px-3 py-2 text-left w-1/2">
                                    Customer Group
                                </th>
                                <th className="border border-gray-200 px-3 py-2 text-left w-1/2">
                                    Reward Points
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-200 px-3 py-2">Default</td>
                                <td className="border border-gray-200 px-3 py-2">
                                    <input
                                        className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                                        defaultValue={100}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductRewardPointsTab;
