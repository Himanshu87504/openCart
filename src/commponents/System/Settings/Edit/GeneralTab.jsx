import React, { useState } from "react";

export default function GeneralTab() {
    const [logo, setLogo] = useState("/opencart-logo.png"); // your default logo path

    return (
        <div className="w-full bg-white p-2 ">
            {/* Meta Title */}
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">
                    <span className="text-red-500">*</span> Meta Title
                </label>
                <input
                    type="text"
                    placeholder="Your Store"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                />
            </div>

            {/* Meta Tag Description */}
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">
                    Meta Tag Description
                </label>
                <textarea
                    placeholder="My Store"
                    rows="3"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                />
            </div>

            {/* Meta Tag Keywords */}
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">
                    Meta Tag Keywords
                </label>
                <textarea
                    placeholder="Meta Tag Keywords"
                    rows="3"
                    className="w-full border rounded-md px-3 py-2 text-sm"
                />
            </div>

            {/* Store Logo */}
            <div className="mb-10">
                <label className="block text-sm font-semibold mb-2">
                    Store Logo
                </label>

                <div className="border w-48 h-56 flex flex-col items-center justify-between px-2 py-2">
                    <img
                        src={logo}
                        alt="Store Logo"
                        className="w-full h-40 object-contain"
                    />

                    <div className="flex gap-2 mb-1">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                            Edit
                        </button>
                        <button className="px-3 py-1 bg-yellow-500 text-white rounded text-sm">
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            {/* Theme */}
            <div className="mb-10">
                <label className="block text-sm font-semibold mb-2">Theme</label>

                <select className="border rounded-md px-3 py-2 w-full mb-4 text-sm">
                    <option>Default Store Theme</option>
                </select>

                <div className="border w-72 h-auto">
                    <img
                        src="/theme-preview.png"
                        alt="Theme Preview"
                        className="w-full object-cover"
                    />
                </div>
            </div>

            {/* Default Layout */}
            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">Default Layout</label>
                <select className="border rounded-md px-3 py-2 w-full text-sm">
                    <option>Default</option>
                </select>
            </div>
        </div>
    );
}
