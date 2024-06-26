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
    <div className="relative flex h-40  flex-col bg-slate-900  px-8 pt-4 uppercase text-textLight">
      <h1>Wybierz rodzaj zajęć</h1>
      <button
        className="absolute right-0 top-0 px-2 py-2 text-2xl font-bold text-accentColor2"
        onClick={handleCloseModal}
      >
        <HiOutlineXMark />
      </button>
      <div className="flex h-full gap-10">
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
