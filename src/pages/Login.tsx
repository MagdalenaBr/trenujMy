import Logo from "../ui/Logo";

export default function Login() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-slate-900 text-slate-200 gap-5">
      <Logo textSize="text-5xl" />
      <div className="w-96  rounded-md bg-slate-700 pt-5 mt-4 ">
        <h2 className="text-2xl text-accentColor2 text-center">Zaloguj się do konta</h2>
        <form className=" flex flex-col items-center gap-5 py-5">
          <div className="flex flex-col w-4/5 gap-3">
            <label htmlFor='email' className="text-xl">E-mail:</label>
            <input type='email' id="email" name="email" required className="rounded-md text-slate-900 px-3 py-1"/>
          </div>
          <div className="flex flex-col w-4/5 gap-3">
            <label htmlFor='haslo' className="text-xl">Hasło:</label>
            <input type='haslo' id="haslo" name="haslo" required className="rounded-md text-slate-900 px-3 py-1"/>
          </div>
          <button className="border-slate-300 font-semibold border-2 px-5 uppercase rounded-md bg-accentColor1 py-2">Zaloguj się</button>
        </form>
      </div>
    </div>
  );
}
