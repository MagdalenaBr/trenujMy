type PropsType = {
  title?: string;
  children: React.ReactNode;
  buttons?: React.ReactNode;
};

function MainContainer({ children, title, buttons }: PropsType) {
  return (
    <div
      className={`${title === "Grafik" || !title ? "w-[90%]" : "w-[80%]"} relative mx-auto flex flex-col gap-3`}
    >
      <div className={buttons ? "flex justify-between" : ""}>
        <h2 className="mb-5 text-start text-2xl font-semibold tracking-widest text-primaryTextColor uppercase">
          {title}
        </h2>
        {buttons}
      </div>
      {children}
    </div>
  );
}

export default MainContainer;
