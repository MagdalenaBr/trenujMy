import { createContext, useContext } from "react";
// type ContextType = {
// 	columns: string;
// };

const TableContext = createContext({
	columns: "string",
});
type PropsType = {
	children: React.ReactNode;
	columns?: string;
};

function Table({ children, columns = "grid-cols-4" }: PropsType) {
	return (
		<TableContext.Provider value={{ columns }}>
			<div className='bg-slate-100 rounded divide-y  border border-slate-100 overflow-hidden'>
				{children}
			</div>
		</TableContext.Provider>
	);
}

function Header({ children }: PropsType) {
	const { columns } = useContext(TableContext);
	return (
		<div
			role='row'
			className={`grid ${columns} bg-slate-100 rounded-t py-4 text-neutral-900 uppercase font-bold `}>
			{children}
		</div>
	);
}

function Row({ children }: PropsType) {
	const { columns } = useContext(TableContext);
	return (
		<div role='row' className={`grid ${columns} items-center py-1`}>
			{children}
		</div>
	);
}

Table.Header = Header;
Table.Row = Row;

export default Table;
