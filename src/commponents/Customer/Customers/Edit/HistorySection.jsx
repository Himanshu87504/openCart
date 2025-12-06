import { useState } from "react";

export default function HistorySection() {
    const [comment, setComment] = useState("");
    const [history, setHistory] = useState([]);

    const addHistory = () => {
        if (!comment.trim()) return;

        const newEntry = {
            date: new Date().toLocaleDateString("en-GB"), // DD/MM/YYYY like typical UK format
            comment,
        };

        setHistory([newEntry, ...history]);
        setComment("");
    };

    return (
        <div className="p-6 space-y-8 bg-white">

            {/* History Title */}
            <h2 className="text-2xl font-bold">History</h2>

            {/* Table */}
            <table className="w-full border">
                <thead>
                    <tr className="border-b bg-gray-100">
                        <th className="text-left p-2 font-semibold border-r w-1/4">Date Added</th>
                        <th className="text-left p-2 font-semibold">Comment</th>
                    </tr>
                </thead>

                <tbody>
                    {history.length === 0 ? (
                        <tr>
                            <td className="p-4 text-center text-gray-500" colSpan="2">
                                No results!
                            </td>
                        </tr>
                    ) : (
                        history.map((item, idx) => (
                            <tr key={idx} className="border-t">
                                <td className="p-2 border-r">{item.date}</td>
                                <td className="p-2">{item.comment}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Pagination text (same as screen) */}
            <div className="text-gray-500 text-sm">
                Showing {history.length} to {history.length} of {history.length} (0 Pages)
            </div>

            {/* Add History Section */}
            <div className="mt-6">
                <h2 className="text-2xl font-bold mb-4">Add History</h2>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    <label className="font-semibold col-span-1">Comment</label>

                    <textarea
                        className="border p-3 rounded col-span-5 h-32"
                        placeholder="Comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                </div>

                {/* Add Button */}
                <button
                    onClick={addHistory}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-1"
                >
                    <span className="text-lg">+</span> Add History
                </button>
            </div>

        </div>
    );
}
