import Table from "../../../Table.jsx";
import { attributesData, attributeHeadings } from "./attributesData";
import Breadcrumb from "../../Breadcrumb.jsx";
export default function AttributeGroup() {
    return (
        <div>
            <Breadcrumb
                title="Attributes"
                paths={[
                    { name: "Home" },
                    { name: "Attributes", color: "text-blue-400" },
                ]}
            />
            <Table
                data={attributesData}
                headings={attributeHeadings}
                pageSize={5}
                link={"AttributesGroupEdit"}
                Head={" Attribute List"}
            />
        </div>


    );
}