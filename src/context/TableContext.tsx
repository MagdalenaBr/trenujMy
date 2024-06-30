import { createContext } from "react";

interface ContextTypes {
  columns: string;
  uniqueStyles: string;
  smColumns?: string
}

const TableContext = createContext<ContextTypes | undefined>(undefined);

export default TableContext;
