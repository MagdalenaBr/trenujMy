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
      { name: "status", value: "anulowana", label: "anulowana" },
      { name: "status", value: "niepotwierdzona", label: "niepotwierdzona" },
      { name: "status", value: "zrealizowana", label: "zrealizowana" },
    ];
  if (dataName === "date")
    searchCategories = [{ name: "data", value: "rosnaco", label: "rosnąco" }];

  return (
    <SortPanel
      dataName={dataName}
      mainSortCategory={mainSortCategory}
      searchCategories={
        searchCategories as { name: string; value: string; label: string }[]
      }
    />
  );
}
