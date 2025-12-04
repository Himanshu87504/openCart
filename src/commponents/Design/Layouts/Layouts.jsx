import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Layout Name",

    heading4: "Action",
};

const Layouts = () => {
    return (
        <div>
            <Table
                // data={}
                headings={Headings}
                pageSize={5}
                link={"AttributesGroupEdit"}
            />
        </div>
    )
}

export default Layouts