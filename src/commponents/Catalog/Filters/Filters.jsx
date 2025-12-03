import Table from "../../../Table.jsx.jsx";
import { attributesData, attributeHeadings } from "../Attributes/attributesData.js";

export default function Filters() {
    return (
        <Table

            headings={attributeHeadings}
            pageSize={10}

        />

    );
}