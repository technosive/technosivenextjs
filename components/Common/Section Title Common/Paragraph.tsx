const Paragraph = ({ paragraph }: { paragraph: string }) => {
  return (
    <>
      <p className="text-base !leading-relaxed text-body-color md:text-lg">
        {paragraph}
      </p>
    </>
  );
};

export default Paragraph;
