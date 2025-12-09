import React from 'react'
import Table from '../../../Table.jsx';

const Headings = {
    heading1: "Store Name",
    heading2: "Store URL",
    heading6: "Action"

};

const Data = [
    { id: 1, StoreName: "Your Store (Default)", StoreURL: "https://demo.opencart.com/" },

];

const Settings = () => {
    return (
        <Table
            data={Data}
            headings={Headings}
            pageSize={10}
            link={"Settings"}
        />
    )
}

export default Settings