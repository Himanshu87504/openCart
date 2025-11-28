// ProductOptionsTab.jsx
import React from "react";

const OptionHeader = ({ title }) => (
    <div className="border-b border-gray-200 bg-white px-6 py-4">
        <h2 className="text-xl font-semibold">{title}</h2>
    </div>
);

const RequiredRow = () => (
    <div className="flex items-center gap-6 border-b border-gray-100 px-6 py-3 text-sm">
        <div className="w-40 text-right font-medium">Required</div>
        <div>
            <select className="w-40 rounded border border-gray-300 px-3 py-2 text-sm">
                <option>Enabled</option>
                <option>Disabled</option>
            </select>
        </div>
    </div>
);

const OptionValueTable = ({ rows }) => (
    <div className="border border-gray-200 border-t-0 bg-white text-sm">
        {/* header */}
        <div className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr,1fr,auto] bg-gray-100 px-4 py-2 font-medium">
            <div>Option Value</div>
            <div>Quantity</div>
            <div>Subtract Stock</div>
            <div>Price</div>
            <div>Points</div>
            <div>Weight</div>
            <div />
        </div>

        {/* rows */}
        {rows.map((r) => (
            <div
                key={r.id}
                className="grid grid-cols-[2fr,1fr,1fr,1fr,1fr,1fr,auto] items-center border-t px-4 py-2"
            >
                <div>{r.label}</div>
                <div>{r.quantity}</div>
                <div>{r.subtract}</div>
                <div>{r.price}</div>
                <div>{r.points}</div>
                <div>{r.weight}</div>
                <div className="flex justify-end gap-1">
                    <button className="h-8 w-8 rounded bg-blue-500 text-xs text-white">
                        ✎
                    </button>
                    <button className="h-8 w-8 rounded bg-red-500 text-xs text-white">
                        ×
                    </button>
                </div>
            </div>
        ))}
    </div>
);

const ProductOptionsTab = () => {
    const radioRows = [
        { id: 1, label: "Small", quantity: 0, subtract: "Yes", price: "+10.0000", points: "+1", weight: "+10" },
        { id: 2, label: "Medium", quantity: 0, subtract: "Yes", price: "+20.0000", points: "+2", weight: "+20" },
        { id: 3, label: "Large", quantity: -1, subtract: "Yes", price: "+30.0000", points: "+3", weight: "+30" },
    ];

    const checkboxRows = [
        { id: 1, label: "Checkbox 1", quantity: 0, subtract: "Yes", price: "+10.0000", points: "+0", weight: "+10" },
        { id: 2, label: "Checkbox 2", quantity: 0, subtract: "Yes", price: "+20.0000", points: "+0", weight: "+20" },
        { id: 3, label: "Checkbox 3", quantity: 2394, subtract: "Yes", price: "+30.0000", points: "+0", weight: "+30" },
        { id: 4, label: "Checkbox 4", quantity: 3914, subtract: "Yes", price: "+40.0000", points: "+0", weight: "+40" },
    ];

    return (
        <div className="bg-[#F6F6F6]">
            {/* RADIO */}
            <div className="mb-8 bg-white">
                <OptionHeader title="Radio" />
                <RequiredRow />
                <OptionValueTable rows={radioRows} />
            </div>

            {/* CHECKBOX */}
            <div className="mb-8 bg-white">
                <OptionHeader title="Checkbox" />
                <RequiredRow />
                <OptionValueTable rows={checkboxRows} />
            </div>

            {/* TEXT option (simple field) */}
            <div className="mb-8 bg-white">
                <OptionHeader title="Text" />
                <RequiredRow />
                <div className="flex items-start gap-6 border-t border-gray-100 px-6 py-3 text-sm">
                    <div className="w-40 text-right font-medium">Option Value</div>
                    <div className="flex-1">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="test"
                        />
                    </div>
                </div>
            </div>

            {/* TEXTAREA */}
            <div className="mb-8 bg-white">
                <OptionHeader title="Textarea" />
                <RequiredRow />
                <div className="flex items-start gap-6 border-t border-gray-100 px-6 py-3 text-sm">
                    <div className="w-40 text-right font-medium">Option Value</div>
                    <div className="flex-1">
                        <textarea
                            className="h-24 w-full resize-none rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Option Value"
                        />
                    </div>
                </div>
            </div>

            {/* FILE / DATE / TIME / DATE & TIME sections ko bhi isi pattern pe bana sakte ho:
          heading -> Required row -> Option Value row with input type="date" / time picker etc. */}
        </div>
    );
};

export default ProductOptionsTab;



// import ProductOptionsTab from "./ProductOptionsTab";

// ...
// { activeTab === "Option" && <ProductOptionsTab /> }
