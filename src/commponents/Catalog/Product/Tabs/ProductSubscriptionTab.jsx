// ProductSubscriptionTab.jsx
import React from "react";

const ProductSubscriptionTab = () => {
    const rows = [
        {
            id: 1,
            plan: "",
            customerGroup: "",
            trialPrice: "",
            price: "",
        },
    ];

    return (
        <div className="border border-gray-200 bg-white text-sm">
            {/* header row */}
            <div className="grid grid-cols-[2fr,2fr,1fr,1fr,auto] bg-gray-100 px-4 py-2 font-medium">
                <div>Subscription Plan</div>
                <div>Customer Group</div>
                <div>Trial Price</div>
                <div>Price</div>
                <div />
            </div>

            {/* data rows */}
            {rows.map((row) => (
                <div
                    key={row.id}
                    className="grid grid-cols-[2fr,2fr,1fr,1fr,auto] items-center border-t px-4 py-3"
                >
                    <div className="pr-2">
                        <select className="w-full rounded border border-gray-300 px-3 py-2 text-sm">
                            <option value=""> </option>
                            <option value="plan1">Plan 1</option>
                            <option value="plan2">Plan 2</option>
                        </select>
                    </div>

                    <div className="pr-2">
                        <select className="w-full rounded border border-gray-300 px-3 py-2 text-sm">
                            <option value=""> </option>
                            <option value="default">Default</option>
                            <option value="wholesale">Wholesale</option>
                        </select>
                    </div>

                    <div className="pr-2">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Trial Price"
                        />
                    </div>

                    <div className="pr-2">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Price"
                        />
                    </div>

                    <div className="flex justify-end">
                        <button className="h-8 w-8 rounded bg-blue-500 text-lg text-white">
                            +
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductSubscriptionTab;
