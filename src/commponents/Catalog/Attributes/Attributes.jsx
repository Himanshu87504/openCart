// AttributePage.jsx
import Table from "../../../Table.jsx";
import { attributesData, attributeHeadings } from "./attributesData";
import Breadcrumb from "../../Breadcrumb.jsx";

export default function AttributePage() {
    return (
        <div><Breadcrumb
            title="Attributes"
            paths={[
                { name: "Home" },
                { name: "Attributes", color: "text-blue-400" },
            ]}
        />
            <Table
                data={attributesData}
                headings={attributeHeadings}
                pageSize={10}
                link={"AttributesEdit"}
                Head={"Attribute List"}
            />
        </div>
    );
}
