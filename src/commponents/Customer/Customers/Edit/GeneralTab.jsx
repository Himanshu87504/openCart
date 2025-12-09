import React from "react";

export default function GeneralTab() {
    return (
        <div className="bg-[#F6F6F6] min-h-screen p-5 pt-0 ">

            {/* CARD */}
            <div className="bg-white border border-gray-300  p-3">


                <h2 className="text-2xl font-semibold mb-6">Customer Details</h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Store */}
                    <div>
                        <label className="block font-medium mb-2">Store</label>
                        <select className="w-full border border-gray-300 rounded-md p-3 bg-white">
                            <option>Default</option>
                        </select>
                    </div>

                    {/* Customer Group */}
                    <div>
                        <label className="block font-medium mb-2">Customer Group</label>
                        <select className="w-full border border-gray-300 rounded-md p-3 bg-white">
                            <option>Default</option>
                        </select>
                    </div>
                </div>

                {/* FIRST NAME */}
                <div className="mt-6">
                    <label className="block font-medium mb-2">
                        <span className="text-red-500">*</span> First Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md p-3 bg-white"
                        placeholder="First Name"
                    />
                </div>

                {/* LAST NAME */}
                <div className="mt-6">
                    <label className="block font-medium mb-2">
                        <span className="text-red-500">*</span> Last Name
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md p-3 bg-white"
                        placeholder="Last Name"
                    />
                </div>

                {/* EMAIL */}
                <div className="mt-6">
                    <label className="block font-medium mb-2">
                        <span className="text-red-500">*</span> E-Mail
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-md p-3 bg-white"
                        placeholder="Email"
                    />
                </div>

                {/* TELEPHONE */}
                <div className="mt-6">
                    <label className="block font-medium mb-2">Telephone</label>
                    <input
                        className="w-full border border-gray-300 rounded-md p-3 bg-white"
                        placeholder="Telephone"
                    />
                </div>

                {/* PASSWORD SECTION */}
                <h2 className="text-xl font-semibold mt-10 mb-4">Password</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block font-medium mb-2">
                            <span className="text-red-500">*</span> Password
                        </label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-md p-3 bg-white"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label className="block font-medium mb-2">
                            <span className="text-red-500">*</span> Confirm
                        </label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-md p-3 bg-white"
                            placeholder="Confirm"
                        />
                    </div>
                </div>

                {/* OTHER SECTION */}
                <h2 className="text-xl font-semibold mt-10 mb-4">Other</h2>

                {/* Newsletter */}
                <div className="flex items-center justify-between border-b py-3">
                    <span>Newsletter</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-blue-600 transition-all"></div>
                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                    </label>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between border-b py-3">
                    <span>Status</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" defaultChecked className="sr-only peer" />
                        <div className="w-11 h-6 bg-blue-600 rounded-full peer-checked:bg-blue-600 transition-all"></div>
                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                    </label>
                </div>

                {/* Safe */}
                <div className="flex items-center justify-between py-3">
                    <div>
                        <p>Safe</p>
                        <p className="text-sm text-gray-500">
                            Set to true to avoid this customer from being caught by the anti-fraud system
                        </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-all"></div>
                        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                    </label>
                </div>

            </div>
        </div>
    );
}
