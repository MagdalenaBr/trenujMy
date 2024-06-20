/* eslint-disable no-mixed-spaces-and-tabs */
import { useParams } from "react-router-dom";
import Container from "../../ui/Container";
import Schedule from "../schedule/Schedule";
import BackButton from "../../ui/BackButton";
import { useTrainers } from "./useTrainers";
import { useSchedules } from "../schedule/useSchedules";
import { useBooking } from "../bookings/useBooking";
import Spinner from "../../ui/Spinner";

function TrainerPage() {
  const trainerIdParams = useParams();
  const trainerId = Number(trainerIdParams.trainerId);
  const { trainers, trainerIsLoading } = useTrainers();
  const trainer = trainers?.find((t) => t.id === trainerId);

  const { schedule, scheduleIsLoading } = useSchedules();

  const { booking, bookingIsLoading } = useBooking(trainer?.id, "trainerId");

  if (trainerIsLoading || scheduleIsLoading || bookingIsLoading)
    return <Spinner />;

  let trainerSchedule;
  if (!trainer) return;
  if (trainer.category !== "trener personalny")
    trainerSchedule = schedule?.map((el) => {

      const numberOfBookings = booking?.filter(
        (memberBooking) => memberBooking.date === el.date,
      ).length;

      console.log(numberOfBookings);
     return el.trainerId === trainer.id
        ? {
            title: `${el.name}: ${numberOfBookings}/${el.numOfPlaces}`,
            date: el.date,
          }
        : {};
    });
  if (trainer.category === "trener personalny")
    trainerSchedule = booking?.map((el) =>
      el.trainerId === trainer.id
        ? {
            title: `${el.members?.name}, tel.${el.members?.phone}`,
            date: el.date,
          }
        : {},
    );
  console.log(trainerSchedule);

  return (
    <Container>
      <div className="flex gap-5">
        <img src={trainer.image} alt="" className="h-96 w-96 object-cover" />
        <div className="flex w-[100%] flex-col">
          <BackButton />
          <div className="flex flex-col gap-5 self-start">
            <h2 className="text-2xl font-bold">{trainer.name}</h2>
            <div className="flex gap-2">
              <h3 className="font-semibold">Kategoria:</h3>
              <span>{trainer.category}</span>
            </div>
            <div className="flex gap-2">
              <h3 className="font-semibold">Telefon:</h3>
              <span>{trainer.phone}</span>
            </div>
            <div className="flex gap-2">
              <h3 className="font-semibold">Cena:</h3>
              <span>
                {trainer.price !== null ? `${trainer.price} zł` : "-"}
              </span>
            </div>
          </div>
        </div>
      </div>
      <Schedule trainerSchedule={trainerSchedule} page="trainer" />
    </Container>
  );
}

export default TrainerPage;
