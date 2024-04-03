import MainContainer from "../ui/MainContainer";
import MembersTable from "../features/members/MembersTable";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import AddMemberModal from "../features/members/AddMemberModal";
import Spinner from "../ui/Spinner";
import { useState } from "react";
import { useMembers } from "../features/members/useMembers";
import TableNoContent from "../ui/TableNoContent";
function Members() {
  const [memberName, setMemberName] = useState("");
  const { isLoading, error } = useMembers();

  if (isLoading) return <Spinner />;
  if (error) return <TableNoContent />;
  return (
    <MainContainer title="Klienci">
      <>
        <div className="mb-4 flex items-center justify-between">
          <div className="relative focus:text-slate-700">
            <HiOutlineMagnifyingGlass className="absolute top-[25%] mx-2  text-xl text-accentColor2" />
            <input
              value={memberName}
              onChange={(e) => setMemberName(e.target.value)}
              className="bg-serchInputBg w-80 rounded-lg border-2 border-violet-300  py-1 pl-8 pr-2 focus:border-slate-300 focus:bg-slate-300 focus:text-slate-800 focus:shadow-md focus:outline-none"
            />
          </div>
        </div>
        <MembersTable memberNameFromInput={memberName} />
        <AddMemberModal />
      </>
    </MainContainer>
  );
}

export default Members;
