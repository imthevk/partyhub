import { ImageBlock, Text, Button } from "../atoms";

const CardHorizontal = ({
  imgSrc,
  title,
  description,
  buttonText,
  onButtonClick,
  imageClassName,
  btnClassName,
}) => {
  return (
    <div className=" rounded-xl md:gap-14 p-4 sm:h-[20rem]  md:py-0 md:px-8  md:p-4 lg:h-[13.5rem] 2xl:h-[18rem] bg-lightgrey flex justify-between items-center">
      <div className="flex-1 flex-col w-[2rem]">
        <Text content={title} className="mb-2 font-bold" />
        <Text content={description} className="mb-2 text-text-300 text-md" />
        <Button
          text={buttonText}
          onClick={onButtonClick}
          className={`h-[4rem] md:h-12 leading-4 ${btnClassName}`}
        />
      </div>
      <div className="flex-1">
        <ImageBlock
          src={imgSrc}
          alt={title}
          className="mb-4"
          imageClassName={imageClassName}
        />
      </div>
    </div>
  );
};

export default CardHorizontal;
