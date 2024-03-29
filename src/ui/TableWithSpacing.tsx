import { useContext } from "react";
import TableContext from "../context/TableContext";

type PropsType = {
  children: React.ReactNode;
  columns?: string;
};

function TableWithSpacing({ children, columns = "grid-cols-4" }: PropsType) {
  return (
    <TableContext.Provider value={{ columns }}>
      <div role="table">{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }: PropsType) {
  const ColumnsContext = useContext(TableContext);

  return (
    <div
      role="row"
      className={`grid ${ColumnsContext?.columns} mb-4 rounded-md border-2 bg-slate-200 py-1 font-bold`}
    >
      {children}
    </div>
  );
}

function Row({ children }: PropsType) {
  const ColumnsContext = useContext(TableContext);

  return (
    <div className="my-2 rounded-md border-2  border-slate-200 bg-slate-100 py-1 text-sm">
      <div className={`grid px-2 ${ColumnsContext?.columns} items-center`}>
        {children}
      </div>
    </div>
  );
}

TableWithSpacing.Header = Header;
TableWithSpacing.Row = Row;

export default TableWithSpacing;
