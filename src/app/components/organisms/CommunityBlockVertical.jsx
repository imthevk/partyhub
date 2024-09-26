import CardVertical from "../molecules/CardVertical";

const CommunityBlockVertical = ({
  title,
  description,
  buttonText,
  imgSrc,
  onClick,
}) => {
  return (
    <section className="flex justify-center items-center">
      <CardVertical
        imgSrc={imgSrc}
        title={title}
        description={description}
        buttonText={buttonText}
        onButtonClick={onClick}
      />
    </section>
  );
};

export default CommunityBlockVertical;
