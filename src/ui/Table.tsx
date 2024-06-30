import { useContext } from "react";
import TableContext from "../context/TableContext";
import Pagination from "./Pagination";

type PropsType = {
  children: React.ReactNode;
  columns?: string;
  uniqueStyles?: string;
  smColumns?: string
};

function Table({
  children,
  columns = "grid-cols-4",
  uniqueStyles = "",
  smColumns
}: PropsType) {
  return (
    <TableContext.Provider value={{ columns, uniqueStyles, smColumns }}>
      <div className=" text-sm divide-slate-00 divide-y divide-slate-700 xl:overflow-hidden  bg-slate-900 text-slate-300 overflow-scroll">
        {children}
      </div>
    </TableContext.Provider>
  );
}

function Header({ children }: PropsType) {
  const ColumnsContext = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid ${ColumnsContext?.columns}  text-start bg-slate-900 px-2 py-4 font-bold uppercase`}
    >
      {children}
    </div>
  );
}

function Row({ children }: PropsType) {
  const ColumnsContext = useContext(TableContext);
  return (
    <div
      role="row"
      className={`grid ${ColumnsContext?.columns} ${ColumnsContext?.smColumns} ${ColumnsContext?.uniqueStyles} items-center text-start `}
    >
      {children}
    </div>
  );
}

function Footer({ numOfData }: { numOfData: number | null}) {
  return <Pagination numOfData={numOfData} />;
}

Table.Header = Header;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
