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
    <div className="flex justify-center items-center mb-12 text-black">
      <AppIcon {...iconProps} />
    </div>
    <div>
      <p className="font-bold text-center text-black text-[18px] leading-[25px] mb-4">{title}</p>
      <p className="font-normal text-center text-black text-[15px] leading-[25px] mix-blend-normal opacity-60">
        {description}
      </p>
    </div>
  </div>
)

AppCardWithIcon.defaultProps = {
  className: "px-6 py-7"
}

export default AppCardWithIcon;