import React, { useState, useEffect } from "react";
import { CiBellOn, CiHome } from "react-icons/ci";
import { FaLanguage } from "react-icons/fa";
import { IoMdArrowDropdown, IoIosLogOut, IoIosArrowDown } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import NavaData from "./Navbar.json";
import { GrCatalog } from "react-icons/gr";
import { VscExtensions } from "react-icons/vsc";
import { SiMaterialdesignicons } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

// ICON MAP
const iconMap = {
    GrCatalog: GrCatalog,
    VscExtensions: VscExtensions,
    SiMaterialdesignicons: SiMaterialdesignicons,
    GrSystem: GrSystem
};

const stats = [
    { label: "Orders Completed", value: 0 },
    { label: "Orders Processing", value: 100 },
    { label: "Other Statuses", value: 0 },
];

const Navbar = ({ hameburger, setHameburger }) => {
    const [openUserMenu, setOpenUserMenu] = useState(false);
    const [openItems, setOpenItems] = useState({});
    const [openSubItems, setOpenSubItems] = useState({});

    // Automatically open on large screens and close on small screens
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setHameburger(true);
            } else {
                setHameburger(false);
            }
        };
        handleResize(); // run once
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [setHameburger]);

    const toggleItem = (index) => {
        setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const toggleSubItem = (index) => {
        setOpenSubItems((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    return (
        <>
            {/* TOP NAVBAR */}
            <div className="flex border-2 border-gray-200 w-full justify-between items-center pb-1.5 h-18 pr-6 relative">
                <div className="flex items-center">
                    <img
                        src="https://a.storyblok.com/f/118211/3000x2000/ae617da75c/opencart-logo.png"
                        width={250}
                        height={150}
                        className="h-30 hidden md:block cursor-pointer"
                        alt="logo"
                    />

                    {/* MOBILE HAMBURGER BUTTON */}
                    <div onClick={() => setHameburger(!hameburger)}>
                        <GiHamburgerMenu className="text-3xl cursor-pointer md:hidden ml-5" />
                    </div>
                </div>

                <div className="flex gap-5 items-center">
                    <CiBellOn className="text-4xl" />
                    <FaLanguage className="text-3xl" />

                    {/* USER MENU */}
                    <div className="flex gap-1.5 items-center relative">
                        <img
                            src="your-image-url"
                            className="w-9 h-9 rounded-full object-cover border"
                            alt="user"
                        />
                        <div className="text-1xl font-light">demo demo</div>

                        <div
                            onClick={() => setOpenUserMenu(!openUserMenu)}
                            className="cursor-pointer flex items-center"
                        >
                            <IoMdArrowDropdown size={22} />
                        </div>

                        {openUserMenu && (
                            <div className="absolute top-15 right-0 w-48 bg-white border border-gray-300 p-4 z-50 rounded shadow-md">
                                <div className="flex items-center gap-2 pb-2 border-b border-gray-400">
                                    <IoPersonCircle className="text-xl" />
                                    <div>Profile</div>
                                </div>

                                <div className="py-2 border-b border-gray-300">
                                    <div className="text-[15px] text-gray-600">Store</div>
                                    <div className="text-sm font-medium cursor-pointer">Your Store</div>
                                </div>

                                <div className="pt-2 flex flex-col gap-1">
                                    <div className="text-[15px] text-gray-600">Help</div>
                                    <div className="text-sm font-medium cursor-pointer">Opencart Home page</div>
                                    <div className="text-sm font-medium cursor-pointer">Documentation</div>
                                    <div className="text-sm font-medium cursor-pointer">Support Forum</div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center gap-1 cursor-pointer">
                        <IoIosLogOut className="text-xl" />
                        <div className="font-light">LogOut</div>
                    </div>
                </div>
            </div>

            {/* SIDEBAR */}
            <div
                className={`absolute top-18 left-0 min-h-screen w-60 bg-[#242D37] text-white z-50
        transform transition-transform duration-500
        ${hameburger ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex pt-1 items-center gap-0.5 pb-3">
                    <GiHamburgerMenu className="text-sm ml-5" />
                    <p className="text-sm">NAVIGATION</p>
                </div>

                <div className="flex p-3 gap-1.5 items-center pl-5 bg-black w-full text-blue-300">
                    <CiHome className="text-[18px]" />
                    <Link to={`/`}>
                        <p className="text-[15px]">Dashboard</p>
                    </Link>
                </div>

                {/* MENU ITEMS */}
                {NavaData.map((item, index) => {
                    const Icon = iconMap[item.logo];
                    return (
                        <div key={index} className="flex flex-col">
                            <div
                                className="flex items-center w-full h-10 pl-5 pr-3 cursor-pointer hover:bg-black hover:text-white"
                                onClick={() => toggleItem(index)}
                            >
                                <div className={`flex items-center gap-4 ${openItems[index] ? "text-blue-400" : "text-white"}`}>
                                    {Icon && <Icon className="text-[16px]" />}
                                    <div className="w-40 flex justify-between">
                                        <h3 className="text-[15px] font-semibold mb-1">{item.heading}</h3>
                                        <IoIosArrowDown
                                            className={`transition-transform duration-300 ${openItems[index] ? "rotate-180 text-blue-400" : "text-white"}`}
                                        />
                                    </div>
                                </div>
                            </div>

                            {openItems[index] && (
                                <ul className="text-xs ml-3 space-y-1 mt-1">
                                    {item.subHeading?.map((sub, i) => (
                                        <Link
                                            to={`/${sub}`} // replace with your actual path
                                            key={i}
                                            className="flex gap-3 text-[15px] text-[#696969] cursor-pointer hover:text-gray-300 transition-all duration-300 hover:translate-x-3"
                                        >
                                            <MdKeyboardDoubleArrowRight />
                                            <li className="cursor-pointer">{sub}</li>
                                        </Link>
                                    ))}

                                    {item.heading2 && (
                                        <>
                                            <div
                                                className="flex items-center justify-between cursor-pointer mt-2"
                                                onClick={() => toggleSubItem(index)}
                                            >
                                                <h3 className="text-[16px] font-semibold">{item.heading2}</h3>
                                                <IoIosArrowDown
                                                    className={`transition-transform duration-300 ${openSubItems[index] ? "rotate-180" : ""}`}
                                                />
                                            </div>

                                            {openSubItems[index] && (
                                                <ul className="text-xs ml-5 space-y-1 mt-1">
                                                    {item.subHeading2?.map((sub2, j) => (
                                                        <li key={j} className="cursor-pointer hover:text-gray-300">{sub2}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    )}
                                </ul>
                            )}
                        </div>
                    );
                })}

                <div className="p-4 mt-6">
                    <div className="bg-[#2D3746] text-white p-3 w-full max-w-sm shadow-md mb-80">
                        {stats.map((item, idx) => (
                            <div key={item.label} className={idx !== stats.length - 1 ? "mb-6" : ""}>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[10px]">{item.label}</span>
                                    <span className="text-[10px]">{item.value}%</span>
                                </div>

                                <div className="w-full h-1 rounded-full bg-[#1B2431]">
                                    <div className="h-1 rounded-full bg-white" style={{ width: `${item.value}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
