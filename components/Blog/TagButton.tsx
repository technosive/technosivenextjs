const TagButton = ({ href = "", text }: { href?: string; text: string }) => {
  return (
    <span className="mb-3 mr-3 inline-flex items-center justify-center rounded-sm bg-gray-light px-2 py-1 text-sm text-black duration-300   dark:bg-[#2C303B] dark:text-white">
      {text}
    </span>
  );
};

export default TagButton;
