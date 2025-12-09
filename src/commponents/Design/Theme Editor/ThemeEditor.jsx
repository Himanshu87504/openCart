import React, { useState } from "react";
import menuItems from './menuItems.json';
import Breadcrumb from "../../Breadcrumb";

export default function ThemeEditor() {
    const [openMenu, setOpenMenu] = useState(null);
    const [selectedHeading, setSelectedHeading] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    return (
        <div className="w-full min-h-screen bg-[#F6F6F6] p-4 sm:p-6">
            <Breadcrumb
                title="Theme Editor"
                paths={[
                    { name: "Home" },
                    { name: "Theme Editor", color: "text-blue-400" },
                ]}
            />
            {/* Title */}
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-700">
                <span className="text-xl">☰</span> Edit Theme
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* LEFT SIDEBAR */}
                <div className="col-span-1 space-y-6">

                    {/* Choose Store */}
                    <div className="bg-white border border-gray-300 shadow rounded p-4">
                        <h3 className="font-semibold mb-3 text-gray-700">Choose your store</h3>
                        <select className="w-full border border-gray-300 rounded p-2">
                            <option>Default</option>
                        </select>
                    </div>

                    {/* Template Menu */}
                    <div className="bg-white border border-gray-300 shadow rounded p-4">
                        <h3 className="font-semibold mb-3 text-gray-700">Choose a template</h3>

                        {menuItems.map((menu, i) => (
                            <div key={i} className="mb-2">
                                {/* MAIN HEADING */}
                                <div
                                    className={`flex justify-between items-center border border-gray-300 p-2 rounded cursor-pointer
                    ${openMenu === menu.title ? "bg-blue-50 border-blue-400" : "hover:bg-gray-50"}`}
                                    onClick={() =>
                                        setOpenMenu(openMenu === menu.title ? null : menu.title)
                                    }
                                >
                                    <span className="capitalize text-gray-700">{menu.title}</span>
                                    <span className="text-gray-500">{openMenu === menu.title ? "▼" : "➜"}</span>
                                </div>

                                {/* SUB FILES */}
                                {openMenu === menu.title && (
                                    <ul className="ml-4 mt-1">
                                        {menu.files.map((file, idx) => (
                                            <li
                                                key={idx}
                                                className={`p-2 pl-3 rounded cursor-pointer border-l-2
                          ${selectedFile === file
                                                        ? "text-blue-600 font-semibold border-blue-400"
                                                        : "text-gray-700 hover:bg-gray-50 border-gray-300"
                                                    }`}
                                                onClick={() => {
                                                    setSelectedHeading(menu.title);
                                                    setSelectedFile(file);
                                                }}
                                            >
                                                {file}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT CONTENT AREA */}
                <div className="col-span-1 lg:col-span-3 space-y-4">

                    {/* Info Box */}
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded text-sm text-blue-800">
                        The theme editor uses the Twig template language. Learn more{" "}
                        <a className="underline" href="#">here</a>.
                    </div>

                    {/* Theme History */}
                    {!selectedFile && (
                        <div className="bg-white border border-gray-300 shadow rounded p-4">
                            <h3 className="text-lg font-semibold mb-4 text-gray-700">Theme History</h3>

                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="border border-gray-300 p-2">Store</th>
                                            <th className="border border-gray-300 p-2">Route</th>
                                            <th className="border border-gray-300 p-2">Date Added</th>
                                            <th className="border border-gray-300 p-2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="4" className="text-center p-4 text-gray-500 border border-gray-300">
                                                No results!
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="text-right text-sm text-gray-600 mt-2">
                                Showing 0 to 0 of 0 (0 Pages)
                            </div>
                        </div>
                    )}

                    {/* File Editor */}
                    {selectedFile && (
                        <div className="bg-white border border-gray-300 shadow rounded p-4">
                            <h3 className="text-gray-700 text-lg mb-4">
                                {selectedHeading} / {selectedFile}
                            </h3>

                            <div className="bg-black text-green-300 p-4 rounded overflow-auto h-[500px] text-sm">
                                <pre>
                                    {`{{ header }}
<div class="container">
  <h2>Editing: ${selectedFile}</h2>
  <p>This is a sample twig file preview.</p>
</div>

{{ footer }}`}
                                </pre>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}
