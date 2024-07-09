function Spinner() {
  return (
    <div className="flex h-40 items-center justify-center">
      <div
        className="inline-block h-14 w-14 animate-spin rounded-full border-[10px] border-solid border-slate-800 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}

export default Spinner;
