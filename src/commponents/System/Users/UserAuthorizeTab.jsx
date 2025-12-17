import React from "react";

const UserAuthorizeTab = () => {
    return (
        <div className=" bg-white  ">
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
                Authorize History
            </h2>

            <div className="overflow-x-auto border border-gray-200">
                <table className="min-w-full text-left text-sm">
                    <thead className="bg-gray-50 text-xs font-semibold text-gray-700">
                        <tr>
                            <th className="px-3 py-2 border-b">IP</th>
                            <th className="px-3 py-2 border-b">User Agent</th>
                            <th className="px-3 py-2 border-b">Status</th>
                            <th className="px-3 py-2 border-b">Date Added</th>
                            <th className="px-3 py-2 border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td
                                className="px-3 py-4 text-center text-gray-500"
                                colSpan={5}
                            >
                                No results!
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="mt-2 text-right text-xs text-gray-500">
                Showing 0 to 0 of 0 (0 Pages)
            </p>
        </div>
    );
};

export default UserAuthorizeTab;
