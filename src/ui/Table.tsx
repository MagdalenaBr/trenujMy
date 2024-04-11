import { useContext } from "react";
import TableContext from "../context/TableContext";
import Pagination from "./Pagination";

type PropsType = {
  children: React.ReactNode;
  columns?: string;
  uniqueStyles?: string;
};

function Table({
  children,
  columns = "grid-cols-4",
  uniqueStyles = "",
}: PropsType) {
  return (
    <TableContext.Provider value={{ columns, uniqueStyles }}>
      <div className=" divide-slate-00 divide-y divide-slate-700 overflow-hidden rounded-lg border-2 border-slate-700 bg-slate-900/70 text-slate-300">
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
      className={`grid ${ColumnsContext?.columns} justify-items-start rounded-t bg-slate-800 px-2 py-4 font-bold uppercase`}
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
      className={`grid ${ColumnsContext?.columns} ${ColumnsContext?.uniqueStyles} items-center justify-items-start  `}
    >
      {children}
    </div>
  );
}

function Footer({numOfData}) {

  return <Pagination numOfData={numOfData}/>;
}

Table.Header = Header;
Table.Row = Row;
Table.Footer = Footer;

export default Table;
