import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Banner List",
    heading6: "Action"

};

const attributesData = [
    { id: 1, name: "Home Page Slideshow", subName: "Enabled" },
    { id: 2, name: "HP Products", subName: "Enabled" },
    { id: 3, name: "Manufacturers", subName: "Enabled" },
];


const Banner = () => {
    return (
        <Table
            data={attributesData}
            headings={Headings}
            pageSize={5}
            link={"Banners"}
        />
    )
}

export default Banner