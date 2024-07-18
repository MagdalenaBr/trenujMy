import { useState } from "react";
import useUserLogIn from "../features/authentication/useUserLogIn";
import Logo from "../ui/Logo";
import SmallSpinner from "../ui/SmallSpinner";

export default function Login() {
  const { login, isPending } = useUserLogIn();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("11111111");

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <div className="mt-10 flex h-screen w-screen flex-col items-center gap-5 bg-slate-900 text-slate-200 md:mt-0 md:justify-center">
      <Logo width=" w-48 md:w-60" />
      <div className=" w-4/5 bg-slate-700  pt-5 md:w-96 ">
        <h2 className="text-center text-2xl text-accentColor2">
          Zaloguj się do konta
        </h2>
        <form
          onSubmit={(e) => handleClick(e)}
          className=" flex flex-col items-center gap-5 py-5"
        >
          <div className="flex w-4/5 flex-col gap-3">
            <label htmlFor="email" className="text-xl">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" bg-slate-300 px-2 py-1 pr-2 text-slate-800 focus:border-slate-300 "
            />
          </div>
          <div className="flex w-4/5 flex-col gap-3">
            <label htmlFor="password" className="text-xl">
              Hasło:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="  bg-slate-300 px-2 py-1 pr-2 text-slate-800 focus:border-slate-300"
            />
          </div>
          <button className=" mt-2 bg-accentColor1 px-6 py-2 font-semibold uppercase">
            {isPending ? <SmallSpinner /> : "Zaloguj się"}
          </button>
        </form>
      </div>
      <p className="text-sm text-red-600">
        W wersji demonstracyjnej możliwość edycji danych została wyłączona.
      </p>
    </div>
  );
}
