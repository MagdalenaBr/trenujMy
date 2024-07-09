import { HiMiniUser } from "react-icons/hi2";
import TrainerOptions from "./TrainerOptions";
import { TrainersDataTypes } from "../../types/trainersTypes";


function TrainerRow({ trainer }: { trainer: TrainersDataTypes }) {
  return (
    <>
      <div className="col-[1_/_3] flex items-center gap-9 ">
        {trainer.image.split("/").at(-1) !== "undefined" ? (
          <img
            src={trainer.image}
            alt="trener"
            className="aspect-square h-20 object-top object-cover"
          />
        ) : (
          <HiMiniUser className="h-28 w-20 object-cover" />
        )}
        <h2 className="font-semibold uppercase text-[12px] lg:text-sm tracking-wide text-lightAccentColor">
          {trainer.name}
        </h2>
      </div>
      <p>{trainer.category}</p>
      <p>{trainer.price !== null ? `${trainer.price} zł` : " - "}</p>
      <TrainerOptions trainer={trainer} />
    </>
  );
}
export default TrainerRow;
