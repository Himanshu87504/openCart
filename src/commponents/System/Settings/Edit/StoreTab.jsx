import React from "react";

export default function StoreTab() {
    return (
        <div className="w-full bg-white shadow p-6 rounded-md">
            {/* Title */}
            <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="material-icons">settings</span> Edit Setting
            </h2>

            {/* Tabs */}
            <div className="border-b mb-6">
                <ul className="flex gap-6 text-gray-600 font-medium">
                    <li className="pb-2 border-b-2 border-blue-600 text-blue-600 cursor-pointer">
                        Store
                    </li>
                    <li className="pb-2 cursor-pointer">General</li>
                    <li className="pb-2 cursor-pointer">Local</li>
                    <li className="pb-2 cursor-pointer">Option</li>
                    <li className="pb-2 cursor-pointer">Image</li>
                    <li className="pb-2 cursor-pointer">Mail</li>
                    <li className="pb-2 cursor-pointer">Server</li>
                </ul>
            </div>

            {/* Form */}
            <div className="space-y-6">
                {/* Store Name */}
                <div>
                    <label className="font-medium">
                        <span className="text-red-500">*</span> Store Name
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 border p-2 rounded"
                        placeholder="Your Store"
                    />
                </div>

                {/* Store Owner */}
                <div>
                    <label className="font-medium">
                        <span className="text-red-500">*</span> Store Owner
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 border p-2 rounded"
                        placeholder="Your Name"
                    />
                </div>

                {/* Address */}
                <div>
                    <label className="font-medium">
                        <span className="text-red-500">*</span> Address
                    </label>
                    <textarea
                        className="w-full mt-1 border p-2 rounded"
                        rows="3"
                        placeholder="Address 1"
                    />
                </div>

                {/* Geocode */}
                <div>
                    <label className="font-medium">Geocode</label>
                    <input
                        type="text"
                        className="w-full mt-1 border p-2 rounded"
                        placeholder="Geocode"
                    />
                    <small className="text-gray-500">
                        Please enter your store location geocode manually.
                    </small>
                </div>

                {/* Email */}
                <div>
                    <label className="font-medium">
                        <span className="text-red-500">*</span> E-Mail
                    </label>
                    <input
                        type="email"
                        className="w-full mt-1 border p-2 rounded"
                        placeholder="info@dreamvention.com"
                    />
                </div>

                {/* Telephone */}
                <div>
                    <label className="font-medium">
                        <span className="text-red-500">*</span> Telephone
                    </label>
                    <input
                        type="text"
                        className="w-full mt-1 border p-2 rounded"
                        placeholder="123456789"
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="font-medium">Image</label>
                    <div className="w-40 border rounded flex flex-col items-center p-4">
                        <img
                            src="/placeholder-logo.png"
                            alt="store"
                            className="w-28 mb-3"
                        />
                        <div className="flex gap-2">
                            <button className="px-4 py-1 bg-blue-600 text-white rounded">
                                Edit
                            </button>
                            <button className="px-4 py-1 bg-orange-500 text-white rounded">
                                Clear
                            </button>
                        </div>
                    </div>
                </div>

                {/* Opening Times */}
                <div>
                    <label className="font-medium">Opening Times</label>
                    <textarea
                        className="w-full mt-1 border p-2 rounded"
                        rows="2"
                        placeholder="Opening Times"
                    />
                    <small className="text-gray-500">
                        Fill in your store's opening times.
                    </small>
                </div>

                {/* Comment */}
                <div>
                    <label className="font-medium">Comment</label>
                    <textarea
                        className="w-full mt-1 border p-2 rounded"
                        rows="2"
                        placeholder="Comment"
                    />
                    <small className="text-gray-500">
                        Enable/Disable new comment entry and display of existing comments.
                    </small>
                </div>
            </div>
        </div>
    );
}
