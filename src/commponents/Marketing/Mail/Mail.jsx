import React from "react";
import { MdEmail } from "react-icons/md";

export default function Mail() {
    return (
        <div className="w-full bg-white border rounded">
            {/* HEADER */}
            <div className="flex items-center gap-2 border-b px-4 py-3 bg-gray-50">
                <MdEmail size={20} className="text-gray-700" />
                <h2 className="text-lg font-semibold">Send e-mail's to customers</h2>
            </div>

            <div className="p-5 space-y-6">

                {/* FROM */}
                <div>
                    <label className="block mb-1 text-gray-700 font-medium">From</label>
                    <select className="w-80 border-gray-300 border rounded px-3 py-2 focus:outline-none">
                        <option>Default</option>
                    </select>
                </div>

                {/* TO */}
                <div>
                    <label className="block mb-1 text-gray-700 font-medium">To</label>
                    <select className="w-80 border-gray-300 border rounded px-3 py-2 focus:outline-none">
                        <option>All Newsletter Subscribers</option>
                    </select>
                </div>

                {/* SUBJECT */}
                <div>
                    <label className="block mb-1 text-red-600 font-medium">* Subject</label>
                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none"
                    />
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="block mb-2 text-red-600 font-medium">* Message</label>

                    {/* WYSIWYG BOX */}
                    <div className="border border-gray-300 rounded bg-white">

                        {/* TOOLBAR */}
                        <div className="flex flex-wrap gap-2 px-3 py-2 border-b bg-gray-50 text-gray-700 text-sm">
                            <button>Source</button>
                            <button className="font-bold">B</button>
                            <button className="italic">I</button>
                            <button className="underline">U</button>
                            <button className="line-through">S</button>

                            <button>• List</button>
                            <button>1. List</button>
                            <button>⟸</button>
                            <button>⟹</button>

                            <button>Left</button>
                            <button>Center</button>
                            <button>Right</button>

                            <select className="border px-1 py-0.5 text-sm">
                                <option>Normal</option>
                                <option>Header 1</option>
                            </select>

                            <select className="border px-1 py-0.5 text-sm">
                                <option>Font</option>
                            </select>

                            <select className="border px-1 py-0.5 text-sm">
                                <option>Size</option>
                            </select>

                            <button>🔗</button>
                            <button>🖼</button>
                            <button>📊</button>
                        </div>

                        {/* TEXT AREA */}
                        <textarea
                            className="w-full h-56 px-3 py-2 focus:outline-none resize-none"
                            placeholder=" "
                        ></textarea>

                        {/* Footer */}
                        <div className="text-xs text-gray-600 px-3 py-1 border-t">
                            body&nbsp;&nbsp;p
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
