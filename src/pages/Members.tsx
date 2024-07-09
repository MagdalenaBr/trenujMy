import { useMembers } from "../features/members/useMembers";
import MembersTable from "../features/members/MembersTable";
import AddMemberModal from "../features/members/AddMemberModal";
import SearchNameProvider from "../context/SearchContext";
import MainContainer from "../ui/MainContainer";
import Spinner from "../ui/Spinner";
import TableNoContent from "../ui/TableNoContent";
import SearchInput from "../ui/SearchInput";
function Members() {
  const { isLoading, error } = useMembers();
  
  if (isLoading) return <Spinner />;
  if (error) return <TableNoContent />;
  return (
    <MainContainer title="Klienci" buttons={<AddMemberModal />}>
      <>
        <SearchNameProvider>
          <div>
            <div className="mb-4 ">
              <SearchInput />
            </div>
            <MembersTable />
          </div>
        </SearchNameProvider>
      </>
    </MainContainer>
  );
}

export default Members;
