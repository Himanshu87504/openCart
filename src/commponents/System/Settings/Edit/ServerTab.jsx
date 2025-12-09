// ServerTab.jsx
import React from "react";

const labelClass = "w-full max-w-xs text-sm font-medium text-gray-700";
const fieldWrap = "flex-1 max-w-xl";
const inputClass =
    "block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

const Toggle = ({ on = false }) => (
    <button
        type="button"
        className={`relative inline-flex h-6 w-11 items-center rounded-full ${on ? "bg-primary-600" : "bg-gray-300"
            } transition`}
    >
        <span
            className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${on ? "translate-x-5" : "translate-x-0"
                }`}
        />
    </button>
);

const ServerTab = () => {
    return (
        <div className="space-y-8">

            {/* General */}
            <section className="rounded-md bg-white p-6 shadow">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">General</h2>

                {/* Maintenance Mode */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Maintenance Mode</label>
                    <div className={fieldWrap}>
                        <Toggle />
                        <p className="mt-1 text-xs text-gray-500">
                            Prevent customers from browsing your store while you perform maintenance.
                        </p>
                    </div>
                </div>

                {/* Session Lifetime */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Session Lifetime</label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="86400" />
                        <p className="mt-1 text-xs text-gray-500">
                            Set the PHP session lifetime in seconds.
                        </p>
                    </div>
                </div>

                {/* Session SameSite Cookie */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Session Samesite Cookie</label>
                    <div className={fieldWrap}>
                        <select className={inputClass} defaultValue="Strict">
                            <option>Strict</option>
                            <option>Lax</option>
                            <option>None</option>
                        </select>
                        <p className="mt-1 text-xs text-gray-500">
                            Set the SameSite attribute for session cookies.
                        </p>
                    </div>
                </div>

                {/* Use SEO URLs */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Use SEO URLs</label>
                    <div className={fieldWrap}>
                        <Toggle on />
                        <p className="mt-1 text-xs text-gray-500">
                            Requires mod_rewrite and a correctly configured .htaccess file.
                        </p>
                    </div>
                </div>

                {/* Robots */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Robots</label>
                    <div className={fieldWrap}>
                        <textarea
                            className={`${inputClass} min-h-[120px]`}
                            defaultValue={"abot\ndbot\nebot\nhbot\nkbot"}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            List of web crawler user agents that will not use shared sessions. One per line.
                        </p>
                    </div>
                </div>

                {/* Output Compression Level */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Output Compression Level</label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="0" />
                        <p className="mt-1 text-xs text-gray-500">
                            GZIP compression level for responses. Value must be between 0 and 9.
                        </p>
                    </div>
                </div>
            </section>

            {/* Security */}
            <section className="rounded-md bg-white p-6 shadow">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">Security</h2>

                {/* Two-factor Security */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Two-factor Security</label>
                    <div className={fieldWrap}>
                        <Toggle />
                        <p className="mt-1 text-xs text-gray-500">
                            Enable two-factor security for admin users.
                        </p>
                    </div>
                </div>

                {/* Use Shared Sessions */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Use Shared Sessions</label>
                    <div className={fieldWrap}>
                        <Toggle />
                        <p className="mt-1 text-xs text-gray-500">
                            Share the session cookie between stores so the cart can be shared across domains.
                        </p>
                    </div>
                </div>

                {/* Encryption Key */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Encryption Key</label>
                    <div className={fieldWrap}>
                        <textarea
                            className={`${inputClass} min-h-[100px]`}
                            placeholder="Encryption key"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Use a long combination of letters and numbers to encrypt private data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Uploads */}
            <section className="rounded-md bg-white p-6 shadow">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">Uploads</h2>

                {/* Max File Size */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> Max File Size
                    </label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="20" />
                        <p className="mt-1 text-xs text-gray-500">
                            Maximum upload size allowed for customers, in megabytes.
                        </p>
                    </div>
                </div>

                {/* Allowed File Extensions */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Allowed File Extensions</label>
                    <div className={fieldWrap}>
                        <textarea
                            className={`${inputClass} min-h-[120px]`}
                            defaultValue={"zip\ntxt\npng\njpg\njpeg"}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            File extensions allowed for upload. One value per line.
                        </p>
                    </div>
                </div>

                {/* Allowed File Mime Types */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Allowed File Mime Types</label>
                    <div className={fieldWrap}>
                        <textarea
                            className={`${inputClass} min-h-[120px]`}
                            defaultValue={
                                "text/plain\nimage/png\nimage/jpeg\nimage/webp\nimage/gif"
                            }
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            MIME types allowed for upload. One value per line.
                        </p>
                    </div>
                </div>
            </section>

            {/* Error Handling */}
            <section className="rounded-md bg-white p-6 shadow">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">
                    Error Handling
                </h2>

                {/* Display Errors */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Display Errors</label>
                    <div className={fieldWrap}>
                        <Toggle on />
                        <p className="mt-1 text-xs text-gray-500">
                            Should be disabled on a live store, but useful while developing.
                        </p>
                    </div>
                </div>

                {/* Log Errors */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Log Errors</label>
                    <div className={fieldWrap}>
                        <Toggle />
                        <p className="mt-1 text-xs text-gray-500">
                            Enable to log PHP errors, warnings, and notices.
                        </p>
                    </div>
                </div>

                {/* Error Log Filename */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>
                        <span className="text-red-500">*</span> Error Log Filename
                    </label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="error.log" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServerTab;
