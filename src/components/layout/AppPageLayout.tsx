import React, { PropsWithChildren } from 'react';

import AppNavigationBar from './AppNavigationBar';
import AppFooter from './AppFooter';
import { AppCardWithMain } from '../shared/cards';

const AppPageLayout = ({ pageTitle, children }: PropsWithChildren<{
  pageTitle: string
}>) => {
  return (
    <>
      <AppNavigationBar />
      <main>
        {/* <h1>{pageTitle}</h1> */}
        <AppCardWithMain
          showIndicator
        />
        <AppCardWithMain
          title="Beautiful stories every time"
          description="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          callToActionText="View the stories"
          className="bg-white text-black md:pt-[136px] md:pb-[135px]"
        />

        {children}
      </main>
      <AppFooter />
    </>
  )
}

export default AppPageLayout;