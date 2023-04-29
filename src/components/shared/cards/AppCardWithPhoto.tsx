import React from "react";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';

type Props = {
  src: ImageDataLike
  alt: string
  className?: string
}

const AppCardWithPhoto = ({
  src,
  alt,
  className,
}: Props) => {
  console.log(src, 123456, alt);
  const image = getImage(src) as IGatsbyImageData;

  return (
    <figure className={`relative overflow-hidden ${className}`}>
      <GatsbyImage
        className="absolute inset-0 h-full w-full"
        image={image}
        alt={alt}
      />
    </figure>
  );
}

export default AppCardWithPhoto;