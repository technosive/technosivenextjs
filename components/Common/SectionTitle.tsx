import Paragraph from "./Section Title Common/Paragraph";
import Title from "./Section Title Common/Title";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <Title title={title} />
        <Paragraph paragraph={paragraph} />
      </div>
    </>
  );
};

export default SectionTitle;
