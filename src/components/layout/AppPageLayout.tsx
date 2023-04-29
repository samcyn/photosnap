import React, { PropsWithChildren } from 'react';

import AppNavigationBar from './AppNavigationBar';
import AppFooter from './AppFooter';

const AppPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <AppNavigationBar />
      <main>
        {children}
      </main>
      <AppFooter />
    </>
  )
}

export default AppPageLayout;