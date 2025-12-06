import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Customer Name",
    heading3: "EMail",
    heading4: "Customer Group",
    heading6: "Action",
};

const Data = [
    { id: 1, CustomerName: "234542", EMail: "zainabbintaytahir@gmail.com", CustomerGroup: "Aswin J", subheading: "Enable" },
    { id: 2, name: "Description" },

];

const Customers = () => {
    return (
        <Table
            data={Data}
            headings={Headings}
            pageSize={10}
            link={"Customers"}
        />
    )
}

export default Customers