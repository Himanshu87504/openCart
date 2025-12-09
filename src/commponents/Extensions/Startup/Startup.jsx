

import Table from '../../../Table.jsx'
import { Headings, Data } from './Heading.js';

export default function Startup() {
    return (
        <div>
            <Breadcrumb
                title="Extension"
                paths={[
                    { name: "Home" },
                    { name: "Extension", color: "text-blue-400" },
                ]}
            />
            <Table
                data={Data}
                headings={Headings}
                pageSize={5}
                Head={"Startup"}
                link={"Startup"}
            />
        </div>

    );
}