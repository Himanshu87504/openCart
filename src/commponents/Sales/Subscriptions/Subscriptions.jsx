import React from 'react'
import Table from '../../../Table.jsx';

const Headings = {
    heading1: "Subscription ID",
    heading2: "Order ID",
    heading3: "Customer",
    heading4: "Status",
    heading6: "Action"
};

const Heading = [
    // { id: 1, SubscriptionID: 23, OrderID: 23, Customer: "himanshu", Status: "complete" }
];

const Subscriptions = () => {
    return (
        <Table
            data={Heading}       // ✅ FIXED
            headings={Headings}
            pageSize={5}
            link={"Startup"}
            Head="Subscription List"   // Optional top title
        />
    );
}

export default Subscriptions;
