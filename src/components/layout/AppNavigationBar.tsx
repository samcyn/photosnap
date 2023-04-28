import React, { useState } from "react";

import AppBrandLogo from "../shared/AppBrandLogo";
import AppIconButton from "../shared/AppIconButton";
import AppLink from "../shared/AppLink";
import AppButton from "../shared/AppButton";

const AppNavigationBar = () => {
  const [expandClass, setExpandClass] = useState(false);

  const onExpand = () => {
    setExpandClass(prev => !prev);
  }

  return (
    <header className="relative bg-white z-10">
      <div className="container mx-auto">
        <nav
          className="header__nav flex flex-wrap md:flex-nowrap items-center lg:items-center px-6 py-7 md:px-10 md:py-4"
          aria-label="Main navigation"
        >
          {/* logo/brand starts */}
          <AppBrandLogo className="logo" aria-label="audioPhile" />
          {/* logo/brand ends */}

          {/* hamburger bar starts  */}
          <div className="flex text-black ml-auto md:hidden">
            {
              expandClass ? (
                <AppIconButton icon="close" width="16" height="15" viewBox="0 0 16 15" color="none" onClick={onExpand} />
              ) : (
                <AppIconButton icon="hamburger" width="20" height="6" viewBox="0 0 20 6" color="none" onClick={onExpand} />
              )
            }
          </div>
          {/* hamburger bar ends */}

          {/* collapse area */}
          <div className={`${expandClass ? 'md:flex' : 'hidden md:flex'} basis-full md:basis-auto mt-7 md:mt-0 pt-8 pr-2 pb-1 md:pt-0 md:pr-0 md:pb-0 flex-grow items-center justify-between`}>
            {/* menus starts */}
            <ul className="flex flex-wrap md:flex-grow md:justify-center p-0 m-0 list-none flex-row gap-5 md:gap-9 mb-5 md:mb-0">
              <li className="flex justify-center text-center basis-full md:basis-auto">
                <AppLink
                  to="/"
                  className="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-[1.5px]"
                  activeClassName="!text-orange"
                >Stories</AppLink>
              </li>
              <li className="flex justify-center text-center basis-full md:basis-auto">
                <AppLink
                  to="/headphones"
                  className="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-[1.5px]"

                  activeClassName="!text-orange"
                >Features</AppLink>
              </li>
              <li className="flex justify-center text-center basis-full md:basis-auto">
                <AppLink
                  to="/speakers"
                  className="flex text-black text-xs font-bold uppercase tracking-2px m-0 hover:text-black/30 py-[1.5px]"
                  activeClassName="!text-orange"
                >Pricing</AppLink>
              </li>
            </ul>
            {/* action button */}
            <div className="md:flex">
              <AppButton className="uppercase w-full justify-center">Get An Invite</AppButton>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default AppNavigationBar;