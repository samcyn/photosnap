import React from "react";

import AppBrandLogo from "../shared/AppBrandLogo";
import AppLink from "../shared/AppLink";
import AppIcon from "../shared/AppIcon";
import AppButton from "../shared/AppButton";

const AppFooter = () => {
  return (
    <footer className="bg-black">
      <div className="container">
        <div className="py-14 px-4 flex flex-col md:flex-row md:justify-between md:py-16 md:px-6 xl:px-0">
          <div className="flex flex-col xl:grid xl:grid-rows-3 xl:grid-flow-col xl:gap-0">
            <div className="
          text-center leading-[10px] mb-8 
          md:text-left xl:row-span-2 xl:mb-0"
            >
              <AppBrandLogo className="text-white" />
            </div>

            <ul className="
          flex justify-center 
          items-center gap-3 mb-12 
          md:justify-start md:order-3 md:mb-0
          xl:order-2 xl:items-end"
            >
              <li>
                <a href="/" className="flex justify-center items-center text-white">
                  <AppIcon width="20" height="20" icon="facebook" />
                </a>
              </li>
              <li>
                <a href="/" className="flex justify-center items-center text-white">
                  <AppIcon width="21" height="20" icon="youtube" />
                </a>
              </li>
              <li>
                <a href="/" className="flex justify-center items-center text-white">
                  <AppIcon width="21" height="18" icon="twitter" />
                </a>
              </li>
              <li>
                <a href="/" className="flex justify-center items-center text-white">
                  <AppIcon width="20" height="20" icon="pinterest" />
                </a>
              </li>
              <li>
                <a href="/" className="flex justify-center items-center text-white">
                  <AppIcon width="21" height="20" icon="instagram" />
                </a>
              </li>
            </ul>

            <ul className="flex flex-col gap-5 mb-27 md:flex-row md:gap-6 md:order-2 md:mb-18 xl:order-3 xl:row-span-3 xl:flex-col xl:items-start xl:mb-0 xl:gap-19px xl:pl-27">
              <li className="flex justify-center text-center">
                <AppLink
                  to="/"
                  className="flex text-white text-xs font-bold uppercase tracking-2px"
                  activeClassName="!text-orange"
                >Home</AppLink>
              </li>
              <li className="flex justify-center text-center">
                <AppLink
                  to="/stories"
                  className="flex text-white text-xs font-bold uppercase tracking-2px"
                  activeClassName="!text-orange"
                >Stories</AppLink>
              </li>
              <li className="flex justify-center text-center">
                <AppLink
                  to="/features"
                  className="flex text-white text-xs font-bold uppercase tracking-2px"
                  activeClassName="!text-orange"
                >Features</AppLink>
              </li>
              <li className="flex justify-center text-center">
                <AppLink
                  to="/pricing"
                  className="flex text-white text-xs font-bold uppercase tracking-2px"
                  activeClassName="!text-orange"
                >Pricing</AppLink>
              </li>
            </ul>
          </div>



          <div className="flex flex-col gap-5 md:gap-27 xl:gap-18">
            <div className="text-center md:-mt-3 md:text-right">
              <AppButton
                className="uppercase text-white pr-0"
                variant="text"
                endIcon={
                  <AppIcon width="43" height="14" icon="arrow-forward-right" />
                }
              >
                Get An Invite
              </AppButton>
            </div>
            <p className="text-white/50 text-center font-normal text-[15px] leading-5 mix-blend-normal">Copyright 2019. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
