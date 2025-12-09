import React from "react";

const labelClass = "w-full max-w-xs text-sm font-medium text-gray-700";
const fieldWrap = "flex-1 max-w-xl";
const inputClass =
    "block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

const UserGeneralTab = () => {
    return (
        <div className="space-y-8 rounded-md bg-white p-6 shadow">
            {/* Users Details */}
            <section>
                <h2 className="mb-4 text-lg font-semibold text-gray-800">
                    Users Details
                </h2>

                {/* Username */}
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> Username
                    </label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="demo" />
                    </div>
                </div>

                {/* User Group */}
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>User Group</label>
                    <div className={fieldWrap}>
                        <select className={inputClass} defaultValue="Demonstration">
                            <option>Demonstration</option>
                        </select>
                    </div>
                </div>

                {/* First Name */}
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> First Name
                    </label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="demo" />
                    </div>
                </div>

                {/* Last Name */}
                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> Last Name
                    </label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="demo" />
                    </div>
                </div>

                {/* Email */}
                <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> E-Mail
                    </label>
                    <div className={fieldWrap}>
                        <input
                            type="email"
                            className={inputClass}
                            defaultValue="demo@dreamvention.com"
                        />
                    </div>
                </div>

                {/* Image */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
                    <label className={labelClass}>Image</label>
                    <div className={fieldWrap}>
                        <div className="flex flex-col items-start gap-2 rounded border border-gray-200 bg-gray-50 p-4">
                            <div className="flex h-32 w-32 items-center justify-center rounded bg-white shadow-inner">
                                <span className="text-xs text-gray-400">User Image</span>
                            </div>
                            <div className="flex gap-2">
                                <button className="rounded bg-primary-600 px-3 py-1 text-xs font-medium text-white">
                                    Edit
                                </button>
                                <button className="rounded bg-orange-500 px-3 py-1 text-xs font-medium text-white">
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Password */}
            <section>
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Password</h2>

                <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> Password
                    </label>
                    <div className={fieldWrap}>
                        <input type="password" className={inputClass} placeholder="Password" />
                    </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> Confirm
                    </label>
                    <div className={fieldWrap}>
                        <input type="password" className={inputClass} placeholder="Confirm" />
                    </div>
                </div>
            </section>

            {/* Other */}
            <section>
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Other</h2>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <label className={labelClass}>Status</label>
                    <div className={fieldWrap}>
                        <button
                            type="button"
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary-600"
                        >
                            <span className="inline-block h-5 w-5 translate-x-5 rounded-full bg-white shadow" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UserGeneralTab;
