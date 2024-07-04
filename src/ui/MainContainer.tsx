type PropsType = {
  title?: string;
  children: React.ReactNode;
  buttons?: React.ReactNode;
};

function MainContainer({ children, title, buttons }: PropsType) {
  return (
    <div
      className={`${title === "Grafik" || !title ? "w-[90%]" : "w-[80%]"} mt-4 xl:mt-0 relative mx-auto flex flex-col gap-10`}
    >
      {title ? (
        <div className={buttons ? "flex  justify-between" : ""}>
          <h2 className="text-start text-2xl font-semibold uppercase tracking-widest text-primaryTextColor">
            {title}
          </h2>
          {buttons}
        </div>
      ) : null}
      {children}
    </div>
  );
}

export default MainContainer;
