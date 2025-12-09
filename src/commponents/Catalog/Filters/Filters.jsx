import Table from "../../../Table.jsx.jsx";
import { attributesData, attributeHeadings } from "../Attributes/attributesData.js";
import Breadcrumb from "../../Breadcrumb.jsx";

export default function Filters() {
    return (
        <div>
            <Breadcrumb
                title="Filter"
                paths={[
                    { name: "Home" },
                    { name: "Filter", color: "text-blue-400" },
                ]}
            />

            <Table

                headings={attributeHeadings}
                pageSize={10}
                Head={"Filter List"}

            />
        </div>

    );
}