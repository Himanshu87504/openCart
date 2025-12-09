import React from 'react'
import Table from '../../../Table.jsx'

const attributesData = [
    { id: 1, UserGroupName: "Administrator" },
    { id: 2, UserGroupName: "Demonstration" },
];

const attributeHeadings = {
    heading1: "User Group Name",
    heading6: "Action"
};


const Usergroup = () => {
    return (
        <div>
            <Table
                data={attributesData}
                headings={attributeHeadings}
                pageSize={10}
                link={"Usergroup"}
                Head={"Usergroup"}
            />
        </div>
    )
}

export default Usergroup