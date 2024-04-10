import SortPanel from "../../ui/SortPanel";

export default function BookingsSortPanel({
  dataName,
  mainSortCategory,
}: {
  dataName: string;
  mainSortCategory: string;
}) {
  const searchCategories = [
    { name: "status", value: "anulowana" },
    { name: "status", value: "niepotwierdzona" },
    { name: "status", value: "zrealizowana" },
  ];

  return (
    <SortPanel
      dataName={dataName}
      mainSortCategory={mainSortCategory}
      searchCategories={searchCategories}
    />
  );
}
