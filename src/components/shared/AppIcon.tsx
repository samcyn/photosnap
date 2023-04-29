import React, { createElement, SVGAttributes, CSSProperties } from 'react';

import IconsLibrary, { IconTypes } from '../../lib/iconLibrary';

export interface IconBaseProps extends SVGAttributes<string> {
  size?: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
  icon?: IconTypes;
  viewBox?: string;
}

const AppIcon = ({
  className,
  viewBox,
  style,
  size,
  color,
  icon,
  height,
  width,
}: IconBaseProps) => {

  const IconComponent = () => {
    if(!icon || !IconsLibrary[icon]) return null;
    return IconsLibrary[icon]();
  }
  return createElement('svg', {
    className,
    style,
    viewBox,
    width: width ? width : `${size ? size + 'px' : '1em'}`,
    height: height ? height : `${size ? size + 'px' : '1em'}`,
    fill: color || 'currentColor',
    xmlns: 'http://www.w3.org/2000/svg',
  }, createElement('title', null, icon?.toUpperCase()), <IconComponent />);
}

export default AppIcon;