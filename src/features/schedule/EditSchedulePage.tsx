import { HiOutlinePencil } from "react-icons/hi2";
import MainContainer from "../../ui/MainContainer";
import CreateScheduleModal from "./CreateScheduleModal";
import Button from "../../ui/Button";
import Spinner from "../../ui/Spinner";
import TableWithSpacing from "../../ui/TableWithSpacing";
import BackButton from "../../ui/BackButton";
import { useSchedules } from "./useSchedules";
import { DateTime } from "luxon";

export default function EditSchedulePage() {
  const { schedule, scheduleIsLoading } = useSchedules("currentSchedule");

  if (scheduleIsLoading) return <Spinner />;

  return (
    <MainContainer title="Aktualny grafik">
      <div className=" rounded-lg border-slate-700 bg-slate-900/70 p-4 text-slate-200">
        <BackButton />
        <TableWithSpacing columns="grid-cols-[repeat(4,minmax(100px,_1fr))_100px]">
          <TableWithSpacing.Header>
            <p>Trener</p>
            <p>Kategoria</p>
            <p>Data</p>
            <p>Dostępne miejsca</p>
          </TableWithSpacing.Header>
          {schedule?.map((el) => (
            <TableWithSpacing.Row key={el.id}>
              <p className="text-start  font-bold text-slate-200">
                {el.trainers.name}
              </p>
              <p>{el.name}</p>
              <div>
                <p>{DateTime.fromISO(el.date.slice(0, -3).split("T")[0]).toLocaleString()}</p>
                <p className="text-sm text-slate-300">
                  {el.date.slice(0, -3).split("T")[1]}
                </p>
              </div>
              <p>{el.numOfPlaces}</p>
              <div>
                <CreateScheduleModal classes={el}>
                  <Button>
                    <HiOutlinePencil className="text-2xl" />
                  </Button>
                </CreateScheduleModal>
              </div>
            </TableWithSpacing.Row>
          ))}
        </TableWithSpacing>
      </div>
    </MainContainer>
  );
}
