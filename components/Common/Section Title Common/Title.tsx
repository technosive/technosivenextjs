const Title = ({ title, center }: { title: string; center?: boolean }) => {
  return (
    <>
      <h2
        className={`mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] ${
          center ? "mx-auto text-center" : ""
        }`}
      >
        {title}
      </h2>
    </>
  );
};

export default Title;
