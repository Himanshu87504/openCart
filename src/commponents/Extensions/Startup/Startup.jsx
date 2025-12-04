

import Table from '../../../Table.jsx'
import { Headings, Data } from './Heading.js';

export default function Startup() {
    return (
        <Table
            data={Data}
            headings={Headings}
            pageSize={5}
            link={"Startup"}
        />

    );
}