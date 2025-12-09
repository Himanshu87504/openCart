import React from 'react'
import Table from '../../../Table.jsx'
import Breadcrumb from '../../Breadcrumb.jsx';

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
        <div>
            <Breadcrumb
                title="Customer"
                paths={[
                    { name: "Home" },
                    { name: "Customer", color: "text-blue-400" },
                ]}
            />
            <Table
                data={Data}
                headings={Headings}
                pageSize={10}
                link={"Customers"}
                Head={"Customer"}
            />
        </div>
    )
}

export default Customers