import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Order Id",
    heading3: "Store",
    heading4: "Customer",
    heading5: "Stautus",
    heading6: "Action",
};

const Data = [
    { id: 1, name: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 2, name: "Description" },
    { id: 3, name: "No. of Cores" },
    { id: 4, name: "test 1" },
    { id: 5, name: "test 2" },
    { id: 6, name: "test 3" },
    { id: 7, name: "test 4" },
    { id: 8, name: "test 5" },
    { id: 9, name: "test 6" },
    { id: 10, name: "test 7" },
    { id: 11, name: "test 8" },
];

const Orders = () => {
    return (
        <>
            <Table
                data={Data}
                headings={Headings}
                pageSize={10}
                link={"Ordersview"}
            />
        </>
    );
};

export default Orders;
