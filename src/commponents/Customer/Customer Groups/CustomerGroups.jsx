import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Customer Group Name",
    heading3: "Sort Order",
    heading6: "Action",
};

const Data = [
    { id: 1, CustomerGroupName: "234542", SortOrder: 2 },
    { id: 2, name: "Description" },

];

const CustomerGroups = () => {
    return (
        <div>
            <Table
                data={Data}
                headings={Headings}
                pageSize={10}
                link={"CustomerGroups"}
            />
        </div>
    )
}

export default CustomerGroups