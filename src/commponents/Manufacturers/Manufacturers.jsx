import Table from "../../Table.jsx";
import { manufacturers } from "./manufacturersData.js";
import Breadcrumb from "../Breadcrumb.jsx";

export default function Manufacturers() {
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
                        heading3: "Action",
                    }}

                    pageSize={6}
                    link={"ManufacturersEdit"}
                />
            </div>
        </div>

    );
}