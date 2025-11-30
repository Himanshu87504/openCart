// pages/ProductsEdit.jsx
import React, { useState } from "react";
import ProductTabs from "./ProductTabs";
import ProductGeneralTab from "./ProductGeneralTab";
import ProductDataTab from "./ProductDataTab";
import ProductLinksTab from "./ProductLinksTab.jsx";
import ProductAttributesTab from "./ProductAttributesTab.jsx";
import ProductOptionsTab from "./ProductOptionsTab.jsx";
import ProductSubscriptionTab from "./ProductSubscriptionTab.jsx";
import ProductDiscountTab from "./ProductDiscountTab.jsx";
import ProductSpecialTab from "./ProductSpecialTab.jsx";
import ProductImageTab from "./ProductImageTab.jsx";
import ProductRewardPointsTab from "./ProductRewardPointsTab.jsx";
import ProductReportTab from "./ProductReportTab.jsx";
import ProductDesignTab from "./ProductDesignTab.jsx";
import ProductSeoTab from "./ProductSeoTab.jsx";

const ProductsEdit = () => {
    const [activeTab, setActiveTab] = useState("General");

    return (
        <div className=" bg-[#F6F6F6]">


            <div className="px-6 py-5 text-sm ">
                <div className="border border-gray-300">
                    <div className="px-6 py-3 text-lg font-semibold border border-gray-300">Edit Product</div>
                    <ProductTabs activeTab={activeTab} onChange={setActiveTab} />
                    {activeTab === "General" && <ProductGeneralTab />}

                    {activeTab === "Data" && <ProductDataTab />}

                    {activeTab === "Links" && <ProductLinksTab />}

                    {activeTab === "Attribute" && <ProductAttributesTab />}

                    {activeTab === "Option" && <ProductOptionsTab />}

                    {activeTab === "Subscription" && <ProductSubscriptionTab />}

                    {activeTab === "Discount" && <ProductDiscountTab />}

                    {activeTab === "Special" && <ProductSpecialTab />}

                    {activeTab === "Image" && <ProductImageTab />}

                    {activeTab === "Reward Points" && <ProductRewardPointsTab />}

                    {activeTab === "SEO" && < ProductSeoTab />}

                    {activeTab === "Design" && <ProductDesignTab />}

                    {activeTab === "Report" && <ProductReportTab />}

                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default ProductsEdit;
