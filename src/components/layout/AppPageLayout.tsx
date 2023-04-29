import React, { PropsWithChildren } from 'react';

import AppNavigationBar from './AppNavigationBar';
import AppFooter from './AppFooter';

const AppPageLayout = ({ pageTitle, children }: PropsWithChildren<{
  pageTitle: string
}>) => {
  return (
    <>
      <AppNavigationBar />
      <main>
        {/* <h1>{pageTitle}</h1> */}

        {children}
      </main>
      <AppFooter />
    </>
  )
}

export default AppPageLayout;