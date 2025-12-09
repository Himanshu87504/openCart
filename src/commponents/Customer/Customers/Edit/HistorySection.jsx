import { useState } from "react";

export default function HistorySection() {
    const [comment, setComment] = useState("");
    const [history, setHistory] = useState([]);

    const addHistory = () => {
        if (!comment.trim()) return;

        const newEntry = {
            date: new Date().toLocaleDateString("en-GB"),
            comment,
        };

        setHistory([newEntry, ...history]);
        setComment("");
    };

    return (
        <div className="m-2 pl-5 pb-15">
            <div className="border border-gray-300 p-3 bg-white">

                <h2 className="text-2xl font-bold mb-3">History</h2>

                {/* TABLE */}
                <div className="overflow-x-auto border border-gray-300">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-300 bg-gray-100 text-left">
                                <th className="p-2 w-1/4 font-semibold border-r border-gray-300">
                                    Date Added
                                </th>
                                <th className="p-2 font-semibold">Comment</th>
                            </tr>
                        </thead>

                        <tbody>
                            {history.length === 0 ? (
                                <tr>
                                    <td
                                        colSpan="2"
                                        className="p-4 text-center text-gray-500"
                                    >
                                        No results!
                                    </td>
                                </tr>
                            ) : (
                                history.map((item, idx) => (
                                    <tr key={idx} className="border-t border-gray-300">
                                        <td className="p-2 border-r border-gray-300">
                                            {item.date}
                                        </td>
                                        <td className="p-2">{item.comment}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* PAGINATION TEXT */}
                <p className="text-gray-600 text-sm mt-1">
                    Showing {history.length} to {history.length} of {history.length} (0 Pages)
                </p>

                {/* ADD HISTORY */}
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-3">Add History</h2>

                    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 items-start">
                        <label className="font-semibold col-span-1 mt-1">Comment</label>

                        <textarea
                            className="border border-gray-300 p-3 col-span-5 min-h-32"
                            placeholder="Enter comment..."
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={addHistory}
                        className="mt-3 bg-blue-600 text-white px-4 py-2 border border-blue-700"
                    >
                        + Add History
                    </button>
                </div>
            </div>
        </div>
    );
}
