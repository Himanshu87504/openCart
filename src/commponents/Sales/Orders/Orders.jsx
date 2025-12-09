import React from 'react'
import Table from '../../../Table.jsx'
import Breadcrumb from '../../Breadcrumb.jsx';

const Headings = {
    heading1: "Order Id",
    heading3: "Store",
    heading4: "Customer",
    heading5: "Stautus",
    heading6: "Action",
};

const Data = [
    { id: 1, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 2, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 3, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 4, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 5, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 6, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 7, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 8, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 9, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 10, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
    { id: 11, OrderId: "2345432", store: 2, Customer: "Aswin J", Stautus: "Pending" },
];

const Orders = () => {
    return (
        <>
            <Breadcrumb
                title="Order"
                paths={[
                    { name: "Home" },
                    { name: "Order", color: "text-blue-400" },
                ]}
            />
            <Table
                data={Data}
                headings={Headings}
                pageSize={10}
                link={"Ordersview"}
                Head={"OrderView"}
            />
        </>
    );
};

export default Orders;
