import MainContainer from "../ui/MainContainer";
import MembersTable from "../features/members/MembersTable";
import AddMemberModal from "../features/members/AddMemberModal";
import Spinner from "../ui/Spinner";
import { useMembers } from "../features/members/useMembers";
import TableNoContent from "../ui/TableNoContent";
import SearchInput from "../ui/SearchInput";
import SearchNameProvider from "../context/SearchContext";
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
        {/* <AddMemberModal /> */}
      </>
    </MainContainer>
  );
}

export default Members;
