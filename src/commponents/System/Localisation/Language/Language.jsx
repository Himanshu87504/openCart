import React from 'react'
import Breadcrumb from "../../../Breadcrumb"
import Table from '../../../../Table.jsx';


const Headings = {
    heading1: "Language Name",
    heading2: "Code",
    heading3: "Sort Order",
    heading6: "Action"
};

const data = [
    {
        id: 1,
        languageName: "English (Default)",
        code: "en-gb",
        sortOrder: 1
    }
];



const Language = () => {
    return (
        <div>
            <div>
                <Breadcrumb
                    title="Language"
                    paths={[
                        { name: "Home" },
                        { name: "Language", color: "text-blue-400" },
                    ]}
                />

                <Table
                    data={data}
                    headings={Headings}
                    pageSize={10}
                    link={"Language"}
                    Head={"Store Location"}
                />
            </div>
        </div>
    )
}

export default Language