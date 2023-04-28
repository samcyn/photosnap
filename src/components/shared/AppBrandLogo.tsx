import React from "react";
import { StaticImage } from 'gatsby-plugin-image';

import AppLink from "./AppLink";
import AppIcon from "./AppIcon";

type Props = {
  className?: string
}

const AppBrandLogo = ({className}: Props) => (
  <AppLink
    className={`transition p-0 mr-0 inline-flex items-center hover:text-orange-100 ${className || ''}`}
    to="/"
    aria-label="photosnap logo"
  >
    <AppIcon icon="logo" width="170" height="16" />
    {/* <StaticImage
      alt="photosnap logo"
      src="../assets/images/home/desktop/beautiful-stories.jpg"
    /> */}
  </AppLink>
);

AppBrandLogo.defaultProps = {
  className: 'text-black',
};

export default AppBrandLogo;