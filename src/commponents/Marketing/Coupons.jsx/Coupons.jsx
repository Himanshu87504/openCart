import React from 'react'
import Table from '../../../Table.jsx'


const Headings = {
    heading1: "Coupon Name",
    heading2: "Code",
    heading3: "Discount",
    heading4: "Action",
    heading6: "Action"

};

const Data = [
    { id: 1, CouponName: "123 Discount", Code: 5.00, Discount: 1000, Action: 4 },
    { id: 2, name: "Description" },

];

const Coupons = () => {
    return (
        <Table
            data={Data}
            headings={Headings}
            pageSize={10}
            link={"Coupons"}
        />
    )
}

export default Coupons