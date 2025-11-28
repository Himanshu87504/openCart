import React from 'react'
import { GiUsaFlag } from "react-icons/gi";

const ProductSeoTab = () => {
    return (
        <div className="px-6 py-5 text-sm text-gray-500">

            <div className="px-6 py-5 text-sm">

                <div className="mb-4 rounded border border-blue-200 bg-blue-50 px-4 py-3 text-xs text-gray-700">
                    <span className="mr-2 inline-block align-middle text-base">ℹ️</span>
                    Do not use spaces, instead replace spaces with - and make sure the SEO URL
                    is globally unique.
                </div>


                <div className="border border-gray-300 text-sm">
                    <div className="flex  font-medium h-8 ">
                        <div className="border border-gray-300 w-60 pt-1 pl-1 font-semibold">Stores</div>
                        <div className="border border-gray-300 w-full pt-1 pl-1 font-semibold">Keyword</div>
                    </div>

                    <div className="flex items-center  font-medium h-12 hover:bg-[#ECECEC]">

                        <div className="text-sm w-60 pl-1">Default</div>

                        <div className="w-full border border-[#F8F9FA] h-12">
                            <div className="flex items-center pt-2 pl-1 ">
                                <div className="flex h-8 w-10 items-center justify-center border border-r-0 bg-gray-100 text-[10px] pl-2 ">

                                    <GiUsaFlag className="text-2xl text-red-500" />
                                </div>
                                <input
                                    className="h-8 w-full rounded-r border border-gray-300 px-3 text-sm bg-white"
                                    placeholder="cameras"
                                    defaultValue="cameras"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductSeoTab