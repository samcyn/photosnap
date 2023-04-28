import React from "react";
import AppButton from "../AppButton";
import AppIcon from "../AppIcon";
import { ReactNode } from "@mdx-js/react/lib";

const indicatorStyles = {
  // note -- tailwind has no angle property
  background: 'linear-gradient(26.57deg, #FFC593 0%, #BC7198 43.29%, #5A77FF 83.33%)'
}
const Indicator = () => (
  <div className="absolute w-32 h-6px top-0 md:w-6px md:h-full md:left-0 md:top-0 md:bottom-0" style={indicatorStyles}></div>
);
interface Props {
  title: string
  description: string
  callToActionText?: string
  showIndicator?: boolean
  className?: string
  bodyClassName?: string
  onCallToAction?: React.MouseEventHandler<Element>
}

const AppCardWithMain = ({
  title,
  description,
  callToActionText,
  showIndicator,
  className,
  bodyClassName,
  onCallToAction
}: Props) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div className={`relative flex flex-col w-full ${bodyClassName}`}>
        {/* indicator */}
        {showIndicator ? <Indicator /> : null}

        <h3 
          className="
            text-inherit font-bold text-[32px] 
            leading-10 tracking-[3.33333px] mb-4 
            md:text-[40px] md:leading-[48px] 
            uppercase md:tracking-[4.16667px] 
            md:mb-[21px]"
          >
          {title}
        </h3>
        <p className="text-inherit font-normal text-[15px] leading-[25px] mb-[11px] mix-blend-normal opacity-60 md:mb-9">
          {description}
        </p>
        <AppButton
          className="uppercase text-inherit pl-0 pb-0"
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
  )
}

AppCardWithMain.defaultProps = {
  title: 'Create and share your photo stories.',
  description: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
  callToActionText: 'Get An Invite',
  showIndicator: false,
  className: 'bg-black text-white py-0 md:py-[173px] xl:py-[172px]',
  bodyClassName: 'px-6 py-18 md:px-[54px] md:py-0 xl:pl-[112px] xl:pr-[111px]',
}

export default AppCardWithMain;