import { useState, useMemo } from "react";
import Breadcrumb from "../../Breadcrumb";
import ExtensionCard from "./ExtensionCard";
import { extensions } from "./Card";

const PER_PAGE = 40;

export default function Marketplace() {
    const [activeTab, setActiveTab] = useState("All");
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState("Rating");


    const filteredExtensions = useMemo(() => {
        let data = [...extensions];

        if (activeTab === "Free") data = data.filter(e => e.price === "FREE");
        else if (activeTab === "Paid") data = data.filter(e => e.price !== "FREE");
        else if (activeTab === "Recommended") data = data.filter(e => e.rating >= 5);


        if (sortBy === "Rating") data.sort((a, b) => b.rating - a.rating);
        else if (sortBy === "Price")
            data.sort((a, b) => parseFloat(a.price.replace("$", "")) - parseFloat(b.price.replace("$", "")));
        else if (sortBy === "Low Price")
            data.sort((a, b) => parseFloat(b.price.replace("$", "")) - parseFloat(a.price.replace("$", "")));

        return data;
    }, [activeTab, sortBy]);


    const totalPages = Math.ceil(filteredExtensions.length / PER_PAGE);
    const start = (page - 1) * PER_PAGE;
    const paginatedExtensions = filteredExtensions.slice(start, start + PER_PAGE);

    function SortBy() {
        const [open, setOpen] = useState(false);
        const options = ["Rating", "Price", "Low Price"];

        return (
            <div className="relative inline-block text-sm">
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white text-gray-700 overflow-hidden"
                >
                    <div className="px-3 py-1.5">{sortBy}</div>
                    <div className="px-2 text-gray-500 text-xs">▼</div>
                </button>

                {open && (
                    <div className="absolute left-0 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg z-10">
                        {options.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => {
                                    setSortBy(opt); // Update parent state
                                    setOpen(false);
                                    setPage(1); // reset page when sorting changes
                                }}
                                className="block w-full px-3 py-1.5 text-left text-gray-700 hover:bg-gray-100"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    function Pagination({ page, totalPages, onChange }) {
        const go = (p) => {
            if (p < 1 || p > totalPages) return;
            onChange(p);
        };

        return (
            <nav className="mt-4 flex justify-center">
                <ul className="flex items-center gap-1 text-sm">
                    <li>
                        <button onClick={() => go(1)} className="rounded border border-gray-300 px-2 py-1 text-blue-600 hover:bg-blue-50">
                            |&lt;
                        </button>
                    </li>
                    <li>
                        <button onClick={() => go(page - 1)} className="rounded border border-gray-300 px-2 py-1 text-blue-600 hover:bg-blue-50">
                            &lt;
                        </button>
                    </li>

                    {Array.from({ length: totalPages }).map((_, i) => {
                        const p = i + 1;
                        const active = p === page;
                        return (
                            <li key={p}>
                                <button
                                    onClick={() => go(p)}
                                    className={
                                        "min-w-[2.25rem] rounded border px-3 py-1 " +
                                        (active
                                            ? "border-blue-600 bg-blue-600 text-white"
                                            : "border-gray-300 text-blue-600 hover:bg-blue-50")
                                    }
                                >
                                    {p}
                                </button>
                            </li>
                        );
                    })}

                    <li>
                        <button onClick={() => go(page + 1)} className="rounded border border-gray-300 px-2 py-1 text-blue-600 hover:bg-blue-50">
                            &gt;
                        </button>
                    </li>
                    <li>
                        <button onClick={() => go(totalPages)} className="rounded border border-gray-300 px-2 py-1 text-blue-600 hover:bg-blue-50">
                            &gt;|
                        </button>
                    </li>
                </ul>
            </nav>
        );
    }

    return (
        <div className="w-full p-3 bg-[#F6F6F6] min-h-screen">
            <Breadcrumb
                title="Reviews"
                paths={[
                    { name: "Home" },
                    { name: "Reviews ", color: "text-blue-400" },
                ]}
            />

            <div className="w-full bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded mb-6 text-sm">
                ⚠️ Warning: You must enter your OpenCart API information before you can download extensions or make any purchases!
            </div>

            <div className="border border-gray-300 p-2">Extension List</div>

            <div className="border border-gray-300 p-2 w-full bg-white">
                <div className="flex items-center mb-6 pt-2 justify-between">
                    <div>
                        {["All", "Recommended", "Free", "Paid", "Purchased"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => {
                                    setActiveTab(tab);
                                    setPage(1); // reset page when tab changes
                                }}
                                className={`px-2 py-1 border border-gray-300 ${activeTab === tab ? "bg-gray-200" : "bg-white hover:bg-gray-100"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <SortBy />
                </div>

                <div className="bg-white p-4">
                    <ExtensionCard items={paginatedExtensions} />
                    <Pagination page={page} totalPages={totalPages} onChange={setPage} />
                </div>
            </div>
        </div>
    );
}
