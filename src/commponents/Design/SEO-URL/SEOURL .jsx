import React from "react";
import Table from "../../../Table.jsx";

const Headings = {
    heading1: "Banner Name",
    heading2: "Key",
    heading3: "Value",
    heading4: "Sort Order",
    heading6: "Action",
};

const attributesData = [
    { id: 1, name: "Home Page Slideshow", Key: 1, Value: "hello", SortOrder: 3 },
    { id: 2, name: "HP Products" },
    { id: 3, name: "Manufacturers" },
];

const SEOURL = () => {
    return (
        <Table
            data={attributesData}
            headings={Headings}
            pageSize={5}
            link={"Banners"}
        />
    );
};

export default SEOURL;
