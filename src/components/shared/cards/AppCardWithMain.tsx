import React from "react";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';

import AppButton from "../AppButton";
import AppIcon from "../AppIcon";

const indicatorStyles = {
  // note -- tailwind has no angle property
  background: 'linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)'
}
const Indicator = () => (
  <div className="absolute w-32 h-6px top-0 md:w-6px md:h-full md:left-0 md:top-0 md:bottom-0" style={indicatorStyles}></div>
);

interface Props {
  title: string
  description?: string
  callToActionText?: string
  showIndicator?: boolean
  className?: string
  bodyClassName?: string
  tagline?: string
  publishedDate?: string
  author?: string
  titleClassName?: string
  descriptionClassName?: string
  src?: ImageDataLike
  alt?: string,
  imageClassName?: string,
  actionButtonClassName?: string
  containerClassName?: string
  onCallToAction?: React.MouseEventHandler<Element> | undefined
}

const AppCardWithMain = ({
  title,
  description,
  callToActionText,
  showIndicator,
  className,
  bodyClassName,
  tagline,
  publishedDate,
  author,
  titleClassName,
  descriptionClassName,
  src,
  alt,
  imageClassName,
  actionButtonClassName,
  containerClassName,
  onCallToAction
}: Props) => {
  const image = getImage(src || null) as IGatsbyImageData;

  return (
    <div className={`flex relative ${className}`}>
      <div className={`relative w-full z-10 ${bodyClassName || ''}`}>

        <div className={`container flex flex-col ${containerClassName || ''}`}>
          {/* indicator */}
          {showIndicator ? <Indicator /> : null}

          {tagline && <p className="text-inherit font-bold text-xs tracking-2px mb-4 md:mb-6">{tagline}</p>}
          <h3 className={`text-inherit font-bold ${titleClassName || ''}`}>
            {title}
          </h3>

          {/* if published date or author */}
          {(publishedDate || author) && (<p className="text-inherit text-13px leading-17px font-normal mb-6 inline-flex gap-2">
            <span className="mix-blend-normal opacity-75">{publishedDate}</span>
            <span>{author}</span>
          </p>)
          }

          {
            description && (
              <p className={`text-inherit font-normal ${descriptionClassName || ''}`}>
                {description}
              </p>
            )
          }

          {
            callToActionText && (
              <AppButton
                className={actionButtonClassName}
                variant="text"
                endIcon={
                  <AppIcon width="42" height="12" icon="arrow-forward-right" />
                }
                onClick={onCallToAction}
              >
                {callToActionText}
              </AppButton>
            )
          }
        </div>
      </div>
      {
        src && (
          <GatsbyImage
            className={`!absolute inset-0 h-full w-full ${imageClassName || ''}`}
            image={image}
            alt={alt || 'card image'}
          />
        )
      }
    </div>
  )
}

AppCardWithMain.defaultProps = {
  showIndicator: false,
  className: 'justify-center items-center bg-black text-white py-0 md:py-43 xl:py-43',
  bodyClassName: 'px-6 py-18 md:px-38px md:py-0 xl:px-24',
  titleClassName: "text-32px leading-10 tracking-thirds mb-4 md:text-40px md:leading-12 uppercase md:tracking-fourths md:mb-5",
  descriptionClassName: "text-15px leading-25px mb-3 mix-blend-normal opacity-60 md:mb-9",
  actionButtonClassName: "uppercase text-inherit pl-0 pb-0",
}

export default AppCardWithMain;