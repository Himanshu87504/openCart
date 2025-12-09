
import { FaEdit } from "react-icons/fa";
import Breadcrumb from "../../Breadcrumb";

export default function AttributesGroupEdit() {
    return (
        <div className="min-h-screen bg-[#f5f5f5] py-6">
            <Breadcrumb
                title="Attributes"
                paths={[
                    { name: "Home" },
                    { name: "Attributes", color: "text-blue-400" },
                ]}
            />
            <div className="mx-auto w-[96%] max-w-6xl bg-white border border-[#e5e5e5]">
                {/* Header */}
                <div className="flex items-center px-6 py-3 border-b border-[#e5e5e5] bg-[#f8f8f8]">
                    <span className="mr-2 text-lg"><FaEdit /></span>
                    <span className="text-lg font-semibold text-[#444]">
                        Edit Attribute Group
                    </span>
                </div>

                {/* Body */}
                <div className="px-6 py-6">

                    <div className="mb-6 flex gap-3 items-center">
                        <label className="text-sm font-semibold text-[#555] w-30 md:w-60">
                            <span className="text-red-500 mr-1">*</span>
                            Attribute Group Name
                        </label>
                        <div className="flex w-full">
                            <div className="flex items-center justify-center px-3 border border-r-0 border-[#d7d7d7] bg-[#f8f8f8] rounded-l-md text-xs">
                                🇬🇧
                            </div>
                            <input
                                type="text"
                                defaultValue="Memory"
                                className="flex-1 border border-[#d7d7d7] rounded-r-md px-3 py-2 text-sm focus:outline-none focus:ring-0"
                            />
                        </div>
                    </div>

                    {/* Sort Order */}
                    <div className="mb-2 flex items-center">
                        <label className="text-sm font-semibold text-[#555] w-34">
                            Sort Order
                        </label>
                        <input
                            type="number"
                            defaultValue={2}
                            className="w-full border border-[#d7d7d7] rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-0"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
