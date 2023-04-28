import React, { CSSProperties } from "react";

import AppIcon from "./AppIcon";
import { IconTypes } from "../../lib/iconLibrary";

type Props = {
  size?: number
  color?: string
  className?: string
  style?: CSSProperties
  icon: IconTypes
  viewBox?: string
  height?: string
  width?: string
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined
}

const AppIconButton = ({
  icon,
  size,
  color,
  viewBox,
  height,
  width,
  className,
  onClick
}: Props) => (
  <button className={className} type="button" aria-label={icon} onClick={onClick}>
    <AppIcon
      size={size}
      color={color}
      icon={icon}
      viewBox={viewBox}
      height={height}
      width={width}
    />
  </button>
);

export default AppIconButton;