import React from "react";
import Table from "../../../Table.jsx";
import Breadcrumb from "../../Breadcrumb.jsx";

const Headings = {
    heading1: "Banner Name",
    heading2: "Key",
    heading3: "Value",
    heading4: "Sort Order",
    heading6: "Action",
};

const attributesData = [
    { id: 1, BannerName: "Home Page Slideshow", Key: 1, Value: "hello", SortOrder: 3 },
    { id: 2, BannerName: "Home Page Slideshow", Key: 1, Value: "hello", SortOrder: 3 },
    { id: 3, BannerName: "Home Page Slideshow", Key: 1, Value: "hello", SortOrder: 3 },
];

const SEOURL = () => {
    return (
        <div>
            <Breadcrumb
                title="Seo Url"
                paths={[
                    { name: "Home" },
                    { name: "Seo Url", color: "text-blue-400" },
                ]}
            />

            <Table
                data={attributesData}
                headings={Headings}
                pageSize={5}
                link={"Banners"}
            />
        </div>
    );
};

export default SEOURL;
