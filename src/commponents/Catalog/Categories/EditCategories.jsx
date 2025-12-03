import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import { RiEnglishInput } from "react-icons/ri";
import { GiUsaFlag } from "react-icons/gi";
import SEOTab from "./SEOTab";
import DesignTab from "./DesignTab";
import GeneralTab from "./GeneralTab";

const EditCategory = () => {
    const [activeTab, setActiveTab] = useState("general");

    const [form, setForm] = useState({
        name: "Cameras",
        description: "",
        metaTitle: "Cameras",
        metaDescription: "",
        metaKeywords: "",
        parent: "Parent",
        filters: "",
        stores: ["Default"],
        top: true,
        columns: 1,
        sortOrder: 6,
        status: true,
    });

    const handleChange = (field, value) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="w-full bg-[#F6F6F6] p-4">
            <Breadcrumb
                title="Category"
                paths={[
                    { name: "Home" },
                    { name: "Categories", color: "text-blue-400" },
                ]}
            />

            <div className="mx-auto mt-2 max-w-7xl rounded bg-white shadow">



                {/* -------------------- TABS -------------------- */}
                <div className="px-6 pt-4">
                    <div className="flex gap-4 text-sm">
                        {["general", "data", "seo", "design"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-1 p-2 pt-1 rounded capitalize ${activeTab === tab
                                    ? "border border-b-0 border-gray-300"
                                    : "text-gray-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>



                {/* ===================================================================================== */}
                {/* -------------------- GENERAL TAB -------------------- */}
                {/* ===================================================================================== */}
                {activeTab === "general" && (
                    <GeneralTab />
                )}


                {/* ===================================================================================== */}
                {/* -------------------- DATA TAB -------------------- */}
                {/* ===================================================================================== */}
                {activeTab === "data" && (
                    <div className="px-6 py-5 text-sm">
                        <div className="space-y-5">

                            {/* Parent */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-b border-gray-200 pb-2">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Parent
                                </div>
                                <div className="flex-1">
                                    <input
                                        className="w-full rounded border border-gray-300 px-3 py-2 text-sm"
                                        value={form.parent}
                                        onChange={(e) => handleChange("parent", e.target.value)}
                                    />
                                    <p className="mt-1 text-xs text-gray-500">(Autocomplete)</p>
                                </div>
                            </div>

                            {/* Filters */}
                            <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-b border-gray-200 pb-2 mt-1">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Filters
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="border p-0.5 border-gray-300">Filter</div>

                                    <textarea
                                        className="h-32 w-full resize-none rounded border px-3 py-2 text-sm border-gray-300"
                                        value={form.filters}
                                        onChange={(e) =>
                                            handleChange("filters", e.target.value)
                                        }
                                        placeholder="Filters"
                                    />

                                    <p className="mt-1 text-xs text-gray-500">(Autocomplete)</p>
                                </div>
                            </div>

                            {/* Stores */}
                            <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-b border-gray-200 pb-2">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Stores
                                </div>

                                <div className="flex-1 border border-gray-300 px-3 py-3 w-full">
                                    <label className="inline-flex items-center gap-2 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={form.stores.includes("Default")}
                                            onChange={() =>
                                                handleChange(
                                                    "stores",
                                                    form.stores.includes("Default") ? [] : ["Default"]
                                                )
                                            }
                                        />
                                        <span>Default</span>
                                    </label>

                                    <textarea className="w-full h-30 mt-3 rounded px-2 py-1 text-sm"></textarea>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-b border-gray-200 pb-2">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Image
                                </div>

                                <div className="flex-1">
                                    <div className="flex flex-col gap-4 w-40 border border-gray-200">
                                        <div className="flex h-32 w-40 items-center justify-center rounded text-xs text-gray-500">
                                            Image
                                        </div>

                                        <div className="space-y-1.5 pl-2">
                                            <button className="rounded bg-blue-500 px-3 py-1 text-xs text-white">
                                                Edit
                                            </button>
                                            <button className="rounded bg-orange-500 px-3 py-1 text-xs text-white">
                                                Clear
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Top Toggle */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-b border-gray-200 pb-2">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Top
                                </div>

                                <div className="flex-1">
                                    <button
                                        type="button"
                                        onClick={() => handleChange("top", !form.top)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${form.top ? "bg-blue-500" : "bg-gray-300"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${form.top ? "translate-x-5" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                    <p className="mt-1 text-xs text-gray-500">
                                        Display in the top menu bar.
                                    </p>
                                </div>
                            </div>

                            {/* Columns */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-b border-gray-200 pb-2">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Columns
                                </div>

                                <div className="flex-1">
                                    <input
                                        type="number"
                                        className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                                        value={form.columns}
                                        onChange={(e) =>
                                            handleChange("columns", Number(e.target.value))
                                        }
                                    />
                                    <p className="mt-1 text-xs text-gray-500">
                                        Number of columns used under this category.
                                    </p>
                                </div>
                            </div>

                            {/* Sort Order */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-b border-gray-200 pb-2">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Sort Order
                                </div>

                                <div className="flex-1">
                                    <input
                                        type="number"
                                        className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                                        value={form.sortOrder}
                                        onChange={(e) =>
                                            handleChange("sortOrder", Number(e.target.value))
                                        }
                                    />
                                </div>
                            </div>

                            {/* Status */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 pb-2 border-b border-gray-200">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Status
                                </div>

                                <div className="flex-1">
                                    <button
                                        type="button"
                                        onClick={() => handleChange("status", !form.status)}
                                        className={`relative inline-flex h-6 w-11 items-center rounded-full ${form.status ? "bg-blue-500" : "bg-gray-300"
                                            }`}
                                    >
                                        <span
                                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${form.status ? "translate-x-5" : "translate-x-1"
                                                }`}
                                        />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* ===================================================================================== */}
                {/* -------------------- SEO TAB -------------------- */}
                {/* ===================================================================================== */}
                {activeTab === "seo" && (
                    <SEOTab />
                )}


                {/* ===================================================================================== */}
                {/* -------------------- DESIGN TAB -------------------- */}
                {/* ===================================================================================== */}
                {activeTab === "design" && (
                    <DesignTab />
                )}


            </div>
        </div>
    );
};

export default EditCategory;
