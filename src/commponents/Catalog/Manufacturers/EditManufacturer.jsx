import { useState } from "react";
import { useParams } from "react-router-dom";
import { manufacturers } from "./manufacturersData.js";
import { GiUsaFlag } from "react-icons/gi";
import Breadcrumb from "../../Breadcrumb.jsx";
import { FaEdit } from "react-icons/fa";

export default function EditManufacturer() {
    const { id } = useParams();
    const manufacturer = manufacturers.find((m) => m.id === Number(id));

    if (!manufacturer) {
        return <div className="p-6 text-red-500">Manufacturer Not Found</div>;
    }

    const [activeTab, setActiveTab] = useState("General");

    const [name, setName] = useState(manufacturer.name);
    const [sortOrder, setSortOrder] = useState(manufacturer.sortOrder);

    return (
        <div className="min-h-screen bg-[#f5f5f5] py-6">
            <Breadcrumb
                title="Manufacturers"
                paths={[{ name: "Home" }, { name: "Manufacturers ", color: "text-blue-400" }]}
            />

            <div className="mx-auto w-[98%] max-w-7xl bg-white border border-[#e5e5e5]">

                {/* Header */}
                <div className="flex items-center px-6 py-3 border-b border-[#e5e5e5] bg-[#f8f8f8]">
                    <span className="mr-2 text-lg"><FaEdit /></span>
                    <span className="text-lg font-semibold text-[#444]">
                        Edit Categorie
                    </span>
                </div>

                {/* Tabs */}
                <div className="px-6 pt-2 border-b border-[#e5e5e5] overflow-x-auto">
                    <div className="flex gap-1 text-sm min-w-max">
                        {["General", "SEO", "Design"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 border border-b-0 rounded-t-md ${activeTab === tab
                                    ? "bg-white border-[#d7d7d7]"
                                    : "bg-[#f8f8f8] text-[#777] border-[#e5e5e5]"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Page Body */}
                <div className="px-6 py-3 space-y-3 pl-2">

                    {/* GENERAL TAB */}
                    {activeTab === "General" && (
                        <>

                            {/* Manufacturer Name */}
                            <div className="flex flex-col md:flex-row md:items-center border border-gray-100 p-2 gap-2">
                                <label className="text-sm font-semibold text-[#555] md:w-52">
                                    <span className="text-red-500 mr-1">*</span>
                                    Manufacturer Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border border-[#d7d7d7] rounded-md px-3 py-2 text-sm focus:outline-none"
                                />
                            </div>

                            {/* Stores */}
                            <div className="flex flex-col md:flex-row gap-3 md:items-start pl-2 md:pl-34">
                                <label className="text-sm font-semibold text-[#555] md:w-52">
                                    Stores
                                </label>
                                <div className="border border-[#d7d7d7] rounded-md px-4 py-3 text-sm w-full">
                                    <label className="flex gap-2">
                                        <input type="checkbox" defaultChecked className="h-4 w-4" />
                                        <span>Default</span>
                                    </label>
                                </div>
                            </div>

                            {/* Image */}
                            <div className="flex flex-col md:flex-row items-start gap-3 pl-2 md:pl-34">
                                <label className="text-sm font-semibold text-[#555] w-20">
                                    Image
                                </label>

                                <div>
                                    <div className="border border-[#e5e5e5] bg-white w-52 h-60 flex items-center justify-center mb-2 mx-auto md:mx-0">
                                        <img
                                            src={manufacturer.image}
                                            alt="Manufacturer"
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>

                                    <div className="flex gap-2 justify-center md:justify-start">
                                        <button className="px-4 py-1 text-xs bg-[#1E91CF] text-white rounded">
                                            Edit
                                        </button>
                                        <button className="px-4 py-1 text-xs bg-[#F0AD4E] text-white rounded">
                                            Clear
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Sort Order */}
                            <div className="flex flex-col md:flex-row md:items-center gap-3 pl-2 md:pl-34">
                                <label className="text-sm font-semibold text-[#555] md:w-52">
                                    Sort-Order
                                </label>
                                <input
                                    type="number"
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                    className="w-full border border-[#d7d7d7] rounded-md px-3 py-2 text-sm focus:outline-none"
                                />
                            </div>

                        </>
                    )}

                    {/* SEO TAB */}

                    {activeTab === "SEO" && (
                        <div className="w-full text-sm text-gray-700 ">

                            {/* Info Box */}
                            <div className="mb-4 rounded-md border border-blue-200 bg-blue-50 px-4 py-3 text-xs flex items-start gap-2">
                                <span className="text-base mt-[1px]">ℹ️</span>
                                <p>
                                    Do not use spaces, instead replace spaces with "-" and make sure the SEO URL
                                    is globally unique.
                                </p>
                            </div>

                            {/* Table Box */}
                            <div className="border border-gray-300 text-sm  overflow-hidden">

                                {/* Header */}
                                <div className="flex font-semibold border-b border-gray-300">
                                    <div className="w-60 px-2 py-2 border-r border-gray-300">Stores</div>
                                    <div className="flex-1 px-2 py-2">Keyword</div>
                                </div>

                                <div className="flex items-center h-12 hover:bg-gray-100 transition">

                                    <div className="w-60 px-2 text-gray-700">Default</div>

                                    <div className="flex-1 border-l border-gray-300 px-2 py-1">
                                        <div className="flex items-center h-10">

                                            <div className="flex h-10 w-11 items-center justify-center 
                            border border-gray-300 bg-gray-50 rounded-l-md 
                            shadow-sm">
                                                <GiUsaFlag className="text-2xl text-red-500" />
                                            </div>

                                            <input
                                                className="h-10 w-full border border-gray-300  px-3 text-sm bg-white "
                                                placeholder="cameras"
                                                defaultValue="cameras"
                                            />
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    )}




                    {/* DESIGN TAB */}
                    {activeTab === "Design" && (
                        <div className="text-sm text-gray-500">
                            <div className="border border-gray-300 overflow-x-auto">

                                <div className="flex font-medium h-8 min-w-max">
                                    <div className="w-60 flex items-center pl-2 border-r border-gray-300">
                                        Stores
                                    </div>
                                    <div className="flex-1 flex items-center pl-2">
                                        Layout Override
                                    </div>
                                </div>

                                <div className="flex h-12 border-t border-gray-300 hover:bg-[#ECECEC] min-w-max">

                                    <div className="w-60 flex items-center pl-2 border-r border-gray-300">
                                        Default
                                    </div>

                                    <div className="flex-1 flex items-center">
                                        <div className="w-full px-2">

                                            <div className="flex border border-gray-300 rounded overflow-hidden">
                                                <div className="relative w-full bg-white">
                                                    <select
                                                        className="block h-9 w-full appearance-none px-3 pr-8 text-sm leading-5 border-0 focus:outline-none"
                                                        defaultValue=""
                                                    >
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
        </div>
    );
}
