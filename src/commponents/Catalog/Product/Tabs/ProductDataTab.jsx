// ProductDataTab.jsx
import React from "react";

const LabeledRow = ({ label, children, helper }) => (
    <div className="flex items-start gap-6 border-b border-gray-100 py-3">
        <div className="w-40 text-right text-sm font-medium">{label}</div>
        <div className="flex-1">
            {children}
            {helper && (
                <p className="mt-1 text-xs text-gray-500">
                    {helper}
                </p>
            )}
        </div>
    </div>
);

const Toggle = ({ checked }) => (
    <button
        type="button"
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${checked ? "bg-blue-500" : "bg-gray-300"
            }`}
    >
        <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${checked ? "translate-x-5" : "translate-x-1"
                }`}
        />
    </button>
);

const ProductDataTab = () => {
    return (
        <div className="">
            {/* Model block */}
            <div className="bg-white">
                <h2 className="mb-4 text-xl font-semibold pl-3">Model</h2>
                <div className="border border-gray-200 bg-white text-sm">
                    <LabeledRow label={<span><span className="text-red-500">*</span> Model</span>}>
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="Product 15"
                        />
                    </LabeledRow>

                    <LabeledRow label="SKU" helper="Stock Keeping Unit">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="SKU"
                        />
                    </LabeledRow>

                    <LabeledRow label="UPC" helper="Universal Product Code">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="UPC"
                        />
                    </LabeledRow>

                    <LabeledRow label="EAN" helper="European Article Number">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="EAN"
                        />
                    </LabeledRow>

                    <LabeledRow label="JAN" helper="Japanese Article Number">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="JAN"
                        />
                    </LabeledRow>

                    <LabeledRow label="ISBN" helper="International Standard Book Number">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="ISBN"
                        />
                    </LabeledRow>

                    <LabeledRow label="MPN" helper="Manufacturer Part Number">
                        <input
                            className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                            placeholder="MPN"
                        />
                    </LabeledRow>
                </div>
            </div>

            {/* Stock block */}
            <div className="bg-white">
                <h2 className="mb-4 text-xl font-semibold pl-3">Stock</h2>
                <div className="border border-gray-200 bg-white text-sm">
                    <LabeledRow label="Quantity">
                        <input
                            type="number"
                            className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                            defaultValue={447}
                        />
                    </LabeledRow>

                    <LabeledRow
                        label="Minimum Quantity"
                        helper="Force a minimum ordered amount"
                    >
                        <input
                            type="number"
                            className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                            defaultValue={2}
                        />
                    </LabeledRow>

                    <LabeledRow label="Subtract Stock">
                        <Toggle checked />
                    </LabeledRow>

                    <LabeledRow
                        label="Out Of Stock Status"
                        helper="Status shown when a product is out of stock"
                    >
                        <select className="w-60 rounded border border-gray-300 px-3 py-2 text-sm">
                            <option>Out Of Stock</option>
                            <option>In Stock</option>
                            <option>Pre-Order</option>
                        </select>
                    </LabeledRow>

                    <LabeledRow label="Date Available">
                        <div className="flex w-60 items-center">
                            <input
                                type="date"
                                className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                defaultValue="2009-02-04"
                            />
                        </div>
                    </LabeledRow>
                </div>
            </div>

            {/* Specification block */}
            <div className="bg-white">
                <h2 className="mb-4 text-xl font-semibold pl-3">Specification</h2>
                <div className="border border-gray-200 bg-white text-sm">
                    <LabeledRow label="Requires Shipping">
                        <Toggle checked />
                    </LabeledRow>

                    <LabeledRow label="Dimensions (L x W x H)">
                        <div className="flex gap-2">
                            <input
                                type="number"
                                className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                                defaultValue={1}
                            />
                            <input
                                type="number"
                                className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                                defaultValue={2}
                            />
                            <input
                                type="number"
                                className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                                defaultValue={3}
                            />
                        </div>
                    </LabeledRow>

                    <LabeledRow label="Length Class">
                        <select className="w-60 rounded border border-gray-300 px-3 py-2 text-sm">
                            <option>Centimeter</option>
                            <option>Millimeter</option>
                            <option>Inch</option>
                        </select>
                    </LabeledRow>

                    <LabeledRow label="Weight">
                        <input
                            type="number"
                            className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                            defaultValue={12.5}
                        />
                    </LabeledRow>

                    <LabeledRow label="Weight Class">
                        <select className="w-60 rounded border border-gray-300 px-3 py-2 text-sm">
                            <option>Kilogram</option>
                            <option>Gram</option>
                            <option>Pound</option>
                        </select>
                    </LabeledRow>

                    <LabeledRow label="Status">
                        <Toggle checked />
                    </LabeledRow>

                    <LabeledRow label="Sort Order">
                        <input
                            type="number"
                            className="w-40 rounded border border-gray-300 px-3 py-2 text-sm"
                            defaultValue={0}
                        />
                    </LabeledRow>
                </div>
            </div>
        </div>
    );
};

export default ProductDataTab;
