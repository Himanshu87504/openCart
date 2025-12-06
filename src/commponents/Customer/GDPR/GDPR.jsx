import React from 'react'
import Table from '../../../Table.jsx';
const Headings = {
    heading1: "E-Mail",
    heading3: "	Request",
    heading4: "	Status"
};

const GDPR = () => {
    return (
        <>
            <Table
                headings={Headings}
            />
        </>
    )
}

export default GDPR