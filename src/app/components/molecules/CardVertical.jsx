import { ImageBlock, Text, Button } from "../atoms";
const CardVertical = ({
  imgSrc,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="rounded-xl px-4 bg-lightgrey">
      <ImageBlock src={imgSrc} alt={title} className="mb-4" />
      <div className="flex flex-col pl-2 py-6">
        <Text content={title} className="text-black text-lg font-bold mb-2" />
        <Text content={description} className={`text-text-300 mb-2 `} />
        <Button
          text={buttonText}
          onClick={onButtonClick}
          className="bg-bg-500"
        />
      </div>
    </div>
  );
};

export default CardVertical;
