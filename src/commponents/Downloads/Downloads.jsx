import Table from "../../Table.jsx";
import { attributeHeadings } from "../Attributes/attributesData.js"; // your headings object
import Breadcrumb from "../Breadcrumb.jsx";

export default function Downloads() {
    return (
        <div>
            <Breadcrumb
                title="Downloads"
                paths={[
                    { name: "Home" },
                    { name: "Downloads", color: "text-blue-400" },
                ]}
            />

            <Table
                data={[]}          // or omit, default []
                headings={attributeHeadings}
                pageSize={6}
                paths={[
                    { name: "Home" },
                    { name: "Reviews ", color: "text-blue-400" },
                ]}
            />
        </div>
    );
}
