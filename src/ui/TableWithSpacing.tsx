import { useContext } from "react";
import TableContext from "../context/TableContext";

type PropsType = {
  children: React.ReactNode;
  columns?: string;
  uniqueStyles?: string
  noBorder?: boolean
};

function TableWithSpacing({ children, columns = "grid-cols-4", uniqueStyles='' }: PropsType) {
  return (
    <TableContext.Provider value={{ columns, uniqueStyles }}>
      <div role="table">{children}</div>
    </TableContext.Provider>
  );
}

function Header({ children }: PropsType) {
  const ColumnsContext = useContext(TableContext);

  return (
    <div
      role="row"
      className={`grid ${ColumnsContext?.columns} mb-4 rounded-md border-2 bg-slate-800 py-1 font-bold uppercase text-sm tracking-widest`}
    >
      {children}
    </div>
  );
}

function Row({ children, noBorder }: PropsType) {
  const ColumnsContext = useContext(TableContext);

  return (
    <div className={`my-2 rounded-md ${!noBorder? ' border-2  border-slate-200' : ''} bg-bgTableWithSpacing/60 py-1 text-sm`}>
      <div className={`grid px-2 ${ColumnsContext?.columns} ${ColumnsContext?.uniqueStyles} items-center`}>
        {children}
      </div>
    </div>
  );
}

TableWithSpacing.Header = Header;
TableWithSpacing.Row = Row;

export default TableWithSpacing;
