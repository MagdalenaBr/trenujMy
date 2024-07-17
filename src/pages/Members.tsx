import MembersTable from "../features/members/MembersTable";
import AddMemberModal from "../features/members/AddMemberModal";
import SearchNameProvider from "../context/SearchContext";
import MainContainer from "../ui/MainContainer";
import SearchInput from "../ui/SearchInput";

function Members() {
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
