import React from 'react'

// ExtensionInstaller.jsx
export default function Installer() {
    return (
        <div className="border border-gray-200 bg-white">
            {/* Page title bar */}
            <div className="border-b border-gray-200 bg-gray-50 px-6 py-3">
                <h1 className="text-lg font-semibold text-gray-800">
                    Extension Installer
                </h1>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-8">
                {/* Install Progress */}
                <section>
                    <h2 className="text-2xl font-normal text-gray-800 mb-6">
                        Install Progress
                    </h2>

                    <div className="space-y-3">
                        <label className="text-base font-semibold text-gray-700">
                            Progress
                        </label>

                        {/* Progress bar (empty like screenshot) */}
                        <div className="h-4 w-full rounded bg-gray-200 overflow-hidden">
                            <div
                                className="h-4 bg-blue-500"
                                style={{ width: "0%" }} // change to e.g. "40%" when needed
                            />
                        </div>
                    </div>
                </section>

                {/* Installed Extensions heading */}
                <section>
                    <h2 className="text-2xl font-normal text-gray-800">
                        Installed Extensions
                    </h2>
                    {/* You can add table/list here later */}
                </section>
            </div>
        </div>
    );
}

