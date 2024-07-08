import { HiOutlineXMark } from "react-icons/hi2";
import AddBookingModal from "./AddBookingModal";
import BookingTypeButton from "../../ui/BookingTypeButton";

export default function SelectBookingType({
  handleCloseModal,
  memberId,
}: {
  handleCloseModal?: () => void;
  memberId: string;
}) {
  return (
    <div className=" relative flex  md:h-40 flex-col bg-slate-900  px-8 py-10 uppercase text-textLight gap-7">
      <h1>Wybierz rodzaj zajęć</h1>
      <button
        className="absolute right-0 top-0 px-2 py-2 text-2xl font-bold text-accentColor2"
        onClick={handleCloseModal}
      >
        <HiOutlineXMark />
      </button>
      <div className="flex flex-col md:flex-row h-full gap-5 md:gap-10">
        <AddBookingModal
          memberId={memberId}
          closeSelectModal={handleCloseModal}
          typeOfActivities="groupActivities"
        >
          <BookingTypeButton>Zajęcia grupowe</BookingTypeButton>
        </AddBookingModal>
        <AddBookingModal
          memberId={memberId}
          typeOfActivities="personalTrainer"
          closeSelectModal={handleCloseModal}
        >
          <BookingTypeButton>Trener personalny</BookingTypeButton>
        </AddBookingModal>
      </div>
    </div>
  );
}
