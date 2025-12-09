import React, { useState } from "react";

const permissionsList = [
    "catalog/manufacturer",
    "catalog/option",
    "catalog/product",
    "catalog/review",
    "catalog/subscription_plan",
    "cms/antispam",
    "cms/article",
    "cms/comment",
];

const extensionList = [
    "extension/opencart/captcha/basic",
    "extension/opencart/currency/ecb",
    "extension/opencart/currency/fixer",
    "extension/opencart/dashboard/activity",
    "extension/opencart/dashboard/chart",
    "extension/opencart/dashboard/activity",
    "extension/opencart/dashboard/chart",
    "extension/opencart/dashboard/activity",
    "extension/opencart/dashboard/chart",
];

export default function UserGroupEdit() {
    const [permissions, setPermissions] = useState({});
    const [extensions, setExtensions] = useState({});

    const toggle = (state, setState, key, type) => {
        setState({
            ...state,
            [key]: {
                ...state[key],
                [type]: !state[key]?.[type],
            },
        });
    };

    return (
        <div className="p-6 bg-white space-y-6 max-w-5xl mx-auto">

            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-700">Edit User Group</h2>

            {/* User group name */}
            <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">User Group Name</label>
                <input
                    type="text"
                    defaultValue="Administrator"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring focus:border-blue-500"
                />
            </div>

            {/* Permissions */}
            <div className="border rounded-md">
                <div className="px-4 py-3 font-semibold bg-gray-100 border-b">
                    Permissions
                </div>

                <div className="max-h-64 overflow-y-auto divide-y">
                    {permissionsList.map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-3 px-4 py-3 items-center text-sm bg-white"
                        >
                            <span>{item}</span>

                            <input
                                type="checkbox"
                                checked={permissions[item]?.access || false}
                                onChange={() =>
                                    toggle(permissions, setPermissions, item, "access")
                                }
                                className="w-4 h-4"
                            />

                            <input
                                type="checkbox"
                                checked={permissions[item]?.modify || false}
                                onChange={() =>
                                    toggle(permissions, setPermissions, item, "modify")
                                }
                                className="w-4 h-4"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Extensions - SAME AS PERMISSIONS */}
            <div className="border rounded-md">
                <div className="px-4 py-3 font-semibold bg-gray-100 border-b">
                    Extensions
                </div>

                <div className="max-h-64 overflow-y-auto divide-y">
                    {extensionList.map((item, i) => (
                        <div
                            key={i}
                            className="grid grid-cols-3 px-4 py-3 items-center text-sm bg-white"
                        >
                            <span>{item}</span>

                            <input
                                type="checkbox"
                                checked={extensions[item]?.access || false}
                                onChange={() =>
                                    toggle(extensions, setExtensions, item, "access")
                                }
                                className="w-4 h-4"
                            />

                            <input
                                type="checkbox"
                                checked={extensions[item]?.modify || false}
                                onChange={() =>
                                    toggle(extensions, setExtensions, item, "modify")
                                }
                                className="w-4 h-4"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
