import React from 'react'
import Table from '../../../Table.jsx'
import Breadcrumb from '../../Breadcrumb.jsx';

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
            <Breadcrumb
                title="Custom Field Name"
                paths={[
                    { name: "Home" },
                    { name: "Custom Field Name", color: "text-blue-400" },
                ]}
            />

            <Table
                data={Data}
                headings={Headings}
                pageSize={10}
                link={"CustomFields"}
                Head={"Custom Field Name"}
            />
        </div>
    )
}

export default CustomFields 