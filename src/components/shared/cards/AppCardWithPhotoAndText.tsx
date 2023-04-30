import React from "react";
import { GatsbyImage, IGatsbyImageData, ImageDataLike, getImage } from 'gatsby-plugin-image';
import AppButton from "../AppButton";
import AppIcon from "../AppIcon";
import AppCardWithMain from "./AppCardWithMain";

// note: using this cause tailwind have no angle value for gradient
const overlayStyles = {
  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0.27%, rgba(0, 0, 0, 0.661222) 100%)'
}

type Props = {
  src: ImageDataLike
  alt: string
  className?: string
  storyTitle?: string
  storyDescription?: string
  imageClassName?: string
  storyAuthor?: string
  storyTagline?: string
  publishedDate?: string
  mode?: 'hero' | 'default',
  callToActionText?: string
  onCallToAction?: React.MouseEventHandler<Element>
}

const AppCardWithPhotoAndText = ({
  src,
  alt,
  className,
  storyTitle,
  storyAuthor,
  publishedDate,
  mode,
  storyDescription,
  imageClassName,
  callToActionText,
  storyTagline,
  onCallToAction
}: Props) => {
  const image = getImage(src) as IGatsbyImageData;

  const computedClass = mode === 'default' ? 'px-6 md:px-10 py-10 flex flex-col justify-end' : '';
  const imageClass = mode === 'default' ? '!absolute inset-0 h-full w-full' : 'relative md:absolute md:inset-0 md:h-full md:w-full';

  return (
    <figure className={`relative overflow-hidden ${computedClass} ${className || ''}`}>
      <GatsbyImage
        className={`${imageClass} ${imageClassName || ''}`}
        image={image}
        alt={alt}
      />

      {
        mode === 'default' ? (
          <>
            <div className="!absolute inset-0 h-full w-full z-0" style={overlayStyles}></div>
            <div className="relative z-10">
              {publishedDate && <time className="text-white text-[13px] leading-[17px] font-normal mb-1">{publishedDate}</time>}
              <p className="text-[18px] leading-[25px] font-bold text-white mb-1">{storyTitle}</p>
              <p className="font-normal text-white text-[13px] leading-[17px] mb-4">{storyAuthor}</p>
              <div className="w-full h-[1px] bg-white/25 mix-blend-normal" />
              <div className="mt-2">
                <AppButton
                  className="uppercase text-white w-full justify-between pl-0 pr-0 pb-0"
                  variant="text"
                  endIcon={
                    <AppIcon width="43" height="14" icon="arrow-forward-right" />
                  }
                  onClick={onCallToAction}
                >
                  {callToActionText}
                </AppButton>
              </div>
            </div>
          </>
        ) : (
          <AppCardWithMain
            title={storyTitle}
            description={storyDescription}
            callToActionText={callToActionText}
            tagline={storyTagline}
            publishedDate={publishedDate}
            author={storyAuthor}
            titleClassName="text-[32px] leading-10 tracking-[3.33333px] mb-4 md:text-[40px] md:leading-[48px] uppercase md:tracking-[4.16667px] md:mb-4"
            descriptionClassName="text-[15px] leading-[25px] mb-3 mix-blend-normal opacity-60 md:mb-3"
            className='bg-black text-white py-0 md:py-[122px] md:relative md:z-10 md:bg-transparent xl:py-[122px]'
            bodyClassName='px-7 py-12 md:px-10 md:py-0 md:max-w-[467px] xl:pl-[112px] xl:pr-[112px] lg:max-w-[611px]'
          />
        )
      }

    </figure>
  );
}

AppCardWithPhotoAndText.defaultProps = {
  mode: 'default'
};

export default AppCardWithPhotoAndText;