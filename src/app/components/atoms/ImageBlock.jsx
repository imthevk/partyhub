import Image from "next/image";

const ImageBlock = ({ src, alt, imageClassName = "" }) => (
  <Image
    className={`w-full aspect-video ${imageClassName}`}
    src={src}
    alt={alt}
  />
);

export default ImageBlock;
