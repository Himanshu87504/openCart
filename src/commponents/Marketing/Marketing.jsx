import React from 'react'
import Table from '../../Table.jsx'

const Headings = {
    heading1: "Campaign Name",
    heading2: "	Code",
    heading3: "Click",
    heading4: "Orders",
    heading6: "Action"
};

const Marketing = () => {
    return (
        <Table

            headings={Headings}
            pageSize={10}
            link={"Marketing"}
        />
    )
}

export default Marketing