function Logo({ width = "w-28" }) {
  return (
    <div className="row-[1_/_2] flex  w-full justify-center  py-8">
      <img src="/logo-new-rbg.png" aria-hidden="true" className={width} />
    </div>
  );
}

export default Logo;
