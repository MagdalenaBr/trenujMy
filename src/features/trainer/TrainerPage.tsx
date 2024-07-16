/* eslint-disable no-mixed-spaces-and-tabs */
import { useParams } from "react-router-dom";
import { useTrainers } from "./useTrainers";
import { useSchedules } from "../schedule/useSchedules";
import { useBooking } from "../bookings/useBooking";
import Schedule from "../schedule/Schedule";
import Container from "../../ui/Container";
import BackButton from "../../ui/BackButton";
import Spinner from "../../ui/Spinner";

function TrainerPage() {
  const trainerIdParams = useParams();
  const { trainers, trainerIsLoading } = useTrainers();
  const { schedule, scheduleIsLoading } = useSchedules();
  const trainerId = Number(trainerIdParams.trainerId);
  const trainer = trainers?.find((t) => t.id === trainerId);
  const { booking, bookingIsLoading } = useBooking(trainer?.id, "trainerId");

  let trainerSchedule;

  if (trainer?.category !== "trener personalny")
    trainerSchedule = schedule?.map((el) => {
      const numberOfBookings = booking?.filter(
        (memberBooking) => memberBooking.date === el.date,
      ).length;

      return el.trainerId === trainer?.id
        ? {
            title: `${el.name}: ${numberOfBookings}/${el.numOfPlaces}`,
            date: el.date,
          }
        : {};
    });

  if (trainer?.category === "trener personalny")
    trainerSchedule = booking?.map((el) =>
      el.trainerId === trainer?.id
        ? {
            title: `${el.members?.name}, tel.${el.members?.phone}`,
            date: el.date,
          }
        : {},
    );

  if (trainerIsLoading || scheduleIsLoading || bookingIsLoading)
    return <Spinner />;

  return (
    <Container>
      <div>
        <h1 className="text-start text-lg font-semibold uppercase tracking-wider text-textLightMode md:text-center md:text-2xl">
          {trainer.name}
        </h1>
        <p className="text-start md:text-center">tel: {trainer.phone}</p>
        <BackButton />
      </div>
      <Schedule trainerSchedule={trainerSchedule} page="trainer" />
    </Container>
  );
}

export default TrainerPage;
