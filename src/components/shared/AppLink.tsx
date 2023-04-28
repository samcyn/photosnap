import React, { forwardRef, Ref } from "react";
import { Link, GatsbyLinkProps } from 'gatsby';

const AppLink = forwardRef<HTMLAnchorElement, GatsbyLinkProps<HTMLAnchorElement>>(({
  to,
  children,
  ...rest
}, ref: Ref<HTMLAnchorElement>) => (
  <Link to={to} {...rest} ref={ref as any}>{ children }</Link>
))

export default AppLink;