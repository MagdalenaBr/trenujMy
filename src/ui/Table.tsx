import { createContext, useContext } from "react";
// type ContextType = {
// 	columns: string;
// };

const TableContext = createContext({
	columns: "string",
});
type Props = {
	children: React.ReactNode;
	columns?: string;
};

function Table({ children, columns = "grid-cols-4" }: Props) {
	return (
		<TableContext.Provider value={{ columns }}>
			<div className='w-[60%] mx-auto bg-neutral-100 rounded divide-y  border border-neutral-30 overflow-hidden'>
				{children}
			</div>
		</TableContext.Provider>
	);
}

function Header({ children }: Props) {
	const { columns } = useContext(TableContext);
	return (
		<div
			role='row'
			className={`grid ${columns} bg-neutral-300 rounded-t py-4 text-neutral-900 uppercase font-bold `}>
			{children}
		</div>
	);
}

function Row({ children }: Props) {
	const { columns } = useContext(TableContext);
	return (
		<div role='row' className={`grid ${columns} items-center`}>
			{children}
		</div>
	);
}

Table.Header = Header;
Table.Row = Row;

export default Table;
