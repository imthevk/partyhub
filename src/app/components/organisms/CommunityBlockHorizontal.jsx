import CardHorizontal from "../molecules/CardHorizontal";

const CommunityBlockHorizontal = ({
  title,
  description,
  buttonText,
  imgSrc,
  onClick,
  imageClassName,
  btnClassName,
}) => {
  return (
    <section className="flex flex-1 flex-col items-center">
      <CardHorizontal
        imgSrc={imgSrc}
        title={title}
        description={description}
        buttonText={buttonText}
        onButtonClick={onClick}
        imageClassName={imageClassName}
        btnClassName={btnClassName}
      />
    </section>
  );
};

export default CommunityBlockHorizontal;
