import { useContext } from "react";
import TableContext from "../context/TableContext";

type PropsType = {
  children: React.ReactNode;
  columns?: string;
};

function Table({ children, columns = "grid-cols-4" }: PropsType) {
  return (
    <TableContext.Provider value={{ columns }}>
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
      className={`grid ${ColumnsContext?.columns} justify-items-start rounded-t bg-slate-100 px-2 py-4 font-bold uppercase text-neutral-900`}
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
      className={`grid ${ColumnsContext?.columns} items-center justify-items-start  `}
    >
      {children}
    </div>
  );
}

Table.Header = Header;
Table.Row = Row;

export default Table;
