import { createContext } from "react";

interface ContextTypes {
  columns: string;
}

const TableContext = createContext<ContextTypes | undefined>(undefined);

export default TableContext;
