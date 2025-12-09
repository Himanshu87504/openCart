import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";

export default function BannerEdit() {
    const [status, setStatus] = useState(true);
    const [rows, setRows] = useState([
        {
            id: Date.now(),
            title: "",
            link: "",
            sort: 0,
            image: "",
        },
    ]);

    const addRow = () => {
        setRows([
            ...rows,
            {
                id: Date.now(),
                title: "",
                link: "",
                sort: 0,
                image: "",
            },
        ]);
    };

    const removeRow = (id) => setRows(rows.filter((row) => row.id !== id));
    const updateField = (id, field, value) =>
        setRows(rows.map((row) => (row.id === id ? { ...row, [field]: value } : row)));

    const uploadImage = (id, e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => updateField(id, "image", reader.result);
        reader.readAsDataURL(file);
    };

    const clearImage = (id) => updateField(id, "image", "");

    return (
        <div className="p-4  bg-[#F6F6F6] min-h-screen">
            <Breadcrumb
                title="Edit Banner"
                paths={[
                    { name: "Home" },
                    { name: "Edit Banner", color: "text-blue-400" },
                ]}
            />
            <div className="border border-gray-300">
                <h2 className="text-lg font-semibold flex items-center gap-2 mb-3 text-gray-700 pt-2">
                    <span>✏️</span> Edit Banner
                </h2>
            </div>

            <div className="bg-white border border-gray-300 shadow rounded p-4">


                <div className="mb-4 flex">
                    <label className="font-medium text-sm w-40">
                        <span className="text-red-500">*</span> Banner Name
                    </label>
                    <input
                        type="text"
                        defaultValue="Home Page Slideshow"
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                    />
                </div>


                <div className="mb-4 flex items-center gap-4">
                    <label className="font-medium text-sm">Status</label>
                    <div
                        className="relative inline-block w-14 select-none cursor-pointer"
                        onClick={() => setStatus(!status)}
                    >
                        <div
                            className={`absolute top-0 left-0 right-0 bottom-0 rounded-full transition 
              ${status ? "bg-blue-600" : "bg-gray-400"}`}
                        ></div>
                        <div
                            className={`absolute top-1 w-6 h-6 bg-white rounded-full transition 
              ${status ? "translate-x-7" : "translate-x-1"}`}
                        ></div>
                    </div>
                </div>


                <div className="border border-gray-300 rounded mb-4 inline-block">
                    <button className="px-4 py-2 flex items-center gap-2 text-sm">
                        🇬🇧 English
                    </button>
                </div>


                <div className="grid grid-cols-12 bg-gray-50 border border-gray-300 py-2 text-sm font-semibold">
                    <div className="col-span-3 px-2">* Title</div>
                    <div className="col-span-3 px-2">Link</div>
                    <div className="col-span-3 px-2">Image</div>
                    <div className="col-span-2 px-2 ">Sort Order</div>
                    <div className="col-span-1 px-2"></div>
                </div>


                {rows.map((row) => (
                    <div key={row.id} className="grid grid-cols-12 border border-gray-300 py-4">


                        <div className="col-span-3 px-2 ">
                            <input
                                type="text"
                                value={row.title}
                                onChange={(e) => updateField(row.id, "title", e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>


                        <div className="col-span-3 px-2 ">
                            <input
                                type="text"
                                value={row.link}
                                onChange={(e) => updateField(row.id, "link", e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>


                        <div className="col-span-3 px-2 ">
                            <div className="border border-gray-300 rounded bg-white h-40 flex items-center justify-center">
                                {row.image ? (
                                    <img src={row.image} className="h-32 object-contain" />
                                ) : (
                                    <span className="text-gray-400 text-sm">No Image</span>
                                )}
                            </div>

                            <div className="flex gap-2 mt-2">
                                <label className="px-3 py-1 rounded bg-blue-600 text-white cursor-pointer text-sm">
                                    Edit
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => uploadImage(row.id, e)}
                                    />
                                </label>

                                <button
                                    onClick={() => clearImage(row.id)}
                                    className="px-3 py-1 rounded bg-orange-500 text-white text-sm"
                                >
                                    Clear
                                </button>
                            </div>
                        </div>


                        <div className="col-span-2 px-2 ">
                            <input
                                type="number"
                                value={row.sort}
                                onChange={(e) => updateField(row.id, "sort", e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>


                        <div className="col-span-1 flex items-center justify-center px-2">
                            <button
                                onClick={() => removeRow(row.id)}
                                className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg"
                            >
                                −
                            </button>
                        </div>
                    </div>
                ))}


                <div className="flex justify-end py-4">
                    <button
                        onClick={addRow}
                        className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center text-2xl"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
