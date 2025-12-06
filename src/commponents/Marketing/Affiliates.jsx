import React from 'react'
import Table from '../../Table.jsx'

const Headings = {
    heading1: "Custom Name",
    heading3: "Commission",
    heading6: "Action"
};

const Data = [
    { id: 1, CustomName: "123", Commission: 5.00, subheading: "Enabled" },
    { id: 2, name: "Description" },

];


const Affiliates = () => {
    return (
        <div>
            <Table
                data={Data}
                headings={Headings}
                pageSize={10}
                link={"Affiliates"}
            />
        </div>
    )
}

export default Affiliates