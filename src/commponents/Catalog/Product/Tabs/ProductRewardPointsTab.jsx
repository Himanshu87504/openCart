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

                <div className="flex items-start gap-6 px-6 py-4">
                    <div className="w-40 text-right font-medium">Points</div>
                    <div className="flex-1">
                        <input
                            className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                            defaultValue={400}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Number of points needed to buy this item. If you don&apos;t
                            want this product to be purchased with points leave as 0.
                        </p>
                    </div>
                </div>
            </div>

            {/* Reward Points per customer group */}
            <div className="border border-gray-200 bg-white">
                <div className="border-b px-6 py-3 text-lg font-semibold">
                    Reward Points
                </div>

                <div className="grid grid-cols-[2fr,3fr] bg-gray-100 px-6 py-2 font-medium">
                    <div>Customer Group</div>
                    <div>Reward Points</div>
                </div>

                <div className="grid grid-cols-[2fr,3fr] items-center px-6 py-3">
                    <div>Default</div>
                    <div>
                        <input
                            className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                            defaultValue={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductRewardPointsTab;
