type PropsType = {
  title?: string;
  children: React.ReactNode;
  buttons?: React.ReactNode;
};

function MainContainer({ children, title, buttons }: PropsType) {
  return (
    <div
      className={`${title === "Grafik" || !title ? "w-[90%]" : "w-[80%]"} relative mx-auto mt-4 flex flex-col gap-10 xl:mt-0`}
    >
      {title ? (
        <div className={buttons ? "flex  justify-between" : ""}>
          <h2
            className={`text-start ${title === "Aktualny grafik" ? "text-xl" : "text-2xl"}  font-semibold uppercase tracking-widest text-headingTextColor`}
          >
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
