import Table from '../../../Table.jsx';

const Headings = {
  heading1: "Store",
  heading2: "Language",
  heading3: "	Route",
  heading4: "Key",
  heading5: "value",
  heading6: "Action"

};


export default function LanguageEditor() {
  return (
    <Table
      // data={Data}
      headings={Headings}
      pageSize={5}
      link={"Startup"}
    />

  );
}