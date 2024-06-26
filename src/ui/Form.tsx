import { SubmitHandler } from "react-hook-form";

interface PropsTypes {
  onSubmit: SubmitHandler<any>;
  children: React.ReactNode;
}

export default function Form({ onSubmit, children }: PropsTypes) {
  return (
    <div className=" z-10  bg-slate-900 px-10 py-6 shadow-sm shadow-accentColor2">
      <form
        onSubmit={onSubmit}
        noValidate
        className="mx-auto flex flex-col py-8"
      >
        {children}
      </form>
    </div>
  );
}
