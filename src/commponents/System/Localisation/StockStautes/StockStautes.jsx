import React from 'react'
import Breadcrumb from '../../../Breadcrumb';
import Table from '../../../../Table.jsx';


const Headings = {
    heading1: "Stock Status Name",
    heading6: "Action"
};

const data = [
    {
        id: 1,
        StockStatusName: "2-3 Days",
    }
];

const StockStautes = () => {
    return (
        <div>

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
                        link={"Stock-Stautes"}
                        Head={"Stock-Stautes"}
                    />
                </div>
            </div>
        </div>
    )
}

export default StockStautes