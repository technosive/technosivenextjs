import FacebookButton from "./Sharedbuttons/FacebookButton";
import LinkedinButton from "./Sharedbuttons/LinkedinButton";
import TwitterButton from "./Sharedbuttons/TwitterButton";

const SharePost = ({
  title,
  postUrl,
  description,
}: {
  title: string;
  postUrl: string;
  description?: string;
}) => {
  return (
    <>
      <div className="flex flex-row gap-x-3">
        <LinkedinButton
          title={title}
          source={postUrl}
          description={description}
        />
        <TwitterButton title={title} source={postUrl} />
        <FacebookButton title={title} source={postUrl} />
      </div>
    </>
  );
};

export default SharePost;
