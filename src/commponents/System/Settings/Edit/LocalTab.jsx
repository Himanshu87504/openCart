// LocalTab.jsx
import React from "react";

const fieldLabel = "w-full max-w-xs text-sm font-medium text-gray-700";
const fieldControl =
    "flex-1 max-w-xl";

const selectClass =
    "block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

const LocalTab = () => {
    return (
        <div className="space-y-4  bg-white p-2">
            {/* Country */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Country</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="United Kingdom">
                        <option>United Kingdom</option>
                        <option>India</option>
                        <option>United States</option>
                    </select>
                </div>
            </div>

            {/* Region / State */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Region / State</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="Lancashire">
                        <option>Lancashire</option>
                        <option>London</option>
                    </select>
                </div>
            </div>

            {/* Time Zone */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Time Zone</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="UTC (+00:00)">
                        <option>UTC (+00:00)</option>
                        <option>UTC (+05:30)</option>
                    </select>
                </div>
            </div>

            {/* Language */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Language</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="English">
                        <option>English</option>
                    </select>
                </div>
            </div>

            {/* Administration Language */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Administration Language</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="English">
                        <option>English</option>
                    </select>
                </div>
            </div>

            {/* Currency */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                <label className={fieldLabel}>Currency</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="US Dollar">
                        <option>US Dollar</option>
                        <option>Euro</option>
                        <option>Indian Rupee</option>
                    </select>
                    <p className="mt-1 text-xs text-gray-500">
                        Change the default currency. Clear your browser cache to see the change and reset your existing cookie.
                    </p>
                </div>
            </div>

            {/* Currency Rate Engine */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Currency Rate Engine</label>
                <div className={fieldControl}>
                    <select
                        className={selectClass}
                        defaultValue="European Central Bank Currency Converter"
                    >
                        <option>European Central Bank Currency Converter</option>
                    </select>
                </div>
            </div>

            {/* Auto Update Currency (toggle) */}
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Auto Update Currency</label>
                <div className={fieldControl}>
                    <button
                        type="button"
                        className="relative inline-flex h-6 w-11 items-center rounded-full bg-indigo-600 transition"
                    >
                        <span className="inline-block h-5 w-5 translate-x-5 rounded-full bg-white shadow transition" />
                    </button>
                    <p className="mt-1 text-xs text-gray-500">
                        Set your store to automatically update currencies daily.
                    </p>
                </div>
            </div>

            {/* Length Class */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Length Class</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="Centimeter">
                        <option>Centimeter</option>
                        <option>Millimeter</option>
                        <option>Inch</option>
                    </select>
                </div>
            </div>

            {/* Weight Class */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <label className={fieldLabel}>Weight Class</label>
                <div className={fieldControl}>
                    <select className={selectClass} defaultValue="Kilogram">
                        <option>Kilogram</option>
                        <option>Gram</option>
                        <option>Pound</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default LocalTab;
