import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Customer",
    heading3: "EMail",
    heading4: "Customer Group",
    heading5: "	Type",
    heading6: "Date Added",
    heading7: "Action"
}

const CustomerApprovals = () => {
    return (
        <>
            <Table
                //   data={Data}
                headings={Headings}
                pageSize={10}
            //   link={"Customers"}
            />
        </>
    )
}

export default CustomerApprovals