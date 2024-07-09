import { createContext, useState } from "react";

interface ContextTypes {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchNameContext = createContext<ContextTypes | undefined>(
  undefined,
);

export default function SearchNameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const [name, setName] = useState("");

  return (
    <SearchNameContext.Provider value={{ name, setName }}>
      {children}
    </SearchNameContext.Provider>
  );
}
