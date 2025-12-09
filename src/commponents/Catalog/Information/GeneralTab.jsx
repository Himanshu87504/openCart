import React, { useState } from "react";

export default function GeneralTab() {
    const [form, setForm] = useState({
        informationTitle: "About Us",
        description: "About Us",
        metaTitle: "About Us",
        metaDescription: "",
        metaKeywords: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <div className="w-full bg-white  border-gray-300  p-6">
            {/* English Label */}
            <div className="flex items-center">
                <div className="inline-flex items-center gap-2 border border-gray-300 border-b-0  px-4 py-2 rounded-t text-sm font-medium mb-6">
                    <img
                        // src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                        alt="flag"
                        className="w-5 h-4 border"
                    />
                    English
                </div>
                <div className="text-3xl border w-full border-gray-200  mt-3">

                </div>
            </div>
            {/* Information Title */}
            <div className="mb-8 flex">
                <label className="block text-sm font-medium mb-2">
                    <span className="text-red-500">*</span> Information Title
                </label>
                <input
                    name="informationTitle"
                    value={form.informationTitle}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                />
            </div>


            <div className="mb-10 flex gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2">
                        <span className="text-red-500">*</span> Description
                    </label>
                </div>

                <div>
                    <div className="border border-gray-300 rounded bg-white">
                        {/* Toolbar */}
                        <div className="border-b border-gray-300 px-3 py-2 bg-gray-50 flex flex-wrap items-center gap-3 text-gray-700 text-sm">

                            {/* Source Button */}
                            <button className="px-2 py-1 text-xs bg-white border border-gray-300 rounded">
                                Source
                            </button>

                            {/* Toolbar Icon Groups */}
                            <div className="flex items-center gap-3 text-base">
                                <b className="cursor-pointer">B</b>
                                <i className="cursor-pointer">I</i>
                                <u className="cursor-pointer">U</u>
                                <span className="cursor-pointer">S</span>
                                <span className="cursor-pointer">✖</span>
                                <span className="cursor-pointer">≡</span>
                                <span className="cursor-pointer">↔</span>
                                <span className="cursor-pointer">📎</span>
                                <span className="cursor-pointer">🖼️</span>
                                <span className="cursor-pointer">📄</span>
                            </div>

                            {/* Format Dropdowns */}
                            <select className="border border-gray-300 px-2 py-1 text-xs bg-white rounded">
                                <option>Format</option>
                            </select>
                            <select className="border border-gray-300 px-2 py-1 text-xs bg-white rounded">
                                <option>Font</option>
                            </select>
                            <select className="border border-gray-300 px-2 py-1 text-xs bg-white rounded">
                                <option>Size</option>
                            </select>

                        </div>

                        {/* Textarea */}
                        <textarea
                            name="description"
                            rows="7"
                            value={form.description}
                            onChange={handleChange}
                            className="w-full px-3 py-2 text-sm min-h-[200px] outline-none"
                        />
                    </div>

                    {/* Red Warning Box */}
                    <div className="mt-3 bg-red-600 text-white text-xs px-4 py-2 w-fit rounded shadow">
                        This CKEditor 4.22.1 version is not secure.
                        Consider upgrading to the latest one, 4.25.1-lts.
                    </div>
                </div>
            </div>


            <div className="mb-8 flex">
                <label className="block text-sm font-medium mb-2">
                    <span className="text-red-500">*</span> Meta Tag Title
                </label>
                <input
                    name="metaTitle"
                    value={form.metaTitle}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                />
            </div>


            <div className="mb-8 flex">
                <label className="block text-sm font-medium mb-2">
                    Meta Tag Description
                </label>
                <textarea
                    name="metaDescription"
                    rows="4"
                    value={form.metaDescription}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                    placeholder="Meta Tag Description"
                />
            </div>

            {/* Meta Tag Keywords */}
            <div className="mb-6 flex">
                <label className="block text-sm font-medium mb-2">
                    Meta Tag Keywords
                </label>
                <textarea
                    name="metaKeywords"
                    rows="3"
                    value={form.metaKeywords}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm bg-white"
                    placeholder="Meta Tag Keywords"
                />
            </div>
        </div>
    );
}
