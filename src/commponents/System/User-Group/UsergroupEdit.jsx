import React, { useState } from "react";
import Breadcrumb from "../../Breadcrumb";

const permissionsList = [
    "catalog/manufacturer",
    "catalog/option",
    "catalog/product",
    "catalog/review",
    "catalog/subscription_plan",
    "cms/article",
    "cms/comment",
];

const extensionList = [
    "extension/opencart/captcha/basic",
    "extension/opencart/currency/ecb",
    "extension/opencart/currency/fixer",
    "extension/opencart/dashboard/activity",
    "extension/opencart/dashboard/chart",
];

const PermissionBlock = ({ title, list, state, setState }) => {
    const toggle = (key, type) => {
        setState((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                [type]: !prev[key]?.[type],
            },
        }));
    };

    return (
        <div className="border border-gray-300 bg-white">

            <div className="px-4 py-3 font-semibold bg-gray-100 border-b">
                {title}
            </div>


            <div className="grid grid-cols-3 px-4 py-2 text-sm font-medium bg-gray-50 border-b">
                <span>Route</span>
                <span className="text-center">Access</span>
                <span className="text-center">Modify</span>
            </div>


            <div className="max-h-64 overflow-y-auto divide-y">
                {list.map((item) => (
                    <div
                        key={item}
                        className="grid grid-cols-3 px-4 py-3 items-center text-sm hover:bg-gray-50"
                    >
                        <span className="truncate">{item}</span>

                        <div className="flex justify-center">
                            <input
                                type="checkbox"
                                checked={state[item]?.access || false}
                                onChange={() => toggle(item, "access")}
                                className="w-4 h-4"
                            />
                        </div>

                        <div className="flex justify-center">
                            <input
                                type="checkbox"
                                checked={state[item]?.modify || false}
                                onChange={() => toggle(item, "modify")}
                                className="w-4 h-4"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function UserGroupEdit() {
    const [permissions, setPermissions] = useState({});
    const [extensions, setExtensions] = useState({});

    return (
        <div className="p-6 bg-[#F6F6F6] max-w-5xl mx-auto ">
            <Breadcrumb
                title="User Group"
                paths={[
                    { name: "Home" },
                    { name: "User Group", color: "text-blue-400" },
                ]}
            />
            <div className="border border-gray-300 ">
                <h2 className="text-xl font-semibold text-gray-700 p-2">
                    Edit User Group
                </h2>
            </div>

            {/* Form */}
            <div className="bg-white p-6 space-y-6 border border-gray-200">
                {/* Group Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        User Group Name
                    </label>
                    <input
                        type="text"
                        defaultValue="Administrator"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                {/* Permissions */}
                <PermissionBlock
                    title="Permissions"
                    list={permissionsList}
                    state={permissions}
                    setState={setPermissions}
                />

                {/* Extensions */}
                <PermissionBlock
                    title="Extensions"
                    list={extensionList}
                    state={extensions}
                    setState={setExtensions}
                />
            </div>
        </div>
    );
}
