import React from "react";

import AppIcon, { IconBaseProps } from "../AppIcon";

type Props = {
  title: string
  className?: string
  description: string
  iconProps: IconBaseProps
}

const AppCardWithIcon = ({
  title,
  description,
  className,
  iconProps
}: Props) => (
  <div className={className}>
    <div className="flex justify-center items-center h-18 mb-12 text-inherit">
      <AppIcon {...iconProps} />
    </div>
    <div>
      <p className="font-bold text-center text-inherit text-[18px] leading-[25px] mb-4">{title}</p>
      <p className="font-normal text-center text-inherit text-[15px] leading-[25px] mix-blend-normal opacity-60">
        {description}
      </p>
    </div>
  </div>
)

AppCardWithIcon.defaultProps = {
  className: "text-black"
}

export default AppCardWithIcon;