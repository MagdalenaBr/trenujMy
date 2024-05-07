import { Link } from "react-router-dom";
export default function EditScheduleLink() {
  return (
    <Link
      to="zmien-grafik"
      className='rounded-md border-2 border-accentColor1 bg-slate-700 px-2 py-1 font-semibold uppercase tracking-wider shadow-md  hover:scale-105'
     
    >
      Edytuj grafik
    </Link>
  );
}
