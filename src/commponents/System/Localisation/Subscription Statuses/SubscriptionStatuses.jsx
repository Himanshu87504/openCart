import React from 'react'
import Breadcrumb from '../../../Breadcrumb';
import Table from '../../../../Table.jsx';


const Headings = {
    heading1: "Subscription Status Name",
    heading6: "Action"
};

const data = [
    {
        id: 1,
        SubscriptionStatusName: "Active",
    }
];

const SubscriptionStatuses = () => {
    return (
        <div>

            <div>
                <div>
                    <Breadcrumb
                        title="Currency"
                        paths={[
                            { name: "Home" },
                            { name: "Language", color: "text-blue-400" },
                        ]}
                    />

                    <Table
                        data={data}
                        headings={Headings}
                        pageSize={10}
                        link={"SubscriptionStatuses"}
                        Head={"Subscription Statuses"}
                    />
                </div>
            </div>
        </div>
    )
}

export default SubscriptionStatuses