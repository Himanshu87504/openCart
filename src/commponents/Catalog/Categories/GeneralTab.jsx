import React from 'react'
import { RiEnglishInput } from "react-icons/ri";

const GeneralTab = () => {
    return (
        <div className="px-1 py-5 text-sm">

            {/* Language Header */}
            <div className="inline-flex items-center gap-2 rounded-t border border-gray-200 border-b-white px-3 py-2 text-xs">
                <div className="text-red-400">
                    <RiEnglishInput />
                </div>
                <div>English</div>
            </div>

            {/* Line Under Language */}
            <div className="relative left-21 w-10/12 border border-gray-200"></div>

            <div className="space-y-3">

                {/* Category Name */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 pt-5 border-b border-gray-200 pb-3">
                    <div className="w-full md:w-44 md:pl-10 text-sm font-medium">
                        <span className="text-red-500">*</span> Category Name
                    </div>

                    <div className="flex-1 w-full">
                        <input
                            className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                            value="value"
                            onChange={(e) => handleChange("name", e.target.value)}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-b border-gray-200 pb-3">
                    <div className="w-full md:w-44 md:pl-12 text-sm font-medium">
                        Description
                    </div>

                    <div className="flex-1 w-full">

                        {/* Toolbar */}
                        <div className="flex flex-wrap items-center gap-2 border border-gray-200 border-b-0 bg-gray-100 px-2 py-1 text-xs">
                            <button className="px-1 font-semibold">B</button>
                            <button className="px-1 italic">I</button>
                            <button className="px-1 underline">U</button>
                            <span className="h-4 border-l border-gray-200" />
                            <span className="text-gray-500">Format</span>
                            <span className="text-gray-500">Font</span>
                            <span className="text-gray-500">Size</span>
                        </div>

                        <textarea
                            className="h-40 w-full resize-none rounded-b border border-gray-200 px-3 py-2 text-sm"
                            value="Des--"
                            onChange={(e) => handleChange("description", e.target.value)}
                            placeholder="Description"
                        />
                    </div>
                </div>

                {/* Meta Tag Title */}
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 border-b border-gray-200 pb-3">
                    <div className="w-full md:w-44 md:pl-10 text-sm font-medium">
                        <span className="text-red-500">*</span> Meta Tag Title
                    </div>
                    <div className="flex-1 w-full">
                        <input
                            className="w-full rounded border border-gray-200 px-3 py-2 text-sm"
                            value="meta tag"
                            onChange={(e) => handleChange("metaTitle", e.target.value)}
                        />
                    </div>
                </div>

                {/* Meta Tag Description */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-b border-gray-200 pb-3">
                    <div className="w-full md:w-44 md:pl-10 text-sm font-medium">
                        Meta Tag Description
                    </div>
                    <div className="flex-1 w-full">
                        <textarea
                            className="h-24 w-full resize-none rounded border border-gray-200 px-3 py-2 text-sm"
                            value=" Meta Tag Description"
                            onChange={(e) => handleChange("metaDescription", e.target.value)}
                            placeholder="Meta Tag Description"
                        />
                    </div>
                </div>

                {/* Meta Tag Keywords */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-6 pb-4 border-b border-gray-200">
                    <div className="w-full md:w-44 md:text-right text-sm font-medium">
                        Meta Tag Keywords
                    </div>

                    <div className="flex-1 w-full">
                        <textarea
                            className="h-24 w-full resize-none rounded border border-gray-200 px-3 py-2 text-sm"
                            value=" Meta Tag Keywords"
                            onChange={(e) => handleChange("metaKeywords", e.target.value)}
                            placeholder="Meta Tag Keywords"
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default GeneralTab