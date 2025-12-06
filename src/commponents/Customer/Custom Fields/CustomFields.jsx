import React from 'react'
import Table from '../../../Table.jsx'

const Headings = {
    heading1: "Custom Field Name",
    heading3: "Location",
    heading4: "	Type",
    heading6: "Action"
};

const Data = [
    { id: 1, CustomFieldName: "234542", Location: "1qwer", Type: "Checkbox", Disabled: "Disabled" },
    { id: 2, name: "Description" },

];

const CustomFields = () => {
    return (
        <div>
            <Table
                data={Data}
                headings={Headings}
                pageSize={10}
                link={"CustomFields"}
            />
        </div>
    )
}

export default CustomFields 