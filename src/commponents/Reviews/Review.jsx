import Table from "../../Table.jsx";
import { attributeHeadings } from "../Attributes/attributesData.js";
import Breadcrumb from "../Breadcrumb.jsx";

export default function Review() {
    return (
        <div>
            <Breadcrumb
                title="Reviews"
                paths={[
                    { name: "Home" },
                    { name: "Reviews ", color: "text-blue-400" },
                ]}
            />
            <div className="p-3 bg-[#F6F6F6]">
                <Table
                    data={[]}
                    headings={{
                        heading1: "Product",
                        heading2: "Author",
                        heading3: "Date Added",
                        heading4: "Action"
                    }}
                    pageSize={6}

                />
            </div>
        </div>
    );
}
