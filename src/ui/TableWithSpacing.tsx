import { createContext, useContext } from "react";

type PropsType = {
	children: React.ReactNode;
	columns?: string;
};

const TableWithSpacingContext = createContext({
	columns: "string",
});

function TableWithSpacing({ children, columns = "grid-cols-4" }: PropsType) {
	return (
		<TableWithSpacingContext.Provider value={{ columns }}>
			<div role='table'>{children}</div>
		</TableWithSpacingContext.Provider>
	);
}

function Header({ children }: PropsType) {
	const { columns } = useContext(TableWithSpacingContext);

	return (
		<div
			role='row'
			className={`grid ${columns} border-2 rounded-md bg-slate-200 font-bold mb-4 py-1`}>
			{children}
		</div>
	);
}

function Row({ children }: PropsType) {
	const { columns } = useContext(TableWithSpacingContext);

	return (
		<div
			className='my-2 bg-slate-100 border-2  border-slate-200 rounded-md py-1 text-sm'>
			<div className={`grid px-2 ${columns} items-center`}>{children}</div>
		</div>
	);
}

TableWithSpacing.Header = Header;
TableWithSpacing.Row = Row;

export default TableWithSpacing;
