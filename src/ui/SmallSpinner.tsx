function SmallSpinner() {
  return (
    <div
      className="inline-block h-8 w-8 animate-spin rounded-full border-[5px] border-solid border-slate-800 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status"
    ></div>
  );
}

export default SmallSpinner;
