type PropsType = {
  title: string;
  children: React.ReactNode;
  buttons?: React.ReactNode;
};

function MainContainer({ children, title, buttons }: PropsType) {
  return (
    <div
      className={`${title === "Grafik" ? "w-[90%]" : "w-[80%]"} relative mx-auto flex flex-col`}
    >
      <div className={buttons ? "flex justify-between" : ""}>
        <h2 className="mb-5 text-start text-[2rem] text-primaryTextColor">
          {title}
        </h2>
        {buttons}
      </div>
      {children}
    </div>
  );
}

export default MainContainer;
