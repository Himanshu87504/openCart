import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Username",
    heading3: "Status",
    heading4: "Date Added",
    heading6: "Action",
};

const Data = [
    { id: 1, Username: "demo", Status: "Enabled", DateAdded: "21/07/2024" },
    { id: 2, name: "Description" },

];

const User = () => {
    return (
        <Table
            data={Data}
            headings={Headings}
            pageSize={10}
            link={"User"}
        />
    )
}

export default User 