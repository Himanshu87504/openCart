import Table from "../../Table.jsx";
import { attributesData, attributeHeadings } from "./attributesData";

export default function AttributeGroup() {
    return (
        <Table
            data={attributesData}
            headings={attributeHeadings}
            pageSize={5}
            link={"AttributesGroupEdit"}
        />

    );
}