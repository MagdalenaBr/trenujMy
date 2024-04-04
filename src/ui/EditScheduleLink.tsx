import { Link } from "react-router-dom";
export default function EditScheduleLink() {
  return (
    <Link
      to="edit-schedule"
      className="rounded-md border-2 border-primaryTextColor px-2 py-1 font-bold uppercase"
    >
      Edytuj grafik
    </Link>
  );
}
