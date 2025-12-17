import React from 'react'
import Breadcrumb from "../../../Breadcrumb"
import Table from '../../../../Table.jsx';


const Headings = {
    heading1: "Store Name",
    heading2: "Address",
    heading6: "Action"
};

const StoreLocation = () => {
    return (
        <div>
            <Breadcrumb
                title="Store Location"
                paths={[
                    { name: "Home" },
                    { name: "Store Location", color: "text-blue-400" },
                ]}
            />

            <Table
                headings={Headings}
                pageSize={10}
                link={"Api"}
                Head={"Store Location"}
            />
        </div>
    )
}

export default StoreLocation