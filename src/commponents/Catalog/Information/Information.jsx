import Table from "../../../Table.jsx.jsx";
import { manufacturers } from "../Manufacturers/manufacturersData.js";
import Breadcrumb from "../../Breadcrumb.jsx";

export default function Information() {
    return (
        <div>
            <Breadcrumb
                title="Manufacturers"
                paths={[
                    { name: "Home" },
                    { name: "Manufacturers", color: "text-blue-400" },
                ]}
            />
            <div className="p-3 bg-[#F6F6F6]">
                <Table
                    data={manufacturers}
                    headings={{
                        heading1: "Manufacturer Name",
                        heading2: "Sort Order",
                        heading6: "Action",
                    }}

                    pageSize={6}
                    link={"InformationEdit"}
                />
            </div>
        </div>

    );
}