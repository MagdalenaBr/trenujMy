import SortPanel from "../../ui/SortPanel";

export default function BookingsSortPanel({
  dataName,
  mainSortCategory,
}: {
  dataName: string;
  mainSortCategory: string;
}) {
  let searchCategories;
  if (dataName === "status")
    searchCategories = [
      { name: "status", value: "anulowana" },
      { name: "status", value: "niepotwierdzona" },
      { name: "status", value: "zrealizowana" },
    ];

  if (dataName === "date")
    searchCategories = [{ name: "data", value: "rosnąco" }];

  return (
    <SortPanel
      dataName={dataName}
      mainSortCategory={mainSortCategory}
      searchCategories={searchCategories as { name: string; value: string }[]}
    />
  );
}
