import { BsInfoLg } from "react-icons/bs";
import Table from "../../ui/Table";
import TableNoContent from "../../ui/TableNoContent";
import { Link } from "react-router-dom";
import { useMembers } from "./useMembers";
import { useContext } from "react";
import { SearchNameContext } from "../../context/SearchContext";

function MembersTable() {
  const searchNameContext = useContext(SearchNameContext);
  const { members } = useMembers();
  const filteredMembers = members?.filter((member) =>
    member.name.toLowerCase().includes(searchNameContext?.name.toLocaleLowerCase())
      ? member
      : "" || String(member.phone).includes(searchNameContext?.name as string)
        ? member
        : "",
  );

  return (
    <Table uniqueStyles="px-2 py-2" columns="grid-cols-[2fr_1fr_1fr_1fr]">
      <Table.Header>
        <p>Imie i nazwisko</p>
        <p>e-mail</p>
        <p>telefon</p>
      </Table.Header>
      {filteredMembers ? (
        filteredMembers.map((member) => (
          <Table.Row key={member.id}>
            <p className="font-semibold text-lightAccentColor">{member.name}</p>
            <p>{member.email.toLowerCase()}</p>
            <p>{member.phone}</p>
            <Link to={`/klienci/${member.id}`}>
              <BsInfoLg className="mx-3  cursor-pointer justify-self-end text-2xl text-accentColor2 hover:scale-125 hover:text-cyan-800" />
            </Link>
          </Table.Row>
        ))
      ) : (
        <TableNoContent />
      )}
    </Table>
  );
}

export default MembersTable;
