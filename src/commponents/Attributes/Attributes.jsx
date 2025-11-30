// AttributePage.jsx
import Table from "../../Table.jsx";
import { attributesData, attributeHeadings } from "./attributesData";

export default function AttributePage() {
    return (
        <Table
            data={attributesData}
            headings={attributeHeadings}
            pageSize={10}
            link={"AttributesEdit"}
            Head={"Attribute List"}
        />

    );
}
