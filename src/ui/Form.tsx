import { SubmitHandler } from "react-hook-form";

interface PropsTypes{
    onSubmit: SubmitHandler<any>;
    children: React.ReactNode

}

export default function Form({ onSubmit, children }:PropsTypes) {
  return (
    <div className=" bg-slate-300 px-10 py-6 z-10">
      <form
        onSubmit={onSubmit}
        noValidate
        className="mx-auto flex flex-col divide-y divide-slate-400/30 py-8"
      >
        {children}
      </form>
    </div>
  );
}
