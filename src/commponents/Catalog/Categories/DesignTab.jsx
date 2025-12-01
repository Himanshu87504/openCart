import React from 'react'

const DesignTab = () => {
    return (
        <div className="px-6 py-5 text-sm text-gray-500">

            <div className="border border-gray-300 text-sm">

                {/* Header */}
                <div className="flex font-medium h-8 bg-[#F8F9FA]">
                    <div className="w-60 flex items-center pl-2 border-r border-gray-300">
                        Stores
                    </div>
                    <div className="flex-1 flex items-center pl-2">
                        Layout Override
                    </div>
                </div>

                {/* Row */}
                <div className="flex h-12 border-t border-gray-300 hover:bg-[#ECECEC]">

                    {/* Store Column */}
                    <div className="w-60 flex items-center pl-2 border-r border-gray-300">
                        Default
                    </div>

                    {/* Select Box */}
                    <div className="flex-1 flex items-center">
                        <div className="w-full px-2">
                            <div className="flex border border-gray-300 rounded overflow-hidden">

                                <div className="relative w-full bg-white">
                                    <select className="block h-9 w-full appearance-none px-3 pr-8 text-sm leading-5 border-0 focus:outline-none">
                                        <option value=""></option>
                                        <option value="cameras">Cameras</option>
                                    </select>

                                    <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500 text-xs">
                                        ▼
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default DesignTab