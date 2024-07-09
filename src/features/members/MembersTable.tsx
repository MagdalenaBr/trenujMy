import { BsInfoLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useMembers } from "./useMembers";
import { SearchNameContext } from "../../context/SearchContext";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";

function MembersTable() {
  const searchNameContext = useContext(SearchNameContext);
  const { members } = useMembers();
  const filteredMembers = members?.filter((member) =>
    member.name
      .toLowerCase()
      .includes(searchNameContext?.name.toLocaleLowerCase())
      ? member
      : "" || String(member.phone).includes(searchNameContext?.name as string)
        ? member
        : "",
  );

  return (
    <div>
      <Table
        uniqueStyles="px-2 py-2 w-[36rem] md:w-auto"
        columns="md:grid-cols-[2fr_2fr_1fr_1fr]"
        smColumns="grid-cols-[200px_200px_100px_50px]"
      >
        <Table.Header>
          <p>Imie i nazwisko</p>
          <p>e-mail</p>
          <p>telefon</p>
        </Table.Header>
        {filteredMembers ? (
          filteredMembers.map((member) => (
            <Table.Row key={member.id}>
              <p className="text-[12px] font-semibold uppercase tracking-wide text-lightAccentColor lg:text-sm">
                {member.name}
              </p>
              <p>{member.email.toLowerCase()}</p>
              <p>{member.phone}</p>
              <div className="flex">
                <Link
                  to={`/klienci/${member.id}`}
                  className="self-start  border-2 border-transparent px-1 py-1 text-2xl hover:border-activeBkg"
                >
                  <BsInfoLg className="  cursor-pointer justify-self-end text-2xl text-accentColor2 hover:scale-125 hover:text-slate-300" />
                </Link>
              </div>
            </Table.Row>
          ))
        ) : (
          <TableNoContent />
        )}
      </Table>
    </div>
  );
}

export default MembersTable;
