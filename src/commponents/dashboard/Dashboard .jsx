import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { FaEye } from "react-icons/fa";

// adjust these paths to where your components live
import WorldMap from "./WorldMap";
import SalesAnalytics from "./SalesAnalytics";

const orders = [
    {
        orderId: 3269,
        customer: "tester user",
        status: "Pending",
        dateAdded: "26/11/2025",
        total: 105.0,
        currency: "USD",
    },
    {
        orderId: 3268,
        customer: "SHIBASISH CHINA",
        status: "Pending",
        dateAdded: "26/11/2025",
        total: 105.0,
        currency: "USD",
    },
    {
        orderId: 3267,
        customer: "nour ayman",
        status: "Pending",
        dateAdded: "17/11/2025",
        total: 90.24,
        currency: "EUR",
    },
    {
        orderId: 3266,
        customer: "Angel Celso",
        status: "Pending",
        dateAdded: "17/11/2025",
        total: 105.0,
        currency: "USD",
    },
    {
        orderId: 3265,
        customer: "Anil V",
        status: "Pending",
        dateAdded: "17/11/2025",
        total: 105.0,
        currency: "USD",
    },
];

const boxes = [
    {
        name: "TOTAL ORDERS",
        PERCENT: "0 %",
        logo: <CiShoppingCart size={50} />,
        Total: "2.9 K",
    },
    {
        name: "TOTAL SALES",
        PERCENT: "10 %",
        logo: <CiShoppingCart size={50} />,
        Total: "1.5 K",
    },
    {
        name: "TOTAL USERS",
        PERCENT: "2 %",
        logo: <CiShoppingCart size={50} />,
        Total: "980",
    },
    {
        name: "TOTAL RETURNS",
        PERCENT: "0 %",
        logo: <CiShoppingCart size={50} />,
        Total: "50",
    },
];

const formatTotal = (total, currency) => {
    const symbol = currency === "EUR" ? "€" : "$";
    return `${symbol}${total.toFixed(2)}`;
};

const Dashboard = () => {
    return (
        <div className="w-full bg-[#F6F6F6] pl-4 p-5">
            {/* HEADER BAR */}
            <div className="flex items-center gap-1.5 border-b border-gray-200 mb-4">
                <h1 className="text-3xl font-light">Dashboard</h1>
                <h4 className="pt-2 text-gray-500">Home</h4>
                <MdKeyboardArrowRight className="mt-2 text-gray-500" />
                <h4 className="mt-2 text-blue-400">Dashboard</h4>
            </div>

            {/* DASHBOARD BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {boxes.map((box, index) => (
                    <div
                        key={index}
                        className="group flex flex-col border border-gray-300 rounded-lg overflow-hidden cursor-pointer"
                    >
                        {/* TOP SECTION */}
                        <div className="flex justify-between bg-[#3C93CB] text-white p-2">
                            <h2 className="font-semibold">{box.name}</h2>
                            <p>{box.PERCENT}</p>
                        </div>

                        {/* MIDDLE SECTION */}
                        <div className="flex justify-between bg-[#2686C5] h-28 items-center px-4 text-white">
                            <div
                                className="text-white transition-all duration-300 transform 
                           group-hover:scale-125 group-hover:text-gray-200"
                            >
                                {box.logo}
                            </div>
                            <p className="text-3xl font-bold">{box.Total}</p>
                        </div>

                        {/* BOTTOM SECTION */}
                        <div className="bg-[#247AB2] p-1 text-white text-sm">
                            View more...
                        </div>
                    </div>
                ))}
            </div>

            {/* MAP + ANALYTICS */}
            <div className="flex flex-col lg:flex-row w-full pt-4 gap-4">
                <div className="flex-1">
                    <WorldMap />
                </div>
                <div className="flex-1">
                    <SalesAnalytics />
                </div>
            </div>

            <div className="  md:flex gap-15">
                <div className="border-2 border-gray-200 mt-8 pt-4 w-sm h-28">
                    <div className="flex gap-2.5 items-center pb-3 pl-3">
                        <SlCalender />
                        <div>Recent Activity</div>
                    </div>
                    <div className="flex justify-center items-center w-full h-8 text-center text-gray-500 bg-white">
                        No Result
                    </div>
                </div>


                <div className="mt-8  border border-gray-300">
                    <div className="flex gap-2.5 items-center pb-3 pl-3">
                        <SlCalender />
                        <div>Latest Orders</div>
                    </div>

                    {/* ORDERS TABLE */}
                    <div className="w-2sm md:w-3xl overflow-x-auto bg-white border border-gray-200">
                        <table className="min-w-full border-collapse text-sm">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th className="px-4 py-2 text-left font-semibold">Order ID</th>
                                    <th className="px-4 py-2 text-left font-semibold">Customer</th>
                                    <th className="px-4 py-2 text-left font-semibold">Status</th>
                                    <th className="px-4 py-2 text-left font-semibold">
                                        Date Added
                                    </th>
                                    <th className="px-4 py-2 text-left font-semibold">Total</th>
                                    <th className="px-4 py-2 text-center font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr
                                        key={order.orderId}
                                        className="border-b last:border-b-0 hover:bg-gray-50"
                                    >
                                        <td className="px-4 py-2">{order.orderId}</td>
                                        <td className="px-4 py-2">{order.customer}</td>
                                        <td className="px-4 py-2">{order.status}</td>
                                        <td className="px-4 py-2">{order.dateAdded}</td>
                                        <td className="px-4 py-2">
                                            {formatTotal(order.total, order.currency)}
                                        </td>
                                        <td className="px-4 py-2 text-center">
                                            <button className="inline-flex h-9 w-9 items-center justify-center rounded bg-[#479CB3] text-white hover:bg-[#479CB3]">
                                                <FaEye />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
