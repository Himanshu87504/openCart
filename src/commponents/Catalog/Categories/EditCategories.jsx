import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";
import { RiEnglishInput } from "react-icons/ri";
import { GiUsaFlag } from "react-icons/gi";

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
                <div className="border-b px-6 pt-4">
                    <div className="flex gap-4 text-sm">
                        {["general", "data", "seo", "design"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-2 capitalize ${activeTab === tab
                                    ? "border-b-2 border-blue-500 text-blue-600"
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
                    <div className="px-1 py-5 text-sm">

                        {/* Language Header */}
                        <div className="inline-flex items-center gap-2 rounded-t border border-gray-200 border-b-white px-3 py-2 text-xs">
                            <div className="text-red-400">
                                <RiEnglishInput />
                            </div>
                            <div>English</div>
                        </div>

                        {/* Line Under Language */}
                        <div className="relative left-21 w-10/12 border border-gray-200"></div>

                        <div className="space-y-3">

                            {/* Category Name */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 pt-5 border-b border-gray-200 pb-3">
                                <div className="w-full md:w-44 md:pl-10 text-sm font-medium">
                                    <span className="text-red-500">*</span> Category Name
                                </div>

                                <div className="flex-1 w-full">
                                    <input
                                        className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                                        value={form.name}
                                        onChange={(e) => handleChange("name", e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-b border-gray-200 pb-3">
                                <div className="w-full md:w-44 md:pl-12 text-sm font-medium">
                                    Description
                                </div>

                                <div className="flex-1 w-full">

                                    {/* Toolbar */}
                                    <div className="flex flex-wrap items-center gap-2 border border-gray-200 border-b-0 bg-gray-100 px-2 py-1 text-xs">
                                        <button className="px-1 font-semibold">B</button>
                                        <button className="px-1 italic">I</button>
                                        <button className="px-1 underline">U</button>
                                        <span className="h-4 border-l border-gray-200" />
                                        <span className="text-gray-500">Format</span>
                                        <span className="text-gray-500">Font</span>
                                        <span className="text-gray-500">Size</span>
                                    </div>

                                    <textarea
                                        className="h-40 w-full resize-none rounded-b border border-gray-200 px-3 py-2 text-sm"
                                        value={form.description}
                                        onChange={(e) => handleChange("description", e.target.value)}
                                        placeholder="Description"
                                    />
                                </div>
                            </div>

                            {/* Meta Tag Title */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-b border-gray-200 pb-3">
                                <div className="w-full md:w-44 md:pl-10 text-sm font-medium">
                                    <span className="text-red-500">*</span> Meta Tag Title
                                </div>
                                <div className="flex-1 w-full">
                                    <input
                                        className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                                        value={form.metaTitle}
                                        onChange={(e) => handleChange("metaTitle", e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Meta Tag Description */}
                            <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-b border-gray-200 pb-3">
                                <div className="w-full md:w-44 md:pl-10 text-sm font-medium">
                                    Meta Tag Description
                                </div>
                                <div className="flex-1 w-full">
                                    <textarea
                                        className="h-24 w-full resize-none rounded border border-gray-200 px-3 py-2 text-sm"
                                        value={form.metaDescription}
                                        onChange={(e) => handleChange("metaDescription", e.target.value)}
                                        placeholder="Meta Tag Description"
                                    />
                                </div>
                            </div>

                            {/* Meta Tag Keywords */}
                            <div className="flex flex-col md:flex-row gap-3 md:gap-6 pb-4 border-b border-gray-200">
                                <div className="w-full md:w-44 md:text-right text-sm font-medium">
                                    Meta Tag Keywords
                                </div>

                                <div className="flex-1 w-full">
                                    <textarea
                                        className="h-24 w-full resize-none rounded border border-gray-200 px-3 py-2 text-sm"
                                        value={form.metaKeywords}
                                        onChange={(e) => handleChange("metaKeywords", e.target.value)}
                                        placeholder="Meta Tag Keywords"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
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
                    <div className="px-6 py-5 text-sm text-gray-500">

                        {/* Info */}
                        <div className="mb-4 rounded border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-gray-700">
                            <span className="mr-2 inline-block align-middle text-base">ℹ️</span>
                            Do not use spaces, replace them with "-" and ensure it is unique.
                        </div>

                        {/* Table */}
                        <div className="border border-gray-300 text-sm">

                            {/* Header */}
                            <div className="flex font-medium h-8">
                                <div className="border border-gray-300 w-60 pt-1 pl-1 font-semibold">
                                    Stores
                                </div>
                                <div className="border border-gray-300 flex-1 pt-1 pl-1 font-semibold">
                                    Keyword
                                </div>
                            </div>

                            {/* Row */}
                            <div className="flex items-center font-medium h-12 hover:bg-[#ECECEC]">

                                {/* Store Column */}
                                <div className="text-sm w-60 pl-1 border-r border-gray-300">
                                    Default
                                </div>

                                {/* Input Column */}
                                <div className="flex-1 border border-[#F8F9FA] h-12">
                                    <div className="flex items-center h-full pl-1">

                                        <div className="flex h-8 w-10 items-center justify-center border border-r-0 bg-gray-100">
                                            <GiUsaFlag className="text-2xl text-red-500" />
                                        </div>

                                        <input
                                            className="h-8 w-full rounded-r border border-gray-300 px-3 text-sm bg-white"
                                            placeholder="cameras"
                                            defaultValue="cameras"
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )}


                {/* ===================================================================================== */}
                {/* -------------------- DESIGN TAB -------------------- */}
                {/* ===================================================================================== */}
                {activeTab === "design" && (
                    <div className="px-6 py-5 text-sm text-gray-500">

                        <div className="border border-gray-300 text-sm">

                            {/* Header */}
                            <div className="flex font-medium h-8 bg-[#F8F9FA]">
                                <div className="w-60 flex items-center pl-2 border-r border-gray-300">
                                    Stores
                                </div>
                                <div className="flex-1 flex items-center pl-2">
                                    Layout Override
                                </div>
                            </div>

                            {/* Row */}
                            <div className="flex h-12 border-t border-gray-300 hover:bg-[#ECECEC]">

                                {/* Store Column */}
                                <div className="w-60 flex items-center pl-2 border-r border-gray-300">
                                    Default
                                </div>

                                {/* Select Box */}
                                <div className="flex-1 flex items-center">
                                    <div className="w-full px-2">
                                        <div className="flex border border-gray-300 rounded overflow-hidden">

                                            <div className="relative w-full bg-white">
                                                <select className="block h-9 w-full appearance-none px-3 pr-8 text-sm leading-5 border-0 focus:outline-none">
                                                    <option value=""></option>
                                                    <option value="cameras">Cameras</option>
                                                </select>

                                                <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500 text-xs">
                                                    ▼
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                )}


            </div>
        </div>
    );
};

export default EditCategory;
