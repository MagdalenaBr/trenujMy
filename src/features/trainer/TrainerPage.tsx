/* eslint-disable no-mixed-spaces-and-tabs */
import { useParams } from "react-router-dom";
import { useTrainers } from "./useTrainers";
import { useSchedules } from "../schedule/useSchedules";
import { useBooking } from "../bookings/useBooking";
import Schedule from "../schedule/Schedule";
import Container from "../../ui/Container";
import BackButton from "../../ui/BackButton";
import Spinner from "../../ui/Spinner";
import GridContainer from "../../ui/GridContainer";

function TrainerPage() {
  const trainerIdParams = useParams();
  const { trainers, trainerIsLoading } = useTrainers(); 
  const { schedule, scheduleIsLoading } = useSchedules();
  const trainerId = Number(trainerIdParams.trainerId);
  const trainer = trainers?.find((t) => t.id === trainerId);
  const { booking, bookingIsLoading } = useBooking(trainer?.id, "trainerId");

  
  let trainerSchedule;

  if (trainer.category !== "trener personalny")
    trainerSchedule = schedule?.map((el) => {

  const numberOfBookings = booking?.filter(
    (memberBooking) => memberBooking.date === el.date,
  ).length;
  
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

if (trainerIsLoading || scheduleIsLoading || bookingIsLoading)
  return <Spinner />;

return (
  <Container>
      <div className="flex flex-col gap-5 md:flex-row">
        <img src={trainer.image} alt="" className="h-60 w-60 object-cover" />
        <div className="flex w-[100%] flex-col">
          <BackButton />
          <div className="flex flex-col gap-5 self-start">
            <h2 className="text-2xl font-bold">{trainer.name}</h2>
            <GridContainer gridWidth="grid-cols-[80px_1fr]">
              <h3 className="font-semibold">Kategoria:</h3>
              <span>{trainer.category}</span>
            </GridContainer>
            <GridContainer gridWidth="grid-cols-[80px_1fr]">
              <h3 className="font-semibold">Telefon:</h3>
              <span>{trainer.phone}</span>
            </GridContainer>
            <GridContainer gridWidth="grid-cols-[80px_1fr]">
              <h3 className="font-semibold">Cena:</h3>
              <span>
                {trainer.price !== null ? `${trainer.price} zł` : "-"}
              </span>
            </GridContainer>
          </div>
        </div>
      </div>
      <Schedule trainerSchedule={trainerSchedule} page="trainer" />
    </Container>
  );
}

export default TrainerPage;
