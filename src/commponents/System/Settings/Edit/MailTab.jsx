// MailTab.jsx
import React from "react";

const labelClass = "w-full max-w-xs text-sm font-medium text-gray-700";
const fieldWrap = "flex-1 max-w-xl";
const inputClass =
    "block w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";

const MailTab = ({ name }) => {
    return (
        <div className="space-y-8">


            <section className=" bg-white">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">
                    General – {name}
                </h2>

                {/* Mail Engine */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start mb-4">
                    <label className={labelClass}>Mail Engine</label>
                    <div className={fieldWrap}>
                        <select className={inputClass} defaultValue="None">
                            <option>None</option>
                            <option>Mail</option>
                            <option>SMTP</option>
                        </select>
                        <p className="mt-1 text-xs text-gray-500">
                            Only choose Mail unless your host has disabled the PHP mail function.
                        </p>
                    </div>
                </div>

                {/* Mail Parameters */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Mail Parameters</label>
                    <div className={fieldWrap}>
                        <input
                            className={inputClass}
                            placeholder="Mail Parameters"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            When using Mail, additional mail parameters can be added here.
                        </p>
                    </div>
                </div>
            </section>

            {/* SMTP section */}
            <section className="rounded-md bg-white p-6 shadow">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">SMTP</h2>

                {/* Hostname */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Hostname</label>
                    <div className={fieldWrap}>
                        <input className={inputClass} placeholder="Hostname" />
                        <p className="mt-1 text-xs text-gray-500">
                            Add tls:// or ssl:// prefix if a secure connection is required.
                        </p>
                    </div>
                </div>

                {/* Username */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Username</label>
                    <div className={fieldWrap}>
                        <input className={inputClass} placeholder="Username" />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Password</label>
                    <div className={fieldWrap}>
                        <input
                            type="password"
                            className={inputClass}
                            placeholder="Password"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            For some providers you may need to use an app-specific password.
                        </p>
                    </div>
                </div>

                {/* Port */}
                <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Port</label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="25" />
                    </div>
                </div>

                {/* Timeout */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Timeout</label>
                    <div className={fieldWrap}>
                        <input className={inputClass} defaultValue="5" />
                    </div>
                </div>
            </section>

            {/* Mail Alerts section */}
            <section className="rounded-md bg-white p-6 shadow">
                <h2 className="mb-4 text-sm font-semibold text-gray-800">
                    Mail Alerts
                </h2>

                {/* Alert Mail checkboxes */}
                <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Alert Mail</label>
                    <div className={fieldWrap}>
                        <div className="flex flex-col gap-1 text-sm text-gray-700">
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <span>Register</span>
                            </label>
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
                                <span>Affiliate</span>
                            </label>
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                                <span>Orders</span>
                            </label>
                            <label className="inline-flex items-center gap-2">
                                <input type="checkbox" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                                <span>Reviews</span>
                            </label>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                            Select which events should send alert emails to the store admin.
                        </p>
                    </div>
                </div>

                {/* Additional Alert Mail */}
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start">
                    <label className={labelClass}>Additional Alert Mail</label>
                    <div className={fieldWrap}>
                        <textarea
                            className={`${inputClass} min-h-[84px]`}
                            placeholder="Additional Alert Mail"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                            Extra email addresses to receive alerts, separated by commas.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MailTab;
