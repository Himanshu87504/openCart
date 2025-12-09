import React from 'react'
import Table from '../../../Table.jsx'

const attributesData = [
    { id: 1, APIUserName: "Default", Status: "Enabled", DateAdded: "21/07/2024", DateModified: "21/07/2024" },
];

const attributeHeadings = {
    heading1: "API UserName^",
    heading2: "Status",
    heading3: "Date Added",
    heading4: "Date Modified",
    heading6: "Action"
};


const Api = () => {
    return (
        <div>
            <Table
                data={attributesData}
                headings={attributeHeadings}
                pageSize={10}
                link={"Api"}
                Head={"Api List"}
            />
        </div>
    )
}

export default Api