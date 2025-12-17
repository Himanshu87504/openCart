
import React from 'react'
import Breadcrumb from "../../../Breadcrumb"
import Table from '../../../../Table.jsx';


const Headings = {
    heading1: "Currency Title",
    heading2: "Code",
    heading3: "Value	",
    heading6: "Action"
};

const data = [
    {
        id: 1,
        CurrencyTitle: "English (Default)",
        code: "en-gb",
        Value: "1.345678"
    }
];



const Currency = () => {
    return (
        <div>
            <div>
                <Breadcrumb
                    title="Currency"
                    paths={[
                        { name: "Home" },
                        { name: "Language", color: "text-blue-400" },
                    ]}
                />

                <Table
                    data={data}
                    headings={Headings}
                    pageSize={10}
                    link={"Currency"}
                    Head={"Currency"}
                />
            </div>
        </div>
    )
}

export default Currency