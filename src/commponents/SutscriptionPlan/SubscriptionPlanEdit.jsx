import Breadcrumb from "../Breadcrumb";
import { FaEdit } from "react-icons/fa";

export default function SubscriptionPlanEdit() {
    return (
        <div >
            <Breadcrumb
                title="Reviews"
                paths={[
                    { name: "Home" },
                    { name: "Reviews ", color: "text-blue-400" },
                ]}
            />
            <div className="w-full p-5 bg-[#F8F8F8]">
                <div className="w-full border-b-0 border border-gray-300 bg-[#F8F8F8] p-2 flex items-center gap-2">
                    <div><FaEdit /></div>
                    <h1 className="text-md text-gray-700 font-semibold mb-4l">Edit Subscription Plan</h1>
                </div>
                <div className="w-full bg-white px-8 py-6 border p-4 border-gray-300">

                    <div className="mb-8 flex">
                        <label className="flex mb-2 text-sm font-semibold text-gray-700">
                            <span className="text-red-500 mr-1">*</span>
                            Subscription Plan Name
                        </label>
                        <div className="w-full max-w-4xl pl-3">
                            <div className="flex w-full">
                                {/* flag placeholder */}
                                <div className="flex items-center justify-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-white text-xs">
                                    EN
                                </div>
                                <input
                                    type="text"
                                    defaultValue="Subscription Plan 1"
                                    className="flex-1 border border-gray-300 rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* TRIAL SECTION */}
                    <h2 className="text-2xl font-semibold mb-3">Trial</h2>

                    {/* Trial Duration */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-start gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700 mt-2">
                            Trial Duration
                        </span>
                        <div className="w-full max-w-4xl">
                            <input
                                type="number"
                                defaultValue={10}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                The duration is the number of times the user will make a payment.
                            </p>
                        </div>
                    </div>

                    {/* Trial Cycle */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-start gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700 mt-2">
                            Trial Cycle
                        </span>
                        <div className="w-full max-w-4xl">
                            <input
                                type="number"
                                defaultValue={1}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Subscription amounts are calculated by the frequency and cycles.
                            </p>
                        </div>
                    </div>

                    {/* Trial Frequency */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-start gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700 mt-2">
                            Trial Frequency
                        </span>
                        <div className="w-full max-w-4xl">
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Day</option>
                                <option>Week</option>
                                <option>Month</option>
                                <option>Year</option>
                            </select>
                            <p className="mt-1 text-xs text-gray-500">
                                If you use a frequency of "week" and a cycle of "2", then the user
                                will be billed every 2 weeks.
                            </p>
                        </div>
                    </div>

                    {/* Trial Status */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-center gap-x-8 mb-10">
                        <span className="text-sm font-semibold text-gray-700">
                            Trial Status
                        </span>
                        <button
                            type="button"
                            className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#0d8bf2]"
                        >
                            <span className="inline-block h-5 w-5 rounded-full bg-white translate-x-6 shadow" />
                        </button>
                    </div>

                    {/* SUBSCRIPTION SECTION */}
                    <h2 className="text-2xl font-semibold mb-4">Subscription</h2>

                    {/* Duration */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-start gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700 mt-2">
                            Duration
                        </span>
                        <div className="w-full max-w-4xl">
                            <input
                                type="number"
                                defaultValue={0}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                The duration is the number of times the user will make a payment,
                                set this to 0 if you want payments until they are cancelled.
                            </p>
                        </div>
                    </div>

                    {/* Cycle */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-start gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700 mt-2">
                            Cycle
                        </span>
                        <div className="w-full max-w-4xl">
                            <input
                                type="number"
                                defaultValue={1}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <p className="mt-1 text-xs text-gray-500">
                                Subscription amounts are calculated by the frequency and cycles.
                            </p>
                        </div>
                    </div>

                    {/* Frequency */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-start gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700 mt-2">
                            Frequency
                        </span>
                        <div className="w-full max-w-4xl">
                            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option>Day</option>
                                <option>Week</option>
                                <option>Month</option>
                                <option>Year</option>
                            </select>
                            <p className="mt-1 text-xs text-gray-500">
                                If you use a frequency of "week" and a cycle of "2", then the user
                                will be billed every 2 weeks.
                            </p>
                        </div>
                    </div>

                    {/* Status */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-center gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700">
                            Status
                        </span>
                        <button
                            type="button"
                            className="relative inline-flex h-7 w-14 items-center rounded-full bg-[#0d8bf2]"
                        >
                            <span className="inline-block h-5 w-5 rounded-full bg-white translate-x-6 shadow" />
                        </button>
                    </div>

                    {/* Sort Order */}
                    <div className="grid grid-cols-[140px_minmax(0,1fr)] items-start gap-x-8 mb-4">
                        <span className="text-sm font-semibold text-gray-700 mt-2">
                            Sort Order
                        </span>
                        <div className="w-full max-w-4xl">
                            <input
                                type="number"
                                defaultValue={0}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
