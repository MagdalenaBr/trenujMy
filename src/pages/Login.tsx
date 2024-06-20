import { useState } from "react";
import useUserLogIn from "../features/authentication/useUserLogIn";
import Logo from "../ui/Logo";
import SmallSpinner from "../ui/SmallSpinner";

export default function Login() {
  const { login, isPending } = useUserLogIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login({ email, password });
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-slate-900 text-slate-200">
      <Logo />
      <div className="mt-4  w-96  bg-slate-700 pt-5 ">
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" px-3 py-1 text-slate-900"
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
              onChange={(e) => setPassword(e.target.value)}
              required
              className=" px-3 py-1 text-slate-900"
            />
          </div>
          <button className=" border-2 border-slate-300 bg-accentColor1 px-5 py-2 font-semibold uppercase">
            {isPending ? <SmallSpinner /> : "Zaloguj się"}
          </button>
        </form>
      </div>
    </div>
  );
}
