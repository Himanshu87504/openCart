import Table from "../../../Table.jsx.jsx";
import { attributesData, attributeHeadings } from "../Attributes/attributesData.js";
import Breadcrumb from "../../Breadcrumb.jsx";
export default function Options() {
    return (
        <div>
            <Breadcrumb
                title="Option"
                paths={[
                    { name: "Home" },
                    { name: "Option", color: "text-blue-400" },
                ]}
            />

            <Table
                data={attributesData}
                headings={attributeHeadings}
                pageSize={10}
                link={"OptionsEdit"}
                Head={"Option"}
            />
        </div>

    );
}