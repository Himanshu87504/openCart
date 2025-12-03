import Table from "../../../Table.jsx.jsx";
import { attributesData, attributeHeadings } from "../Attributes/attributesData.js";

export default function Options() {
    return (
        <Table
            data={attributesData}
            headings={attributeHeadings}
            pageSize={10}
            link={"OptionsEdit"}
        />

    );
}