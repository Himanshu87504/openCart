import React from 'react'
import Table from '../../../Table.jsx'
import Breadcrumb from '../../Breadcrumb.jsx';

const Headings = {
    heading1: "Banner List",
    heading6: "Action"

};

const attributesData = [
    { id: 1, BannerList: "Home Page Slideshow", subheading: "Enabled" },
    { id: 2, BannerList: "HP Products", subheading: "Enabled" },
    { id: 3, BannerList: "Manufacturers", subheading: "Enabled" },
];


const Banner = () => {
    return (
        <div>
            <Breadcrumb
                title="Edit Banner"
                paths={[
                    { name: "Home" },
                    { name: "Edit Banner", color: "text-blue-400" },
                ]}
            />

            <Table
                data={attributesData}
                headings={Headings}
                pageSize={5}
                link={"Banners"}
            />
        </div>
    )
}

export default Banner